import PageFrame from "@/components/PageFrame";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import ProgramsSection from "@/components/ProgramsSection";
import MastersSection from "@/components/MastersSection";
import GroupEventsSection from "@/components/GroupEventsSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0b0f19] text-white overflow-x-hidden">
      <PageFrame />
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ProgramsSection />
      <MastersSection />
      <GroupEventsSection />
      <CommunitySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
