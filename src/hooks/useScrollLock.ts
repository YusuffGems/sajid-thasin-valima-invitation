import { useEffect } from "react";

export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const { body, documentElement } = document;
    const previous = [body.style.overflow, documentElement.style.overflow];
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    return () => {
      body.style.overflow = previous[0];
      documentElement.style.overflow = previous[1];
    };
  }, [locked]);
}
