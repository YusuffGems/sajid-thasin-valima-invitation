import { useEffect, useState } from "react";
import { getTimeLeft, type TimeLeft } from "../utils/time";

export function useCountdown(target: string): TimeLeft {
  const targetMs = new Date(target).getTime();
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return getTimeLeft(targetMs, now);
}
