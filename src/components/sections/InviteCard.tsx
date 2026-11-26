import { invitation } from "../../config/invitation";
import type { Person } from "../../types/invitation";
import { Reveal } from "../ui/Reveal";

function PersonBlock({ person, role }: { person: Person; role: string }) {
  return (
    <div className="invite__person">
      <p className="invite__role">{role}</p>
      <h3 className="invite__name">
        {person.name}
        {person.qualification && (
          <span className="invite__qualification"> {person.qualification}</span>
        )}
      </h3>
      {person.lines.map((line) => (
        <p key={line} className="invite__line">
          {line}
        </p>
      ))}
    </div>
  );
}

export function InviteCard() {
  const { host, groom, bride } = invitation;
  return (
    <section id="invite" className="section">
      <Reveal>
        <article className="card invite">
          <p className="invite__bismillah" lang="ar" dir="rtl">
            بسم الله الرحمن الرحيم
          </p>
          <p className="invite__blessing">{host.blessing.join(" ")}</p>
          <h2 className="script-title invite__title">We Cordially Invite You</h2>
          <p className="invite__host">{host.names}</p>
          <p className="invite__designation">{host.designation}</p>
          <p className="invite__solicit">{host.solicit.join(" ")}</p>
          <PersonBlock person={groom} role="Selvan" />
          <p className="invite__with">with</p>
          <PersonBlock person={bride} role="Selvi" />
        </article>
      </Reveal>
    </section>
  );
}
