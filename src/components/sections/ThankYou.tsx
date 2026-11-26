import { invitation } from "../../config/invitation";
import { WaxSeal } from "../ui/WaxSeal";
import { Reveal } from "../ui/Reveal";

export function ThankYou() {
  const { groom, bride } = invitation.coupleShort;
  return (
    <section className="thanks">
      <Reveal>
        <article className="envelope">
          <h2 className="script-title envelope__title">Thank You</h2>
          <p className="envelope__text">
            for being part of our celebration. Your love and blessings mean the world to us.
          </p>
          <p className="envelope__with">With love,</p>
          <p className="script-title envelope__names">
            {groom.split(" ")[1]} &amp; {bride.split(" ")[0]}
          </p>
          <div className="envelope__stamps">
            <div className="postmark">
              <small>Chennai</small>
              <b>26 · 01 · 27</b>
              <small>India</small>
            </div>
            <div className="stamp">
              <WaxSeal size={64} />
            </div>
          </div>
          <p className="field__label">To</p>
          <p className="envelope__to">Our dear family</p>
          <p className="envelope__to">&amp; friends,</p>
          <p className="envelope__to">with all our love</p>
        </article>
      </Reveal>
    </section>
  );
}
