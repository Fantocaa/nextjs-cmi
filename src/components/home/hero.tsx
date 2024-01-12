import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="w-full flex">
      <div className="snap-start h-screen w-full flex justify-center items-center">
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto items-center text-center">
          <div
            //   variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#BF212F] opacity-[0.9] flex justify-center items-center text-center"
          >
            <SparklesIcon className="text-[#F9A73E] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-xs pr-2">
              PT. Cahaya Mercusuar Indonesia
            </h1>
          </div>

          <div
            //   variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-8xl font-bold text-white w-auto h-auto max-w-[900px] leading-[1.05]"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangecmi to-redcmi">
                {" "}
                the best{" "}
              </span>
              Project Experience
            </span>
          </div>

          <p
            //   variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[960px]"
          >
            Terangi Setiap Momen dengan Solusi LED Display Terbaik untuk Semua
            Jenis Event Anda. Pengalaman Visual yang Luar Biasa dan Mengesankan,
            Dijamin Membawa Sukses dan Kemeriahan ke Setiap Sudut Ruangan.
          </p>
          <a
            //   variants={slideInFromLeft(1)}
            className="py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </a>
        </div>

        {/* <div
        // variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
      src="/mainIconsdark.svg"
      alt="work icons"
      height={650}
      width={650}
    />
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
