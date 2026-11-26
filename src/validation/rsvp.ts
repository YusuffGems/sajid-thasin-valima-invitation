import type { RsvpErrors, RsvpFormValues } from "../types/invitation";

const PHONE_PATTERN = /^\+?[0-9\s-]{8,15}$/;
export const MAX_GUESTS = 10;
export const MAX_MESSAGE = 300;

export function validateRsvp(values: RsvpFormValues): RsvpErrors {
  const errors: RsvpErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (values.guests < 1 || values.guests > MAX_GUESTS) {
    errors.guests = `Guests must be between 1 and ${MAX_GUESTS}.`;
  }
  if (values.message.length > MAX_MESSAGE) {
    errors.message = `Keep your message under ${MAX_MESSAGE} characters.`;
  }
  return errors;
}
