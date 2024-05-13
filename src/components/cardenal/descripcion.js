import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Descripcion = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);

  return (
    <div className="flex justify-between overflow-hidden">
      <div className="flex flex-col items-center justify-center max-h-[777px]">
        <div className="flex flex-col items-center relative right-[-60px]">
          <img
            src={"/descript/como_soy.png"}
            className={`relative w-[260px] h-[50px] mt-[20px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showComoSoy
                ? "translate-y-[-50px] transition-all"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowComoSoy(true)}
          />
          <div className="flex">
            <img
              src={"/descript/Clic_como_soy.png"}
              className={`h-[160px] w-[260px] mt-[-20px] transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
            />
            <Image
              className={`h-[130px] w-[130px] absolute top-[170px] right-[-40px] transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 translate-y-[-50px]"
                  : "opacity-0 -translate-y-full"
              } `}
              src={"/descript/Plumas.gif"}
              height={50}
              width={50}
            />
          </div>
        </div>

        <div className="flex gap-4 relative top-[160px]">
          <Image
            className=""
            src={"/descript/Cardenalita.gif"}
            height={310}
            width={310}
          />

          <img
            src="/descript/Descripcion_izquierda.png"
            className={`w-auto h-[80px] mt-[20px] relative right-[55px] transition-all duration-500 ease-in-out hover:scale-[1.2]  ${
              showHeart
                ? "opacity-0 translate-x-full"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowHeart(true)}
          />

          <img
            src="/descript/Clic_corazon.png"
            className={`w-auto h-[160px] mt-[20px] relative top-[50px] right-[160px] transition-all duration-500 ease-in-out ${
              showHeart
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          />
        </div>
      </div>
      {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
       */}{" "}
      <div className="overflow-hidden flex flex-col justify-between  items-center  h-[100vh] pt-12 w-[70%]">
        <div className="flex">
          <img
            src={"/descript/titulo.png"}
            className="w-auto h-[80px] mt-[10px] relative right-[50px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative right-[50px]"
            src={"/descript/Cardenalito-sombrero.gif"}
            height={300}
            width={300}
          />
          <img
            src={"/descript/quiensoy.png"}
            className="w-[260px] h-[50px] relative top-[-50px] right-[50px]"
          />
          <img
            src={"/descript/Prevvideo.png"}
            className="w-[480px] h-[250px] relative top-[-55px] right-[50px]"
          />
        </div>
        <div className="flex mb-16 gap-8">
          <img
            src={"/descript/Retroceder.png"}
            className="w-auto h-[60px] mt-[10px] relative right-[50px]"
          />
          <Link href={"?q="}>
            <img
              src={"/descript/Inicio.png"}
              className="w-auto h-[60px] mt-[10px] relative right-[50px] hover:scale-[1.2] transition-all duration-500"
            />
          </Link>

          <img
            src={"/descript/Avanzar.png"}
            className="w-auto h-[60px] mt-[10px] relative right-[50px]"
          />
        </div>
      </div>
      {/*                        SECCION DERECHA - ALIMENTACIO
       */}{" "}
      <div className="flex justify-between overflow-visible">
        <div className="flex flex-col items-center justify-between max-h-[777px]">
          <div className="flex flex-col items-end space-y-4 ">
            <img
              src={"/descript/alimentacion.png"}
              className={`relative top-[80px] w-[260px] h-[50px] mt-[20px] right-[80px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showAlimentacion
                  ? "opacity-100"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowAlimentacion(true)}
            />
            <div className="flex flex-col">
              <Image
                src={"/descript/torta.gif"}
                className={`h-[220px] w-[240px]  relative top-[70px] right-[80px] z-[5] transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                height={80}
                width={180}
              />
              <Image
                src={"/descript/semillas.gif"}
                className={`h-[120px] w-[120px] relative right-[-100px] transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                height={80}
                width={80}
              />
            </div>
          </div>

          <div className="flex self-end relative right-[50px]">
            <img
              src={"/descript/huevito.png"}
              className={`w-auto h-[80px]  hover:scale-[1.2] transition-all duration-500 ${
                showHuevito
                  ? "opacity-0 hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHuevito(true)}
            />
            <div
              className={`${
                showHuevito
                  ? "flex flex-col gap-y-8 transition-all duration-500 transform translate-y-0 opacity-100"
                  : "transition-all duration-500 transform -translate-y-10 opacity-0 w-0"
              }`}
            >
              <img
                src={"/descript/Clic_Huevito1.png"}
                className={`min-w-[100px] w-[100px] h-[55px] transition-all  duration-500 
      `}
              />
              <img
                src={"/descript/Clic_Huevito2.png"}
                className={`min-w-[80px] w-[100px] h-[140px] transition-all duration-500 
      `}
              />
            </div>

            <Image
              className="h-[410px] w-[300px]"
              src={"/descript/Descripcionderecha.gif"}
              height={320}
              width={320}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Descripcion;
