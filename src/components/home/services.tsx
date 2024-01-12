import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="h-full w-full flex justify-center items-center py-52">
      <div className="w-full h-full rounded-2xl flex justify-center items-center glowing-border">
        {/* <div className="bg-gradient-to-r from-orangecmi to-red-500 w-full h-full rounded-2xl flex justify-center items-center"> */}
        <div className="p-12 text-white font-bold text-6xl flex">
          <div className="w-1/2">
            <h1>Browse our set of Services and offerings</h1>
            <p className="font-normal text-xl pt-8">
              Kami menyediakan sewa LED, peralatan pencahayaan, dan multimedia
              equipment berkualitas tinggi untuk memenuhi kebutuhan acara Anda.
              Percayakan pada kami untuk memberikan solusi yang profesional dan
              memukau.
            </p>
            <Button
              variant="default"
              className="button-services px-8 py-4 cursor-pointer"
            >
              See Services
            </Button>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/icon/led.webp"
              alt="led"
              width={150}
              height={150}
            />
            <Image
              src="/images/icon/lightning.webp"
              alt="lightning"
              width={150}
              height={150}
            />
            <Image
              src="/images/icon/multimedia.webp"
              alt="multimedia"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
