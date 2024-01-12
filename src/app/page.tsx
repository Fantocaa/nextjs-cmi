"use client";

import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Whychooseus from "@/components/home/whychooseus";
import Videocompor from "@/components/home/videocompor";
import Cta from "@/components/home/cta";
import Galery from "@/components/home/galery";

export default function Home() {
  return (
    <section className="style-home">
      <div className="container w-full">
        <div className="snap-y snap-mandatory">
          <Hero />
          <Services />
          <Whychooseus />
          <Videocompor />
          <Galery />
          <Cta />
        </div>
      </div>
    </section>
  );
}
