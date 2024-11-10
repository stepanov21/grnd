import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

const Header = () => {
  return (
    <header className="flex px-[50px] py-[30px] justify-between items-center">
      <div>
        <Image src={"./logo.svg"} height={50} width={185} alt="logo" />
      </div>
      <nav className="header-bg-blur pl-5 rounded-full flex gap-[50px] text-[20px] items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Services</Link>
        <Link href={"/"}>Cases</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Pricing</Link>
        <button className="py-3 px-5 bg-secondary rounded-full uppercase text-2xl flex items-center gap-2.5">hire us<ArrowDownRight /></button>
      </nav>
    </header>
  );
};

export default Header;
