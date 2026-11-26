import { WaxSeal } from "../ui/WaxSeal";

interface RibbonProps {
  onOpen: () => void;
  hidden: boolean;
}

export function Ribbon({ onOpen, hidden }: RibbonProps) {
  return (
    <div className={`ribbon ${hidden ? "ribbon--hidden" : ""}`}>
      <div className="ribbon__band" />
      <p className="ribbon__hint">Tap to begin</p>
      <button
        type="button"
        className="ribbon__seal"
        onClick={onOpen}
        aria-label="Open the invitation"
      >
        <span className="ribbon__bow ribbon__bow--left" />
        <span className="ribbon__bow ribbon__bow--right" />
        <span className="ribbon__tail ribbon__tail--left" />
        <span className="ribbon__tail ribbon__tail--right" />
        <WaxSeal size={92} />
      </button>
    </div>
  );
}
