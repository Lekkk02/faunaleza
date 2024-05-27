import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Descripcion = () => {
  const [showMapache, setShowMapache] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);
  const [showAmenaza, setShowAmenaza] = useState(false);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center max-h-[777px] min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col items-center relative   ">
          <img
            src={"/descript/como_soy.png"}
            className={`relative w-[310px] h-[65px] mt-[60px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showComoSoy
                ? "translate-y-[-50px] transition-all"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowComoSoy(true)}
          />
          <div className="flex flex-row-reverse">
            <img
              src={"/mapache/descripcion/clic_como_soy.png"}
              className={`h-[250px] w-[350px] mt-[-70px] transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
            />
            <img
              className={`h-[130px] w-[130px] absolute top-[200px] right-[-50px] transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
              src={"/mapache/descripcion/FIGURA.png"}
              height={50}
              width={50}
            />
          </div>
        </div>

        <div className="flex gap-4 relative  min-h-[450px] items-end">
          <Image
            className={`w-[300px] h-[300px] transition-all duration-500 ease-in-out ${
              showMapache
                ? "opacity-0 hidden"
                : "cursor-pointer hover:scale-105"
            }`}
            src={"/mapache/mapachePrincipal.gif"}
            height={500}
            width={500}
            onClick={() => {
              setShowMapache(true);
            }}
          />
          <div
            className={`${
              showMapache
                ? " relative  flex flex-row gap-y-8 transition-all duration-500 transform translate-y-0 opacity-100"
                : "transition-all duration-500 transform -translate-y-10 opacity-0 w-0"
            }`}
          >
            <Image
              className="h-[210px] w-[200px] relative "
              src={"/mapache/mapachePrincipal.gif"}
              height={320}
              width={320}
            />
            <img
              src={"/mapache/descripcion/BURBUJA2.png"}
              className={`relative  top-[-70px] min-w-[260px] w-[260px] h-[210px] transition-all  duration-500 left-[-50px]
      `}
            />
          </div>
        </div>
      </div>
      {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
       */}{" "}
      <div className="overflow-hidden flex flex-col justify-center  items-center  h-[100vh] relative  pt-12 w-1/3 min-w-1/3 max-w-1/3 ">
        <div className="flex">
          <img
            src={"mapache/descripcion/TITULO.png"}
            className="w-[340px] h-[100px]   "
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative top-[-45px]"
            src={"/mapache/descripcion/quienSoy.gif"}
            height={200}
            width={200}
          />
          <img
            src={"/descript/quiensoy.png"}
            className="w-[260px] h-[50px] relative top-[-50px] "
          />
          <img
            src={"/descript/Prevvideo.png"}
            className="w-full h-[250px] relative top-[-55px] "
          />
        </div>
        <div className="flex mb-16 gap-8">
          <Link href={"?q="}>
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
          <div className="flex flex-col items-end space-y-0 relative mt-[-60px] ">
            <img
              src={"/descript/alimentacion.png"}
              className={`relative top-[80px] w-[310px] h-[65px] mt-[20px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showAlimentacion
                  ? "opacity-100"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowAlimentacion(true)}
            />
            <div className="flex flex-col">
              <Image
                className={`h-[260px] w-[260px] relative top-[60px]  transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                src={"/mapache/descripcion/graftorta.gif"}
                height={220}
                width={220}
              />
              <img
                src={"/mapache/descripcion/ALIMENTO.png"}
                className={`h-[120px] w-[120px] relative mt-[-40px] transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                height={80}
                width={80}
              />
            </div>
          </div>

          <div className="flex self-end relative top-[20px] ">
            <img
              src={"/mapache/descripcion/BOTON.png"}
              className={`w-[360px] h-[300px]  hover:scale-[1.2] transition-all duration-500 ${
                showHuevito
                  ? "opacity-0 hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHuevito(true)}
            />
            <div
              className={`${
                showHuevito
                  ? "relative top-[-10px] right-[-50px] flex flex-row gap-y-8 transition-all duration-500 transform translate-y-0 opacity-100"
                  : "transition-all duration-500 transform -translate-y-10 opacity-0 w-0 hidden"
              }`}
            >
              <div className="flex flex-col">
                <img
                  src={"mapache/descripcion/BOTON3.png"}
                  className={`z-10 cursor-pointer min-w-[100px] w-[100px] h-[100px] transition-all  duration-500 hover:scale-[1.2]
      `}
                  onClick={() => {
                    setShowAmenaza(true);
                  }}
                />
                <p className="font-[Poppins] bold text-white text-sm ">
                  Margen de extinción
                </p>

                <img
                  src={"mapache/descripcion/LineaTiempo.png"}
                  className={`min-w-[100px] w-[100px] h-[160px] transition-all  duration-500 ${
                    showAmenaza ? "opacity-100" : "opacity-0"
                  } `}
                />
              </div>

              <Image
                className="h-[240px] w-[220px] relative "
                src={"/mapache/mapachePrincipal.gif"}
                height={320}
                width={320}
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Descripcion;
