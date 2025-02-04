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
          src={`${showMenu ? "/mapache/btnCerrar.png" : "/tito/menu/menu.png"}`}
          className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
            console.log("clicked menu from layout.js");
          }}
        />
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            showMenu ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <img
            src={"/btnMenuHome.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          />
          <img
            src={"/tortuga/btnTortuga.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/tortuga");
            }}
          />
          <img
            src={"/tortuga/btnManati.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/manati");
            }}
          />
          <img
            src={"/tortuga/btnMapache.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/mapache");
            }}
          />
        </div>
      </div>
      <div className="relative top-0 left-0 ">
        <img
          src={"/tito/hab/arbol.png"}
          className="absolute w-auto h-[100vh]"
          onClick={() => {
            console.log("clicked menu from layout.js");
          }}
        />
      </div>
      <div className="absolute h-full w-full">
        <img
          src={"/tito/hab/cactus.png"}
          className="absolute right-1 w-auto h-[100vh]"
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

          <div className="flex  flex-1 relative items-center justify-center ">
            <img
              src="/tito/hab/ubi1.png"
              className={`w-[20vw] min-w-[20vw] h-[35vh] min-h-[35vh] z-10  left-[60px] relative  transition-all duration-500 ease-in-out ${
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
          <div className="flex flex-col justify-center items-center relative top-[40px]">
            <img
              src={"/tito/hab/mapa1.png"}
              className={`w-[32vw] h-[250px] min-h-[50vh] relative ${
                showComoSoy || showAlimentacion ? "hidden" : "flex"
              } `}
            />
            <img
              src={"/tito/hab/mapa_ubi1.png"}
              className={` relative ${
                showComoSoy && !showAlimentacion
                  ? "w-[32vw] h-[250px] min-h-[50vh] opacity-100"
                  : "opacity-0 w-0 h-0"
              } `}
            />
            <img
              src={"/tito/hab/mapa_ubi2.png"}
              className={` relative ${
                !showComoSoy && showAlimentacion
                  ? "w-[32vw] h-[250px] min-h-[50vh] opacity-100"
                  : "opacity-0 w-0 h-0"
              } `}
            />
            <img
              src={"/tito/hab/mapa_point.png"}
              className={` relative transition-all duration-500 ease-in-out ${
                showComoSoy && showAlimentacion
                  ? "w-[32vw] h-[250px] min-h-[50vh] opacity-100"
                  : "opacity-0 w-0 h-0"
              } `}
            />
            <div className="relative right-[100px] flex flex-1 ">
              <img
                src={"/tito/hab/btnTermometro.png"}
                className={`self-start items-start justify-start ${
                  showHuevito
                    ? "opacity-0 h-0 w-0"
                    : "w-[4vw] min-w-[4vw] h-[16vh] min-h-[16vh] relative top-[-100px] transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-[1.2]"
                }
               `}
                onClick={() => setShowHuevito(true)}
              />
              <Image
                src={"/tito/hab/termo.gif"}
                className={` transition-all duration-500 ease-in-out ${
                  showHuevito
                    ? "opacity-100 w-[12vw] min-w-[12vw] h-[16vh] min-h-[16vh] relative top-[-100px]"
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
                src={"/descript/Retroceder.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q=amenaza"}>
              <img
                src={"/descript/Avanzar.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[100vh]">
          <div className="flex flex-col items-center justify-center max-h-[100vh]">
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
                  className={` relative right-[80px] z-[5] transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-y-0 h-[40vh] w-[25-vw] min-w-[25vw] min-h-[40vh] "
                      : "opacity-0 -translate-y-full h-0 w-0"
                  } `}
                  height={80}
                  width={180}
                />
              </div>
            </div>

            <div className="flex  relative right-[80px] ">
              <div className="flex  flex-1 relative items-center justify-center ">
                <img
                  src="/tito/hab/ubi2.png"
                  className={`w-[20vw] min-w-[20vw] h-[35vh] min-h-[35vh] z-10   relative  transition-all duration-500 ease-in-out ${
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
