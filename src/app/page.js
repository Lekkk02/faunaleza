"use client";
import { AnimatePresence, motion } from "framer-motion";
import Principal from "@/components/cardenal/principal";
import Descripcion from "@/components/cardenal/descripcion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex justify-between h-screen">
      <div className="flex flex-col justify-between gap-36 ">
        <Link href={"/mapache"}>
          <div className="flex items-center group">
            <img src="/btnMapache.png" className="w-[300px] " />
          </div>
        </Link>
        <Link href={"/tortuga"}>
          <div className="flex items-center group">
            <img src="/btnTortuga.png" className="w-[300px] " />
          </div>
        </Link>
      </div>
      <div className="overflow-hidden flex   min-w-1/3 w-1/3 relative items-center justify-end right-[-60px] top-[-30px]   ">
        <img src="/creditos.png" className="w-[40px] h-[50px] " />
      </div>

      <div className="flex flex-col justify-between items-end gap-36 overflow-hidden">
        <Link href={"/cardenalito"}>
          <div className="flex flex-row items-center group">
            <img src="/btnCardenalito.png" className="w-[300px] " />
          </div>
        </Link>

        <div className="flex flex-row items-center group">
          <img src="/btnManati.png" className="w-[300px] " />
        </div>
      </div>
    </div>
  );
};

export default Page;
