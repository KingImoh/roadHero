import PocketBase from "pocketbase";
import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import type { inferAsyncReturnType } from "@trpc/server";
import { writable } from "svelte/store";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const createContext = async ({ req, res }: CreateFastifyContextOptions) => {
  return { req, res, pb, user: null };
};

export type Context = inferAsyncReturnType<typeof createContext>;

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
  currentUser.set(pb.authStore.model);
});
