"use client";
import { AnimatePresence, motion } from "framer-motion";
import Principal from "@/components/mapache/principal";
import Descripcion from "@/components/mapache/descripcion";
import Habitat from "@/components/mapache/habitat";
import Amenaza from "@/components/mapache/amenaza";
import Juego from "@/components/mapache/juego";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Content />
    </Suspense>
  );
};

const Content = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("q");

  return (
    <AnimatePresence mode="wait">
      {(() => {
        switch (section) {
          case "descript":
            return (
              <motion.div
                key="descripcion"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Descripcion />
              </motion.div>
            );
          case "habitat":
            return (
              <motion.div
                key="habitat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Habitat />
              </motion.div>
            );
            case "juego":
              return (
                <motion.div
                  key="juego"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Juego />
                </motion.div>
              );
          case "amenaza":
            return (
              <motion.div
                key="amenaza"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Amenaza />
              </motion.div>
            );
          case null:
          default:
            return (
              <motion.div
                key="principal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Principal />
              </motion.div>
            );
        }
      })()}
    </AnimatePresence>
  );
};

export default Page;
