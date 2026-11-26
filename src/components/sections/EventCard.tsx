import { invitation } from "../../config/invitation";
import { Divider } from "../ui/Divider";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

function Ornament() {
  return (
    <svg className="event__ornament" viewBox="0 0 120 120" aria-hidden="true">
      <g fill="none" stroke="#c9a93a" strokeWidth="1.4">
        <rect x="24" y="24" width="72" height="72" />
        <rect x="24" y="24" width="72" height="72" transform="rotate(45 60 60)" />
        <circle cx="60" cy="60" r="30" />
        <circle cx="60" cy="60" r="12" />
      </g>
      <path
        d="M66 46a16 16 0 1 0 0 28 13 13 0 1 1 0-28z"
        fill="#c9a93a"
        transform="translate(-4 0)"
      />
      <path d="M72 54l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z" fill="#c9a93a" />
    </svg>
  );
}

export function EventCard() {
  const { event } = invitation;
  const { venue } = event;
  return (
    <section className="section">
      <Reveal>
        <SectionTitle title="Event Details" eyebrow="Join us for the celebration" />
        <article className="card event">
          <Ornament />
          <h3 className="script-title event__title">{event.title}</h3>
          <Divider />
          <p className="event__date">{event.dateLabel}</p>
          <span className="pill">
            {event.dayLabel} · {event.timeLabel}
          </span>
          <p className="event__hijri">{event.hijriLabel}</p>
          <p className="event__dinner">{event.dinnerLabel}</p>
          <p className="event__venue-label">
            <i /> Venue <i />
          </p>
          <h4 className="event__venue">{venue.name}</h4>
          {venue.addressLines.map((line) => (
            <p key={line} className="event__address">
              {line}
            </p>
          ))}
          <a className="pill pill--button" href={venue.mapsUrl} target="_blank" rel="noopener noreferrer">
            View on maps
          </a>
        </article>
      </Reveal>
    </section>
  );
}
