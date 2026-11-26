import { useState } from "react";
import { invitation } from "../../config/invitation";
import type { RsvpErrors, RsvpFormValues } from "../../types/invitation";
import { buildRsvpMessage, buildWhatsAppUrl } from "../../utils/rsvpMessage";
import { MAX_GUESTS, validateRsvp } from "../../validation/rsvp";

const INITIAL_VALUES: RsvpFormValues = {
  name: "",
  phone: "",
  attending: true,
  guests: 1,
  message: "",
};

export function useRsvpForm() {
  const [values, setValues] = useState<RsvpFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<RsvpErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");

  const setField = <K extends keyof RsvpFormValues>(key: K, value: RsvpFormValues[K]) =>
    setValues((current) => ({ ...current, [key]: value }));

  const changeGuests = (delta: number) =>
    setField("guests", Math.min(MAX_GUESTS, Math.max(1, values.guests + delta)));

  const submit = () => {
    const found = validateRsvp(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const number = invitation.rsvp.whatsappNumber;
    if (!number) {
      setNotice("RSVP is not available right now. Please call the family to confirm.");
      return;
    }
    const message = buildRsvpMessage(values, invitation.event);
    window.open(buildWhatsAppUrl(number, message), "_blank", "noopener,noreferrer");
    setNotice("");
    setSubmitted(true);
  };

  return { values, errors, submitted, notice, setField, changeGuests, submit };
}
