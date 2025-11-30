export const getLocalStorageItem = <T>(key: string, fallback?: T) => {
  if (typeof window === "undefined") return fallback;

  let value;

  try {
    value = localStorage.getItem(key) || undefined;
  } catch {
    // unsupported
  }

  return value || fallback;
};
