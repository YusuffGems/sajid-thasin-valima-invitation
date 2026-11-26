import { invitation } from "../../config/invitation";
import { MAX_MESSAGE } from "../../validation/rsvp";
import type { useRsvpForm } from "./useRsvpForm";

type FormApi = ReturnType<typeof useRsvpForm>;

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {children}
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}

export function BoardingPass({ form }: { form: FormApi }) {
  const { values, errors, notice, setField, changeGuests, submit } = form;
  const { event } = invitation;

  return (
    <div className="pass">
      <div className="pass__head">
        <span>✦ The Valima Evening</span>
        <span>RSVP Pass</span>
      </div>
      <div className="pass__route">
        <div>
          <strong>26</strong>
          <small>January 2027</small>
        </div>
        <span className="pass__heart">♥</span>
        <div className="pass__right">
          <strong>7 PM</strong>
          <small>{event.dayLabel}</small>
        </div>
      </div>
      <div className="pass__body">
        <Field label="Your name" error={errors.name}>
          <input
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Full name"
            autoComplete="name"
          />
        </Field>
        <Field label="Phone number" error={errors.phone}>
          <input
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            placeholder="+91 ..."
            inputMode="tel"
            autoComplete="tel"
          />
        </Field>
        <p className="field__label">Will you attend?</p>
        <div className="choice">
          <button
            type="button"
            className={values.attending ? "choice__btn choice__btn--active" : "choice__btn"}
            onClick={() => setField("attending", true)}
          >
            Joyfully yes {values.attending && "✓"}
          </button>
          <button
            type="button"
            className={!values.attending ? "choice__btn choice__btn--active" : "choice__btn"}
            onClick={() => setField("attending", false)}
          >
            Regretfully no {!values.attending && "✓"}
          </button>
        </div>
        {values.attending && (
          <div className="stepper">
            <span className="field__label">Number of guests</span>
            <div className="stepper__controls">
              <button type="button" onClick={() => changeGuests(-1)} aria-label="Fewer guests">
                −
              </button>
              <b>{values.guests}</b>
              <button type="button" onClick={() => changeGuests(1)} aria-label="More guests">
                +
              </button>
            </div>
          </div>
        )}
        <Field label="A message for the family" error={errors.message}>
          <textarea
            rows={3}
            maxLength={MAX_MESSAGE}
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            placeholder="Your blessings & wishes..."
          />
        </Field>
      </div>
      <div className="pass__foot">
        <span className="pass__barcode" aria-hidden="true" />
        <button type="button" className="pass__send" onClick={submit}>
          Send RSVP
        </button>
      </div>
      {notice && <p className="pass__notice">{notice}</p>}
    </div>
  );
}
