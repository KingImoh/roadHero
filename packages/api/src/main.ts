import cors from "@fastify/cors";
import fastify from "fastify";
import cookie from "@fastify/cookie";
import multipart from "@fastify/multipart";
import formbody from "@fastify/formbody";
import { appRouter } from "./router";
import { createContext, pb } from "./context";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { object, string } from "zod";
// import { ClientResponseError } from "pocketbase";

const app = fastify({ maxParamLength: 5000 });

app.register(cors, {
  origin: "*",
  // credentials: true,
});

app.register(cookie, {
  secret: "my-secret", // for cookies signature
  parseOptions: {}, // options for parsing cookies
});

app.register(multipart);
app.register(formbody);

app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter, createContext },
});

app.post("/signup", async (req, reply) => {
  const { username, email, password, passwordConfirm } = req.body as {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };

  const UserRegisterSchema = object({
    username: string(),
    email: string().email({ message: "This is not an email, Hero!" }),
    password: string().min(4),
    passwordConfirm: string().min(4),
  });

  try {
    UserRegisterSchema.parse({
      username,
      email,
      password,
      passwordConfirm,
    });

    const user = await pb.collection("users").create({
      email,
      password,
      passwordConfirm,
      username,
    });

    const { token, record } = user;

    reply
      .setCookie("pb_auth", pb.authStore.exportToCookie().slice(14))
      .send({ record: user, token, cookie: pb.authStore.exportToCookie(), worked: true });
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
    console.log("error signing up", e);

    reply.send({ ...e });
  }
});

app.post("/login", async (req, reply) => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  const UserLoginSchema = object({
    email: string().email({ message: "This is not an email dawg" }),
    password: string().min(4),
  });

  try {
    UserLoginSchema.parse({
      email,
      password,
    });

    const { token, record } = await pb.collection("users").authWithPassword(email, password);

    reply
      .setCookie("pb_auth", pb.authStore.exportToCookie().slice(14))
      .send({ record, token, cookie: pb.authStore.exportToCookie() });
  } catch (e) {
    reply.send({ ...e });
  }
});

app.get("/test", async (req, reply) => {
  console.log("headers.cookie:", req.headers.cookie);
  pb.authStore.loadFromCookie(req.headers.cookie || "");
  await pb.collection("users").authRefresh();
  console.log(pb.authStore.model);
  // console.log("(hooks)authStoreValid:", pb.authStore.isValid);
  reply.send({ pbAuthCookie: pb.authStore.exportToCookie() });
});

// // :fix: muiltipart form data issues
// app.post("/updateReport", async (req, reply) => {
//   const id = new URLSearchParams(req.url.slice(14)).get("id") as string;
//   const data = await req.file();
//   // const formData = await data.toBuffer();
//   console.log("req b ody:", id);
//   try {
//     // const report = await pb.collection("reports").update(id, formData);
//     // reply.send(report);
//   } catch (e) {
//     console.log(e);
//   }
// });

function parseCookieString(cookie: string) {
  return cookie.split(";").reduce((acc, c) => {
    const [key, v] = c.split("=");
    acc[key.trim()] = decodeURI(v);
    return acc;
  }, {} as Record<string, string>);
}

import os from "os";

const ifaces = os.networkInterfaces();
let wifiIp: string;

Object.keys(ifaces).forEach(function (ifname) {
  ifaces[ifname]?.forEach(function (iface) {
    if ("IPv4" !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    if (ifname.startsWith("Wi-Fi") || ifname.startsWith("wlan")) {
      wifiIp = iface.address;
      console.log(`Wi-Fi IP: ${wifiIp}`);
    }
  });
});

(async () => {
  try {
    app.listen(
      {
        port: 5000,
      },
      (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        console.log(`server listening on ${address})`);
      }
    );
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
