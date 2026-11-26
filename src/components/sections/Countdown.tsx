import { invitation } from "../../config/invitation";
import { useCountdown } from "../../hooks/useCountdown";
import { pad } from "../../utils/time";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Countdown() {
  const time = useCountdown(invitation.event.startsAt);
  const units = [
    { label: "Days", value: String(time.days) },
    { label: "Hours", value: pad(time.hours) },
    { label: "Minutes", value: pad(time.minutes) },
    { label: "Seconds", value: pad(time.seconds) },
  ];

  return (
    <section className="section">
      <Reveal>
        <SectionTitle title="The Big Day Approaches" />
        {time.isOver ? (
          <p className="countdown__over">Alhamdulillah, the celebration is here.</p>
        ) : (
          <div className="countdown" role="timer">
            {units.map((unit) => (
              <div key={unit.label} className="countdown__unit">
                <span className="countdown__value">{unit.value}</span>
                <span className="countdown__label">{unit.label}</span>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
