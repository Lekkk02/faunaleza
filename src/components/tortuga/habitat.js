import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Habitat = () => {
  const [showMapache, setShowMapache] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);
  const [showAmenaza, setShowAmenaza] = useState(false);

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-start justify-center max-h-[777px] min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex gap-4 relative  min-h-[450px] ml-[90px] ">
          <Image
            className={`w-[230px] h-[400px] rotate-45 transition-all duration-500 ease-in-out 
            `}
            src={"/tortuga/descripcion/tortuga_perfil.gif"}
            height={500}
            width={500}
          />
        </div>
      </div>
      {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
       */}{" "}
      <div className="overflow-x-visible  flex flex-col justify-center  items-center  h-[100vh] relative  pt-12 w-1/3 min-w-1/3 max-w-1/3 ">
        <div className="flex">
          <img
            src={"/tortuga/habitat/TITULO.png"}
            className="w-[250px] h-[120px]   "
          />
        </div>
        <div className="flex flex-col justify-start items-center">
          <img
            src={"tortuga/habitat/mapa.png"}
            className="w-[500px] min-w-[600px] h-[500px] relative top-[-20px] right-[40px] "
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
      <div className="flex justify-center overflow-visible  min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col  justify-around max-h-[777px] h-screen">
          <img
            src={"tortuga/habitat/graf.png"}
            className={`relative top-[-30px]  w-[200px] h-[180px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showHuevito ? "opacity-100" : "opacity-0 hidden"
            } `}
          />
          <div className="flex ">
            <Image
              className={`w-[230px] h-[300px] transition-all duration-500 ease-in-out 
            `}
              src={"/tortuga/descripcion/tortuga_burbuja.gif"}
              height={500}
              width={500}
            />
            <img
              src="/tortuga/btnJuego.png"
              className={`w-[90px] h-[100px] ${
                showHuevito
                  ? "hidden"
                  : "hover:cursor-pointer hover:scale-[1.2] transition-all ease-in-out duration-500"
              } `}
              onClick={() => {
                setShowHuevito(true);
              }}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Habitat;
