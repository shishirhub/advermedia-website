import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { OriginStory } from "@/components/OriginStory";
import { BrandReveal } from "@/components/BrandReveal";
import { Community } from "@/components/Community";
import { Offerings } from "@/components/Offerings";
import { Package } from "@/components/Package";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OriginStory />
        <BrandReveal />
        <Community />
        <Offerings />
        <Package />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
