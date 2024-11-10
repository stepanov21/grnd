"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

const WhoIs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".card", {
        scrollTrigger: { trigger: ".card", start: "bottom bottom" },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <section ref={container} className="mt-[350px] px-[50px]">
      <div className="flex justify-between items-end border-b-2 border-secondary pb-[30px]">
        <p className="text-2xl max-w-[700px]">
          We have a shared commitment to outstanding products and tackle each
          challenge with a devoted effort to discover the optimal solution.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-[100px] text-accent">GRND?</h2>
        <h2 className="text-[100px]">Who is this?</h2>
      </div>
      <div className="grid grid-cols-3">
        <div className="card bg-background flex flex-col justify-center items-center text-center px-[70px] py-[170px]">
          <Image src={"/abstract/1.png"} alt="1" width={150} height={150} />
          <h3 className="font-bold text-[30px] mt-[50px]">
            Vision for the product
          </h3>
          <p className="mt-[30px]">
            Comprehending the business and product vision empowers us to own and
            enhance the product, drawing on our extensive experience and
            expertise.
          </p>
        </div>
        <div className="card bg-background flex flex-col justify-center items-center text-center px-[70px] py-[170px]">
          <Image src={"/abstract/2.png"} alt="1" width={150} height={150} />
          <h3 className="font-bold text-[30px] mt-[50px]">
            Vision for the product
          </h3>
          <p className="mt-[30px]">
            Comprehending the business and product vision empowers us to own and
            enhance the product, drawing on our extensive experience and
            expertise.
          </p>
        </div>
        <div className="card bg-background flex flex-col justify-center items-center text-center px-[70px] py-[170px]">
          <Image src={"/abstract/3.png"} alt="1" width={150} height={150} />
          <h3 className="font-bold text-[30px] mt-[50px]">
            Vision for the product
          </h3>
          <p className="mt-[30px]">
            Comprehending the business and product vision empowers us to own and
            enhance the product, drawing on our extensive experience and
            expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIs;
