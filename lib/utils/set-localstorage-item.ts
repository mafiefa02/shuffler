export const setLocalStorageItem = (key: string, value: string) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, value);
  } catch {
    // unsupported
  }
};
