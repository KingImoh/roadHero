import { writable } from "svelte/store";
import { capacitorStorageStore } from "./capacitor-storage";

export const navigationStack = capacitorStorageStore("history-length", window.history.length);
export const sidebarOpen = writable(false);

export const modalState = writable({
  title: "",
  content: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  buttons: [{ text: "", onclick: () => {} }], // [{text: "Ok", handler: () => {}}]
  icon: "",
});
