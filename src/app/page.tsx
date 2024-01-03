"use client";

import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Whychooseus from "@/components/home/whychooseus";
import Videocompor from "@/components/home/videocompor";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <section className="style-home">
      <div className="container w-full">
        <Hero />
        <Services />
        <Whychooseus />
        <Videocompor />
        <Cta />
      </div>
    </section>
  );
}
