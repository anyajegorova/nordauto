import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import History from "./components/History";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <TeamSection />
      <History />
    </div>
  );
}
