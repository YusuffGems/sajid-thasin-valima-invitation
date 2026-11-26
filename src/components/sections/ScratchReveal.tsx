import { useCallback, useRef, useState } from "react";
import { useScratchHeart } from "../../hooks/useScratchHeart";
import { HEART_PATH, HEART_VIEWBOX } from "../../utils/heart";
import { Confetti } from "../ui/Confetti";
import { Reveal } from "../ui/Reveal";

export function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const handleReveal = useCallback(() => setRevealed(true), []);
  const handlers = useScratchHeart(canvasRef, handleReveal);

  return (
    <section className="section scratch">
      <Reveal>
        <p className="section-title__eyebrow">A special surprise</p>
        <h2 className="caps-title scratch__title">
          Scratch the heart to reveal our Valima date
        </h2>
        <div className="scratch__stage">
          {revealed && <Confetti />}
          <svg
            className="scratch__heart"
            viewBox={`0 0 ${HEART_VIEWBOX.width} ${HEART_VIEWBOX.height}`}
            aria-hidden="true"
          >
            <path d={HEART_PATH} fill="#fffdf7" stroke="#c9a93a" strokeWidth="1.6" />
          </svg>
          <div className="scratch__date" aria-live="polite">
            <span>26</span>
            <span>January</span>
            <span>2027</span>
          </div>
          <canvas
            ref={canvasRef}
            className={`scratch__canvas ${revealed ? "scratch__canvas--gone" : ""}`}
            aria-label="Scratch area"
            {...handlers}
          />
        </div>
        {!revealed && <p className="scratch__hint">Scratch to reveal! ✨</p>}
        {revealed && <p className="scratch__hint">Tuesday · Dinner 7 p.m. onwards</p>}
      </Reveal>
    </section>
  );
}
