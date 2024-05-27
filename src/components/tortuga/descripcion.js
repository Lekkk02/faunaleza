import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Descripcion = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center max-h-[777px] min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col items-center relative ">
          <img
            src={"tortuga/descripcion/como_soy.png"}
            className={`relative w-[360px] h-[100px] mt-[20px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showComoSoy
                ? "translate-y-[-50px] transition-all"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowComoSoy(true)}
          />
          <div className="">
            <img
              src={"/tortuga/descripcion/Clic_como_soy.png"}
              className={`h-[240px] w-[340px]  mt-[-60px] left-[10px] relative transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
            />
          </div>
        </div>

        <div className="flex gap-4 relative top-[-80px] items-center right-[-30px]">
          <Image
            className={` rotate-12 ${showHeart ? "hidden opacity-0" : ""}`}
            src={"/tortuga/descripcion/tortuga_perfil.gif"}
            height={210}
            width={210}
          />

          <img
            src="/tortuga/descripcion/btnCorazon.png"
            className={`w-auto h-[100px] mt-[20px] relative  transition-all duration-500 ease-in-out hover:scale-[1.2] z-20  ${
              showHeart
                ? "opacity-0 translate-x-full hidden"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowHeart(true)}
          />
          <div className="flex flex-col">
            <img
              src="/tortuga/descripcion/burbuja.png"
              className={`w-auto h-[180px] mt-[20px] relative top-[70px]  transition-all duration-500 ease-in-out ${
                showHeart
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            />
            <Image
              className={`${
                showHeart
                  ? "w-[150px] h-[200px] opacity-100 transition-all duration-500 ease-in-out hover:scale-[1.2] translate-y-10"
                  : "opacity-0 -translate-x-full w-0"
              }`}
              src={"/tortuga/descripcion/tortuga_burbuja.gif"}
              height={210}
              width={210}
            />
          </div>
        </div>
      </div>
      {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
       */}{" "}
      <div className="overflow-hidden flex flex-col justify-center  items-center  h-[100vh] relative  pt-12 w-1/3 min-w-1/3 max-w-1/3 ">
        <div className="flex">
          <img
            src={"/tortuga/descripcion/titulo.png"}
            className="w-auto h-[100px] mt-[10px] relative "
          />
        </div>
        <div className="flex flex-col justify-center items-center mb-[-50px]">
          <Image
            className="relative"
            src={"/tortuga/descripcion/tortuga_frente.gif"}
            height={300}
            width={300}
          />
          <img
            src={"/tortuga/descripcion/quien_soy.png"}
            className="w-[340px] h-[100px] relative top-[-50px] mb-[-15px] "
          />
          <img
            src={"/tortuga/descripcion/Prev_video.png"}
            className="w-full h-[290px] relative top-[-55px] mt-[-25px] "
          />
        </div>
        <div className="flex  gap-4 justify-center items-center mb-[-10px] mt-[-30px]">
          <img
            src={"/tortuga/descripcion/Retroceder.png"}
            className="w-auto h-[90px] relative top-[10px] "
          />
          <Link href={"?q="}>
            <img
              src={"/tortuga/descripcion/btnHome.png"}
              className="w-auto h-[100px] mb-[-30px]  relative  hover:scale-[1.2] transition-all duration-500"
            />
          </Link>

          <img
            src={"/tortuga/descripcion/Avanzar.png"}
            className="w-auto h-[90px]  relative top-[10px]"
          />
        </div>

        <img
          src={"/tortuga/descripcion/advert.png"}
          className="w-auto h-[60px]  relative "
        />
      </div>
      {/*                        SECCION DERECHA - ALIMENTACIO
       */}{" "}
      <div className="flex justify-center overflow-visible max-h-[777px] h-[777px] min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col items-start justify-around ">
          <div className="flex flex-col items-center mt-[-30px]">
            <img
              src={"/tortuga/descripcion/mi_alimentacion.png"}
              className={`relative  w-[300px] h-[100px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showAlimentacion
                  ? "opacity-100"
                  : "opacity-100 hover:cursor-pointer"
              }`}
            />
            <img
              src={"/tortuga/descripcion/comida.png"}
              className={` w-[300px] h-[230px] transition-all ease-in-out  duration-500 ${
                showHuevito
                  ? "opacity-100 translate-y-0"
                  : "opacity-0  translate-y-10"
              }
      `}
            />
          </div>

          <div className="flex  self-end relative ">
            <img
              src={"/tortuga/descripcion/btnCalamar.png"}
              className={`w-auto h-[100px]  hover:scale-[1.2] transition-all duration-500 ${
                showHuevito
                  ? "opacity-0 hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHuevito(true)}
            />
            <Image
              className={`w-[200px] h-[280px] relative top-[-100px] transition-all duration-500 ease-in-out ${
                showHuevito ? "hidden w-0" : ""
              }`}
              src={"/tortuga/descripcion/tortuga_burbuja.gif"}
              height={310}
              width={310}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Descripcion;
