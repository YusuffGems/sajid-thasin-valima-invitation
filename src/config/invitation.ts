import type { InvitationConfig } from "../types/invitation";

const mapQuery = encodeURIComponent(
  "Buhari's Shiraz Hall, 14 Whannels Road, Egmore, Chennai 600008",
);

export const invitation: InvitationConfig = {
  coupleShort: { groom: "Mohamed Sajid", bride: "Thasin Taj" },
  host: {
    blessing: [
      "In the Name of Allah,",
      "the Omnipotent and with the blessings of",
      "Prophet Mohammad (Sallallahu a.wasallam)",
    ],
    names: "Mrs. & Mr. Alhaj. K.T. Mohamed Hameem B.A.,",
    designation: "(Asst. Secretary, TN. Wakf Board, Rtd.)",
    solicit: [
      "Solicit your august presence with family and",
      "friends on the auspicious Valima (Reception)",
      "of their younger brother's beloved son",
    ],
  },
  groom: {
    name: "K.M. Mohamed Sajid",
    qualification: "B.Tech.,",
    lines: [
      "(TCR Arabia Co. Ltd., Jubail, KSA)",
      "(Grandson of (Late) Haji. K.A. Thameem Ansari)",
      "S/o. K.T. Mohamed Buhari (Southern Railway, Chennai - 23)",
    ],
  },
  bride: {
    name: "S. Thasin Taj",
    lines: ["D/o. S. Shakir Basha, Musaravakkam, Kanchipuram"],
  },
  event: {
    title: "Valima",
    dateLabel: "26th January 2027",
    dayLabel: "Tuesday",
    timeLabel: "Evening",
    hijriLabel: "18th day of Shaban, Hijri 1448",
    dinnerLabel: "Dinner: 7 p.m. onwards",
    startsAt: "2027-01-26T19:00:00+05:30",
    venue: {
      name: "Buhari's Shiraz Hall",
      addressLines: [
        "14, Whannels Road, Egmore,",
        "(Next to Albert theater),",
        "Chennai - 600 008.",
      ],
      mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
    },
  },
  compliments: [
    [
      "Haji. K.T. Mohamed Mohideen",
      "Haji. M.S. Arieeff.",
      "S. Shakir Basha.",
      "R.S. Madhar",
    ],
    ["K.M. Fahim Abdullah", "K.M. Mohamed Saleem", "K.M. Ahmed Bilal"],
    ["Haji. Shaik Peer Mohamed", "Haji. Mohamed Sabeen", "Haji. Mohamed Ismail"],
  ],
  rsvp: { whatsappNumber: import.meta.env.VITE_RSVP_WHATSAPP ?? "" },
};
