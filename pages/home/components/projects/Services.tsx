import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="mt-[150px]">
      <div className="flex justify-between items-end border-b-2 border-secondary pb-[30px] px-[50px]">
        <p className="text-2xl max-w-[620px]">
          A wide range of our services, with an emphasis on individual solutions
          and an innovative approach for each project.
        </p>
        <p className="text-lg">[ We can do more than we can write ]</p>
      </div>
      <div className="flex justify-between items-center px-[50px]">
        <h2 className="text-[100px]">Our works</h2>
        <h2 className="text-[100px] text-accent">& capabilities</h2>
      </div>
      <div className="relative">
        <div className="">
          <Image
            src={"/1.png"}
            alt="services"
            className="object-cover"
            width={1920}
            height={1024}
          />
        </div>
        <div className="px-[50px] -mt-[400px]">
          <div className="flex justify-between items-end">
            <div className="carusel-card px-[50px] py-[30px] max-w-[585px]">
              <h3 className="text-[50px] flex">
                <span className="text-2xl">{`/${"03"}]`}</span>
                <span>Idea</span>
              </h3>
              <p className="text-2xl mt-[30px]">
                We help bring your ideas to life by offering creative solutions
                that distinguish your brand and strengthen its competitive
                advantages.
              </p>
            </div>
            <div className="backdrop-blur-md purple-gradient rounded-full w-32 h-32 flex items-center justify-center"><ArrowDownRight/></div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-5 w-full mt-[50px]">
            <div className="bg-accent h-1 w-full rounded-full"></div>
            <div className="bg-secondary h-1 w-full rounded-full"></div>
            <div className="bg-secondary h-1 w-full rounded-full"></div>
            <div className="bg-secondary h-1 w-full rounded-full"></div>
            <div className="bg-secondary h-1 w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
