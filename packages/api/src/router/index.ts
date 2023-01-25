import type { Context } from "../context";
import user from "./routes/user";
import { initTRPC, TRPCError } from "@trpc/server";

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  user,
});

const isAuthed = middleware(({ next, ctx }) => {
  ctx.pb.authStore.loadFromCookie(ctx.req.headers.cookie || "");
  console.log("(hooks)authStoreValid:", ctx.pb.authStore.isValid);

  if (!ctx.pb.authStore.isValid) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      user: ctx.pb.authStore.model,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);

export type AppRouter = typeof appRouter;
