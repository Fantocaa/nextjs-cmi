import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-DarkTako text-white font-inter w-full z-50 py-8 mt-auto snap-end">
      <div className="container mx-auto">
        <div className="block md:flex justify-between pb-12 gap-8">
          <div className="w-1/2">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="/images/logo/cmi putih.webp"
                  alt="Tako Logo"
                  width={128}
                  height={64}
                />
              </Link>

              <h1 className="font-bold">PT. CAHAYA MERCUSUAR INDONESIA</h1>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur. Convallis duis nulla eget
              nulla sed bibendum leo. Ultrices consectetur sed massa eu tellus
              adipiscing morbi eros risus.
            </h2>
          </div>
          <div>
            <ul>
              Services
              <li></li>
            </ul>
          </div>
          <div className="flex gap-4 pt-6 items-center">
            <Link
              href="https://www.instagram.com/tako.koporasi/"
              target="__blank"
              aria-label="Instagram"
            >
              <Image
                src="/images/icon/ig.svg"
                alt="instagram"
                width={32}
                height={32}
              />
            </Link>
            {/* <Link href="">
                            <img src="/images/fb.svg" alt="" />
                        </Link> */}
            {/* <Link href="">
                            <img src="/images/yt.svg" alt="" />
                        </Link> */}
            {/* <Link href="">
                            <img src="/images/x.svg" alt="" />
                        </Link> */}
            <Link
              href="https://www.linkedin.com/company/tako-anugerah-koporasi-pt/"
              target="_blank"
              aria-label="Linkedin"
            >
              <Image
                src="/images/icon/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        <div className="w-full h-1 bg-white rounded-2xl"></div>
        <div>
          <h1 className="text-xs md:text-base text-center pt-12">
            © 2024 PT. TAKO ANUGERAH KOPORASI, All Rights Reserved
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
