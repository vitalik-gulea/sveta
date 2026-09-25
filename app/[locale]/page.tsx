import { HomeSections } from "@/components/home/HomeSections";
import { Footer } from "@/components/layout/Footer";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <HomeSections />
      <Footer />
    </div>
  );
}
