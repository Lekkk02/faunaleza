import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Amenaza = () => {
  const [showAmenaz, setShowAmenaz] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);
  const [showAmenaza, setShowAmenaza] = useState(false);

  return (
    <div className="flex justify-center items-start overflow-hidden">
      <div className="flex flex-row items-start  justify-center  min-w-1/3 max-w-1/3 w-1/3 min-h-screen">
        <div className="flex flex-col items-center     ">
          <img
            src={"mapache/amenaza/botonAmenaza.png"}
            className={`relative w-[150px] h-[150px] mt-[60px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showAmenaz
                ? "translate-y-[-50px] transition-all"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowAmenaz(true)}
          />
          <div className="flex flex-row-reverse">
            <img
              src={"/mapache/amenaza/lineaTiemp.png"}
              className={`h-[200px] w-[140px]  transition-all duration-500  z-[5] ${
                showAmenaz
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
            />
          </div>
        </div>
      </div>
      {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
       */}{" "}
      <div className=" flex flex-col justify-between  items-center  h-[100vh] relative  pt-12 w-1/3 min-w-1/3 max-w-1/3 ">
        <div className="flex">
          <img
            src={"mapache/amenaza/titulo.png"}
            className="w-[340px] h-[100px]   "
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center relative top-[20px] ">
            <img
              src={"/mapache/amenaza/btnAmenaza.png"}
              className={`w-[120px] h-[100px]  hover:scale-[1.2] transition-all duration-500 z-10 relative top-[60px] ${
                showHuevito
                  ? "opacity-0 hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHuevito(true)}
            />
            <div className="flex flex-row">
              <Image
                className={`h-[290px] w-[240px] relative transition-all duration-500 ease-in-out ${
                  showHuevito
                    ? "opacity-100 translate-y-[-50px]"
                    : "opacity-0 -translate-y-full"
                }`}
                src={"/mapache/amenaza/Dani.gif"}
                height={320}
                width={320}
              />
              <Image
                className={`h-[290px] w-[260px] relative transition-all duration-500 ease-in-out ${
                  showHuevito
                    ? "opacity-100 translate-y-[-50px]"
                    : "opacity-0 -translate-y-full"
                }`}
                src={"/mapache/amenaza/Prohibido.gif"}
                height={320}
                width={320}
              />
            </div>
          </div>
        </div>
        <div className="flex mb-16 gap-8">
          <Link href={"?q=habitat"}>
            <img
              src={"/descript/Retroceder.png"}
              className="w-auto h-[60px] mt-[10px] relative hover:scale-105"
            />
          </Link>

          <Link href={"?q="}>
            <img
              src={"/descript/Inicio.png"}
              className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
            />
          </Link>

          <Link href={"?q=habitat"}>
            <img
              src={"/descript/Avanzar.png"}
              className="w-auto h-[60px] mt-[10px] relative hover:scale-105"
            />
          </Link>
        </div>
      </div>
      {/*                        SECCION DERECHA - ALIMENTACIO
       */}{" "}
      <div className="flex justify-center overflow-visible  min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col items-center justify-center max-h-[777px]">
          <div className="flex flex-col items-center space-y-0 relative mt-[80px] ">
            <img
              src={"mapache/amenaza/btnAmenaza.png"}
              className={`relative w-[100px] h-[90px] mt-[20px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showAlimentacion
                  ? "opacity-100"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowAlimentacion(true)}
            />
            <div className="flex flex-col justify-start">
              <img
                className={`h-[80px] w-[220px] relative  transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                src={"/mapache/amenaza/subtitulo.png"}
                height={220}
                width={220}
              />
              <img
                className={`h-[150px] w-[280px] relative right-[30px]  transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                src={"/mapache/amenaza/causas.png"}
                height={220}
                width={220}
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Amenaza;
