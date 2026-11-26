export interface Person {
  name: string;
  qualification?: string;
  lines: string[];
}

export interface Host {
  blessing: string[];
  names: string;
  designation: string;
  solicit: string[];
}

export interface Venue {
  name: string;
  addressLines: string[];
  mapsUrl: string;
}

export interface EventDetails {
  title: string;
  dateLabel: string;
  dayLabel: string;
  timeLabel: string;
  hijriLabel: string;
  dinnerLabel: string;
  startsAt: string;
  venue: Venue;
}

export interface InvitationConfig {
  coupleShort: { groom: string; bride: string };
  host: Host;
  groom: Person;
  bride: Person;
  event: EventDetails;
  compliments: string[][];
  rsvp: { whatsappNumber: string };
}

export interface RsvpFormValues {
  name: string;
  phone: string;
  attending: boolean;
  guests: number;
  message: string;
}

export type RsvpErrors = Partial<Record<keyof RsvpFormValues, string>>;
