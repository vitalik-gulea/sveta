import { About } from "@/components/home/About";
import { Books } from "@/components/home/Books";
import { Hero } from "@/components/home/Hero";
import { Plays } from "@/components/home/Plays";
import { Services } from "@/components/home/Services";

export function HomeSections() {
  return (
    <main>
      <section id="home" className="scroll-mt-14 sm:scroll-mt-16">
        <Hero />
      </section>
      <section
        id="about"
        className="scroll-mt-14 border-t border-border/60 bg-card sm:scroll-mt-16"
      >
        <About />
      </section>
      <section id="books" className="scroll-mt-14 sm:scroll-mt-16">
        <Books />
      </section>
      <section
        id="plays"
        className="scroll-mt-14 border-t border-border/60 bg-card sm:scroll-mt-16"
      >
        <Plays />
      </section>
      <section
        id="services"
        className="scroll-mt-14 border-t border-border/60 sm:scroll-mt-16"
      >
        <Services />
      </section>
    </main>
  );
}
