import { HomeSections } from "@/components/home/HomeSections";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <HomeSections />
    </div>
  );
}
