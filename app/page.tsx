"use client";

import Projects from "@/pages/home/components/projects/Projects";
import Services from "@/pages/home/components/projects/Services";
import WhoIs from "@/pages/home/components/projects/WhoIs";
import Header from "@/widgets/header/Header";
import { MousePointer2 } from "lucide-react";



export default function Home() {
  return (
    <div>
      <section className="hero-bg-section h-screen rounded-[20px] mx-[50px]">
        <Header />
        <h1 className="text-center uppercase font-bold text-[70px] mt-[200px]">
          mobile design & <br /> development agency
        </h1>
        <p className="max-w-[742px] text-center mx-auto text-2xl mt-[50px]">
          We offer customized mobile development and mobile design services
          tailored to meet the unique needs of businesses and startups
          worldwide.
        </p>
        <button className="py-4 px-8 bg-secondary rounded-full uppercase text-2xl flex items-center gap-2.5 mx-auto mt-[50px]">
          Start work
          <MousePointer2 className="scale-x-[-1]" />
        </button>
      </section>
      <Projects/>
      <Services/>
      <WhoIs/>
    </div>
  );
}
