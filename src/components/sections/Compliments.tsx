import { invitation } from "../../config/invitation";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Compliments() {
  return (
    <section className="section">
      <Reveal>
        <SectionTitle title="With Best Compliments From" script={false} />
        <article className="card compliments">
          {invitation.compliments.map((group) => (
            <ul key={group.join("|")} className="compliments__group">
              {group.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          ))}
        </article>
      </Reveal>
    </section>
  );
}
