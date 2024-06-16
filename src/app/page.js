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
    <div className="flex justify-between h-screen ">
      <div className="flex flex-col justify-between gap-10">
        <Link href={"/mapache"}>
          <div className="flex items-center group">
            <img src="/btnMapache.png" className="w-[30vw] max-w-[300px]" />
          </div>
        </Link>
        <Link href={"/tortuga"}>
          <div className="flex items-center group">
            <img src="/btnTortuga.png" className="w-[30vw] max-w-[300px]" />
          </div>
        </Link>
      </div>
      <div className="overflow-hidden flex items-center justify-center relative"></div>
      <div className="flex flex-col justify-between items-end gap-10">
        <Link href={"/cardenalito"}>
          <div className="flex flex-row items-center group">
            <img src="/btnCardenalito.png" className="w-[30vw] max-w-[300px]" />
          </div>
        </Link>
        <Link href={"/manati"}>
          <div className="flex flex-row items-center group">
            <img src="/btnManati.png" className="w-[30vw] max-w-[300px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
