import PocketBase from "pocketbase";
import { writable } from "svelte/store";
// import { currentUser } from ".";

export const pb = new PocketBase("http://127.0.0.1:8090"); // Local DB
// export const pb = new PocketBase("https://roadhero.fly.dev"); // Remote DB
