import { useCallback, useEffect, useRef, type RefObject } from "react";
import { HEART_PATH, HEART_VIEWBOX } from "../utils/heart";

const REVEAL_THRESHOLD = 0.45;
const CHECK_EVERY_N_MOVES = 8;

interface Point {
  x: number;
  y: number;
}

function paintGold(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const scale = width / HEART_VIEWBOX.width;
  const heart = new Path2D(HEART_PATH);
  ctx.save();
  ctx.scale(scale, scale);
  const gradient = ctx.createLinearGradient(0, 0, 100, 90);
  gradient.addColorStop(0, "#f1de8e");
  gradient.addColorStop(0.35, "#c9a93a");
  gradient.addColorStop(0.6, "#e6cf72");
  gradient.addColorStop(1, "#b8962c");
  ctx.fillStyle = gradient;
  ctx.fill(heart);
  ctx.lineWidth = 1.6;
  ctx.strokeStyle = "#c9a93a";
  ctx.stroke(heart);
  ctx.restore();
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = "#ffffff";
  for (let y = 0; y < height; y += 14) ctx.fillRect(0, y, width, 2);
  ctx.globalAlpha = 1;
}

function opaqueRatio(ctx: CanvasRenderingContext2D, w: number, h: number): number {
  const { data } = ctx.getImageData(0, 0, w, h);
  let opaque = 0;
  for (let i = 3; i < data.length; i += 16) if (data[i] > 20) opaque++;
  return opaque;
}

export function useScratchHeart(
  canvasRef: RefObject<HTMLCanvasElement>,
  onReveal: () => void,
) {
  const revealed = useRef(false);
  const initialOpaque = useRef(1);
  const moves = useRef(0);
  const last = useRef<Point | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { willReadFrequently: true });
    if (!canvas || !ctx) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.scale(ratio, ratio);
    paintGold(ctx, width, height);
    initialOpaque.current = Math.max(opaqueRatio(ctx, canvas.width, canvas.height), 1);
  }, [canvasRef]);

  const scratch = useCallback(
    (point: Point) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d", { willReadFrequently: true });
      if (!canvas || !ctx || revealed.current) return;
      const size = canvas.getBoundingClientRect().width * 0.09;
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round";
      ctx.lineWidth = size;
      ctx.beginPath();
      const from = last.current ?? point;
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      last.current = point;
      moves.current += 1;
      if (moves.current % CHECK_EVERY_N_MOVES !== 0) return;
      const left = opaqueRatio(ctx, canvas.width, canvas.height);
      if (1 - left / initialOpaque.current >= REVEAL_THRESHOLD) {
        revealed.current = true;
        onReveal();
      }
    },
    [canvasRef, onReveal],
  );

  const pointFromEvent = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return {
    onPointerDown: (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      last.current = null;
      scratch(pointFromEvent(e));
    },
    onPointerMove: (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (e.buttons === 0 && e.pointerType === "mouse") return;
      scratch(pointFromEvent(e));
    },
    onPointerUp: () => {
      last.current = null;
    },
  };
}
