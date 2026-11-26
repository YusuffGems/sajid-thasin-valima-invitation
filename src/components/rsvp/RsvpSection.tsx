import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { BoardingPass } from "./BoardingPass";
import { useRsvpForm } from "./useRsvpForm";

export function RsvpSection() {
  const form = useRsvpForm();
  return (
    <section className="section">
      <Reveal>
        <SectionTitle title="Kindly Respond" />
        <p className="rsvp__lead">
          Your presence means the world to us — fill in your pass to let us know.
        </p>
        {form.submitted ? (
          <p className="rsvp__done">
            JazakAllahu Khairan! Your response is ready to send in WhatsApp — just press send there.
          </p>
        ) : (
          <BoardingPass form={form} />
        )}
      </Reveal>
    </section>
  );
}
