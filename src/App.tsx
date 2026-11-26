import { Hero } from "./components/hero/Hero";
import { RsvpSection } from "./components/rsvp/RsvpSection";
import { Compliments } from "./components/sections/Compliments";
import { Countdown } from "./components/sections/Countdown";
import { EventCard } from "./components/sections/EventCard";
import { Footer } from "./components/sections/Footer";
import { InviteCard } from "./components/sections/InviteCard";
import { ScratchReveal } from "./components/sections/ScratchReveal";
import { ThankYou } from "./components/sections/ThankYou";

export default function App() {
  return (
    <>
      <Hero />
      <main className="page">
        <InviteCard />
        <ScratchReveal />
        <Countdown />
        <EventCard />
        <Compliments />
        {/* <RsvpSection /> */}
      </main>
      <div className="closing">
        <ThankYou />
        <Footer />
      </div>
    </>
  );
}
