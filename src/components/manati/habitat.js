import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Habitat = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col absolute top-4 left-4 z-50">
        <img
          src={"/manati/menu.png"}
          className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log("clicked menu from layout.js");
          }}
        />
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            showMenu ? "max-h-[250px]" : "max-h-0"
          }`}
        >
          <img
            src={"/tortuga/btnTortuga.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/tortuga");
            }}
          />
          <img
            src={"/tortuga/btnCardenal.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
            }}
          />
          <img
            src={"/tortuga/btnMapache.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/mapache");
            }}
          />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-end justify-center relative  ">
            <Image
              src={"/manati/habitat/manati.gif"}
              className={`relative w-[15vw] min-w-[15vw] h-[30vh] min-h-[30vh] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all "
                  : "opacity-100 hover:cursor-pointer"
              }`}
              height={50}
              width={50}
              onClick={() => setShowComoSoy(true)}
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 relative items-center justify-center ">
            <img
              src="/manati/habitat/temperatura.png"
              className={`w-[20vw] min-w-[20vw] h-[20vh] min-h-[20vh] z-10  left-[60px] relative  transition-all duration-500 ease-in-out ${
                showComoSoy
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            />{" "}
            <img
              src="/manati/habitat/vivimos.png"
              className={`w-[20vw] min-w-[20vw] h-[20vh] min-h-[20vh] z-10  left-[60px] relative  transition-all duration-500 ease-in-out ${
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
              src={"/manati/habitat/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-[2_2_0%]">
              <img
                src={"/manati/habitat/mapa1.png"}
                className={`w-[32vw] h-[250px] min-h-[50vh] relative ${
                  showAlimentacion ? "hidden" : "flex"
                } `}
              />
              <img
                src={"/manati/habitat/mapa2.png"}
                className={` relative ${
                  showAlimentacion
                    ? "w-[32vw] h-[250px] min-h-[50vh] opacity-100"
                    : "opacity-0 w-0 h-0"
                } `}
              />
            </div>

            <div className="relative right-[100px] flex flex-1 ">
              <img
                src={"/manati/habitat/btnTemperatura.png"}
                className={`self-start items-start justify-start  hover:scale-[1.2] transition-transform duration-500 z-50 ${
                  showHuevito
                    ? "opacity-0 h-0 w-0"
                    : "w-[4vw] min-w-[4vw] h-[14vh] min-h-[14vh] relative top-[-100px]"
                }
               `}
                onClick={() => setShowHuevito(true)}
              />
              <Image
                src={"/manati/habitat/termometro.gif"}
                className={` ${
                  showHuevito
                    ? "opacity-100 w-[10vw] min-w-[10vw] h-[14vh] min-h-[14vh] relative top-[-100px]"
                    : " opacity-0 w-0 h-0"
                }               `}
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="flex mb-16 gap-8">
            <Link href={"?q=descript"}>
              <img
                src={"/manati/btnRetroceder.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/manati/btnHome.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q=amenaza"}>
              <img
                src={"/manati/btnAvanzar.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-center overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[100vh]">
          <div className="flex flex-col items-center justify-center max-h-[100vh] relative right-[80px]">
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 min-h-[50vh]">
              <img
                src={"/manati/habitat/btnAlimentacion.png"}
                className={`relative w-[8vw] min-w-[8vw] h-[120px] right z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showAlimentacion
                    ? "opacity-0 w-0 max-w-0 min-w-0 h-0 max-h-0 min-h-0"
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/manati/habitat/barras.gif"}
                  className={` relative  z-[5] transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-y-0 h-[40vh] w-[25-vw] min-w-[25vw] min-h-[40vh] "
                      : "opacity-0 -translate-y-full h-0 w-0"
                  } `}
                  height={80}
                  width={180}
                />
              </div>
            </div>

            <div className="flex  flex-1 relative  ">
              <div className="flex  flex-1 relative items-center justify-center ">
                <img
                  src="/manati/habitat/ubic.png"
                  className={` z-10   relative  transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-x-0 w-[20vw] min-w-[20vw] h-[35vh] min-h-[35vh]"
                      : "opacity-0 h-0 w-0"
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
