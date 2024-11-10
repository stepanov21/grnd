'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    name: "PRORV.studio",
    category: "WEB",
  },
  {
    id: 2,
    name: "SHINOBI",
    category: "Crypto",
  },
  {
    id: 3,
    name: "Chuttyevo",
    category: "eCommerce",
  },
  {
    id: 4,
    name: "Limarenko",
    category: "IOS",
  },
  {
    id: 5,
    name: "PRORV.studio",
    category: "WEB",
  }
];

gsap.registerPlugin(useGSAP);

const Projects = () => {
  const container = useRef();
  const previewRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let FollowBox = ".preview";
      let projects = document.querySelectorAll(".project");
      gsap.set(FollowBox, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
      });

      projects.forEach((project) => {
        project.addEventListener("mousemove", (e: any) => {
          let previewRect = previewRef.current?.getBoundingClientRect();
          const offsetX = previewRect?.width! / 2;
          const offsetY = previewRect?.height! / 2;
          const id = project.getAttribute("data-id");
          console.log("🚀 ~ project.addEventListener ~ id:", id);
          previewRef.current!.style.backgroundImage = `url(../${id}.png)`;

          gsap.to(FollowBox, {
            opacity: 1,
            overwrite: "auto",
            left: e.pageX - offsetX + "px",
            top: e.pageY - offsetY + "px",
            stagger: 0.15,
            ease: "none",
          });

          let TL = gsap.timeline({
            defaults: { duration: 0.5, ease: "none" },
          });
          TL.to(FollowBox, {
            scale: 1,
            overwrite: "auto",
            stagger: { amount: 0.15, from: "start", ease: "none" },
          });
          TL.to(
            FollowBox,
            {
              overwrite: "auto",
              scale: 1,
              stagger: { amount: 0.15, from: "end", ease: "none" },
            },
            "<+=2.5"
          );
        });
      });

      let projectContainer = document.querySelector(".project-container");

      projectContainer!.addEventListener("mouseleave", () => {
        gsap.to(FollowBox, {
          duration: 1,
          opacity: 0,
          scale: 0,
          ease: "none",
        });
      });
    },
    { scope: container }
  );
  return (
    //@ts-ignore
    <section ref={container} className="mt-[150px] px-[50px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[100px]">Our works</h2>
        <p className="text-2xl max-w-[400px]">
          People who made themselves and their business better by trusting us
        </p>
      </div>
      <div className="grid grid-cols-[2fr_7fr_3fr] border-b-2 border-b-secondary text-2xl pb-[30px] mt-[50px] mb-[30px] image">
        <span>Index</span>
        <span>Project</span>
        <span>Category</span>
      </div>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div
              data-id={project.id}
              key={project.id}
              className="grid grid-cols-[2fr_7fr_3fr] pb-[30px] text-[50px] cursor-pointer project"
            >
              <span className=" italic">{project.id}</span>
              <span>{project.name}</span>
              <div className="flex justify-between items-end">
                {project.category}
                <ArrowDownRight className="mb-3" />
              </div>
            </div>
          );
        })}
      </div>
      <div
        ref={previewRef}
        className="preview size-20 absolute"
      ></div>
      <button className="text-2xl underline mx-auto text-center w-full pt-5">More of our works</button>
    </section>
  );
};

export default Projects;
