import type { EventDetails, RsvpFormValues } from "../types/invitation";

export function buildRsvpMessage(
  values: RsvpFormValues,
  event: EventDetails,
): string {
  const status = values.attending
    ? `Joyfully attending with ${values.guests} guest(s)`
    : "Regretfully unable to attend";
  const lines = [
    `Assalamu Alaikum! RSVP for the ${event.title} on ${event.dateLabel}.`,
    `Name: ${values.name}`,
    values.phone ? `Phone: ${values.phone}` : "",
    `Response: ${status}`,
    values.message ? `Message: ${values.message}` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

export function buildWhatsAppUrl(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
