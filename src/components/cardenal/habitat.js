import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Habitat = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);

  return (
    <>
      <div className="flex absolute top-4 left-4 z-50">
        <img
          src={"/tito/menu/menu.png"}
          className="w-auto h-[80px] mt-[10px] relative "
          onClick={() => {
            console.log("clicked menu from layout.js");
          }}
        />
      </div>
      <div className="relative  ">
        <img
          src={"/tito/hab/arbol.png"}
          className="absolute w-auto h-[100vh]"
          onClick={() => {
            console.log("clicked menu from layout.js");
          }}
        />
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-center justify-center relative right-[-60px] ">
            <Image
              src={"/tito/hab/volando.gif"}
              className={`relative w-[290px] h-[150px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all "
                  : "opacity-100 hover:cursor-pointer"
              }`}
              height={50}
              width={50}
              onClick={() => setShowComoSoy(true)}
            />
          </div>

          <div className="flex top-[-55px] flex-1 relative items-center justify-center ">
            <img
              src="/tito/hab/ubi1.png"
              className={`w-[35vw] min-w-[35vw] h-[50vh] min-h-[50vh] z-10  left-[160px] relative  transition-all duration-500 ease-in-out ${
                showComoSoy
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            />
          </div>
        </div>
        {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
         */}{" "}
        <div className="overflow-x-visible flex flex-col justify-between  items-center  h-[100vh] pt-12 w-[50vw] min-w-[50vw] max-w-[50vw]">
          <div className="flex">
            <img
              src={"/tito/hab/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={"/tito/hab/mapa1.png"}
              className="w-[32vw] h-[250px] min-h-[50vh] relative "
            />
          </div>
          <div className="flex mb-16 gap-8">
            <img
              src={"/descript/Retroceder.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>

            <img
              src={"/descript/Avanzar.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[100vh]">
          <div className="flex flex-col items-center justify-between max-h-[100vh]">
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[50vh]">
              <img
                src={"/tito/hab/btn_pob.png"}
                className={`relative w-[8vw] min-w-[8vw] h-[120px] right-[80px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showAlimentacion
                    ? "opacity-0 w-0 max-w-0 min-w-0 h-0 max-h-0 min-h-0"
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/tito/hab/graf_barras.gif"}
                  className={` relative right-[140px] z-[5] transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-y-0 h-[40vh] w-[25-vw] min-w-[25vw] min-h-[40vh] "
                      : "opacity-0 -translate-y-full h-0 w-0"
                  } `}
                  height={80}
                  width={180}
                />
                {/*      <Image
                src={"/descript/semillas.gif"}
                className={`h-[120px] w-[120px] relative right-[-100px] transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                } `}
                height={80}
                width={80}
              /> */}
              </div>
            </div>

            <div className="flex  relative right-[300px] ">
              <div className="flex top-[-55px] flex-1 relative items-center justify-center ">
                <img
                  src="/tito/hab/ubi2.png"
                  className={`w-[35vw] min-w-[35vw] h-[50vh] min-h-[50vh] z-10   relative  transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Habitat;
