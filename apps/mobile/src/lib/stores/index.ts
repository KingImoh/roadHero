import { writable } from "svelte/store";
import { capacitorStorageStore } from "./capacitor-storage";

export const navigationStack = capacitorStorageStore("history-length", window.history.length);

export enum iconType {
  info = "i-material-symbols-info-rounded bg-primaryBlue",
  warning = "i-carbon-warning-filled bg-amber",
  error = "i-icon-park-outline-error bg-red",
  success = "i-ep-success-filled bg-secondaryGreen",
}

export const modalState = writable({
  title: "",
  msg: "" as any,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  buttons: [{ text: "", handler: () => {} }],
  icon: "",
} as any);
