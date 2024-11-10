import Header from "@/widgets/header/Header";
import { ArrowDownRight, MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="hero-bg-section h-screen rounded-[20px]">
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
      <section className="mt-[150px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[100px]">Our works</h2>
          <p className="text-2xl max-w-[400px]">
            People who made themselves and their business better by trusting us
          </p>
        </div>
        <div className="grid grid-cols-[2fr_7fr_3fr] border-b-2 border-b-secondary text-2xl pb-[30px] mt-[50px] mb-[30px]">
          <span>Index</span>
          <span>Project</span>
          <span>Category</span>
        </div>
        <div className="grid grid-cols-[2fr_7fr_3fr] pb-[30px] text-[50px] cursor-pointer">
          <span className=" italic">01</span>
          <span>PRORV.studio</span>
          <div className="flex justify-between items-end">
            WEB
            <ArrowDownRight className="mb-3"/>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_7fr_3fr] pb-[30px] text-[50px] cursor-pointer">
          <span className=" italic">01</span>
          <span>PRORV.studio</span>
          <div className="flex justify-between items-end">
            WEB
            <ArrowDownRight className="mb-3"/>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_7fr_3fr] pb-[30px] text-[50px] cursor-pointer">
          <span className=" italic">01</span>
          <span>PRORV.studio</span>
          <div className="flex justify-between items-end">
            WEB
            <ArrowDownRight className="mb-3"/>
          </div>
        </div>
        <div className="grid grid-cols-[2fr_7fr_3fr] pb-[30px] text-[50px] cursor-pointer">
          <span className=" italic">01</span>
          <span>PRORV.studio</span>
          <div className="flex justify-between items-end">
            WEB
            <ArrowDownRight className="mb-3"/>
          </div>
        </div>
      </section>
    </>
  );
}
