import { useState } from "react";
import { invitation } from "../../config/invitation";
import { useScrollLock } from "../../hooks/useScrollLock";
import { GatePanel } from "./GatePanel";
import { NightScene } from "./NightScene";
import { Ribbon } from "./Ribbon";

type Phase = "closed" | "opening" | "open";
const OPEN_DURATION_MS = 2400;

export function Hero() {
  const [phase, setPhase] = useState<Phase>("closed");
  const { groom, bride } = invitation.coupleShort;
  useScrollLock(phase !== "open");

  const open = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    window.setTimeout(() => setPhase("open"), OPEN_DURATION_MS);
  };

  const skip = () => {
    setPhase("open");
    window.requestAnimationFrame(() =>
      document.getElementById("invite")?.scrollIntoView({ behavior: "smooth" }),
    );
  };

  return (
    <section className={`hero hero--${phase}`}>
      <NightScene />
      <div className="hero__names">
        <p className="hero__label">Valima Invitation</p>
        <h1 className="hero__groom">{groom}</h1>
        <p className="hero__weds">Weds</p>
        <h1 className="hero__bride">{bride}</h1>
        <p className="hero__date">26 · 01 · 2027</p>
      </div>
      <div className="hero__gates">
        <GatePanel side="left" />
        <GatePanel side="right" />
      </div>
      <Ribbon onOpen={open} hidden={phase !== "closed"} />
      {phase !== "closed" && (
        <button type="button" className="hero__skip" onClick={skip}>
          Skip ›
        </button>
      )}
      {phase === "open" && (
        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll down</span>
          <i />
        </div>
      )}
    </section>
  );
}
