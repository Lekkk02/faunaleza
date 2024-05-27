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
        <div className="flex gap-4 relative  min-h-[450px] items-end rotate-45 left-[-180px] top-[-100px]">
          <Image
            className={`w-[450px] h-[450px] transition-all duration-500 ease-in-out 
            `}
            src={"/mapache/mapachePrincipal.gif"}
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
            src={"mapache/habitat/TITULO_2.png"}
            className="w-[280px] h-[100px]   "
          />
        </div>
        <div className="flex flex-col justify-start items-center">
          <img
            src={"mapache/habitat/mapa.png"}
            className="w-[500px] min-w-[600px] h-[500px] relative top-[-20px] right-[40px] "
          />
        </div>
        <div className="flex mb-16 gap-8">
          <Link href={"?q=descript"}>
            <img
              src={"/descript/Retroceder.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
          </Link>
          <Link href={"?q="}>
            <img
              src={"/descript/Inicio.png"}
              className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
            />
          </Link>
          <Link href={"?q=amenaza"}>
            <img
              src={"/descript/Avanzar.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
          </Link>
        </div>
      </div>
      {/*                        SECCION DERECHA - ALIMENTACIO
       */}{" "}
      <div className="flex justify-center overflow-visible  min-w-1/3 max-w-1/3 w-1/3">
        <div className="flex flex-col  justify-around max-h-[777px] h-screen">
          <img
            src={"mapache/habitat/graf.png"}
            className={`relative top-[-30px]  w-[350px] h-[290px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] `}
          />
          <Image
            className={`w-[300px] h-[300px] transition-all duration-500 ease-in-out 
            `}
            src={"/mapache/mapachePrincipal.gif"}
            height={500}
            width={500}
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Habitat;
