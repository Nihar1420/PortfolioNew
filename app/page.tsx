import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProject";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <TechStack /> */}
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
