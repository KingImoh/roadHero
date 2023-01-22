import cors from "@fastify/cors";
import fastify from "fastify";
import cookie from "@fastify/cookie";
import { appRouter } from "./router";
import { createContext, pb } from "./context";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { object, string } from "zod";
import { ClientResponseError } from "pocketbase";

const app = fastify({ maxParamLength: 5000 });

app.register(cors, {
  origin: "http://localhost:5173",
  credentials: true,
});

app.register(cookie, {
  secret: "my-secret", // for cookies signature
  parseOptions: {}, // options for parsing cookies
});

app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

app.post("/signup", async (req, reply) => {
  const { fullname, username, email, password, passwordConfirm } = req.body as {
    fullname: string;
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

  const UserRegisterSchema = object({
    fullname: string(),
    username: string(),
    email: string().email({ message: "This is not an email dawg" }),
    password: string().min(4),
    passwordConfirm: string().min(4),
  });

  try {
    UserRegisterSchema.parse({
      fullname,
      username,
      email,
      password,
      passwordConfirm,
    });

    const user = await pb.collection("users").create({
      email,
      password,
      passwordConfirm,
      fullname,
      username,
    });

    console.dir({ user }, { depth: 10 });

    // await pb.collection("profiles").update(user.profile.id, {
    // });

    await pb.collection("users").authWithPassword(email, password);
  } catch (e) {
    // if (e instanceof ClientResponseError) {
    //   if (e.data.username.code === "validation_not_unique") {
    //     return invalid(401, { usernameTaken: true });
    //   } else if (e.data.email.code === "validation_invalid_email") {
    //     return invalid(401, { emailTaken: true });
    //   }
    // } else {
    //   throw error(401, "Unknown error occured");
    // }
  }

  // pb.authStore.loadFromCookie(req.headers.cookie || "");
  // console.log("(hooks)authStoreValid:", pb.authStore.isValid);

  // const pbAuthCookie = pb.authStore.exportToCookie();
  // const parsedPBAuthCookie = parseCookieString(pbAuthCookie);

  // reply.header("set-cookie", pbAuthCookie);
  // reply.send(parsedPBAuthCookie);
});

function parseCookieString(cookie: string) {
  return cookie.split(";").reduce((acc, c) => {
    const [key, v] = c.split("=");
    acc[key.trim()] = decodeURI(v);
    return acc;
  }, {} as Record<string, string>);
}

(async () => {
  try {
    await app.listen({ port: 5000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
