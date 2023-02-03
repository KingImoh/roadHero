import PocketBase from "pocketbase";
import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import type { inferAsyncReturnType } from "@trpc/server";

export const pb = new PocketBase("http://127.0.0.1:8090"); // Local DB
// export const pb = new PocketBase("https://roadhero.fly.dev"); // Remote DB
pb.autoCancellation(false);

export const createContext = async ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res, pb, user: null };
};

export type Context = inferAsyncReturnType<typeof createContext>;
