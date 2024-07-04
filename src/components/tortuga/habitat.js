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
          src={`${showMenu ? "/tortuga/cerrarMenu.png" : "/tortuga/menu.png"}`}
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
            src={"/tortuga/btnCardenal.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
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
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-center justify-center relative  ">
            <Image
              src={"/tortuga/habitat/tortuga.gif"}
              className={`relative w-[20vw] min-w-[20vw] h-[20vh] min-h-[20vh]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
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
              src="/tortuga/habitat/textoDerecha.png"
              className={`w-[20vw] min-w-[20vw] h-[20vh] min-h-[20vh] z-10  left-[60px] relative  transition-all duration-500 ease-in-out ${
                showComoSoy
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            />{" "}
            <img
              src="/tortuga/habitat/textoDerechaAbajo.png"
              className={`w-[20vw] min-w-[20vw] h-[12vh] min-h-[12vh] z-10  left-[60px] relative  transition-all duration-500 ease-in-out ${
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
              src={"/tortuga/habitat/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-[2_2_0%] relative top-[50px]">
              <img
                src={"/tortuga/habitat/mapa.png"}
                className={`${
                  !showComoSoy && !showAlimentacion
                    ? "w-[32vw] h-[250px] min-h-[50vh] relative"
                    : "w-0 h-0"
                }
               `}
              />
              <img
                src={"/tortuga/habitat/mapa2.png"}
                className={`  transition-all duration-500 ease-in-out ${
                  showComoSoy || showAlimentacion
                    ? "opacity-100 w-[32vw] h-[250px] min-h-[50vh] relative "
                    : "opacity-0 w-0 h-0"
                }`}
              />
            </div>

            <div className="relative right-[100px] flex flex-1 ">
              <img
                src={"/tortuga/habitat/btnTermo.png"}
                className={`self-start items-start justify-start ${
                  showHuevito
                    ? "opacity-0 h-0 w-0"
                    : "w-[4vw] min-w-[4vw] h-[16vh] min-h-[16vh] relative top-[-100px] transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-[1.2]"
                }
               `}
                onClick={() => setShowHuevito(true)}
              />
              <Image
                src={"/tortuga/habitat/termometros_1.gif"}
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
                src={"/tortuga/btnRetroceder.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/tortuga/btnHome.png"}
                className="w-auto h-[10vh] min-h-[10vh]  mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=amenaza"}>
              <img
                src={"/tortuga/btnAvanzar.png"}
                className="w-auto h-[10vh] min-h-[10vh]  mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
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
                src={"/tortuga/habitat/btnInterro.png"}
                className={`relative w-[8vw] min-w-[8vw] h-[120px] right z-10 transition-all duration-500 ease-in-out hover:scale-[1.2] ${
                  showAlimentacion
                    ? "opacity-0 w-0 max-w-0 min-w-0 h-0 max-h-0 min-h-0"
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/tortuga/habitat/graf_barras.gif"}
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
              <img
                src={"/tortuga/habitat/txtAbajo.png"}
                className={`relative right z-10 transition-all duration-500 ease-in-out ${
                  showAlimentacion
                    ? "opacity-100  w-[19vw] min-w-[19vw] h-[30vh] min-h-[30vh] z-10"
                    : "opacity-0 w-0 max-w-0 min-w-0 h-0 max-h-0 min-h-0"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />
              {/*  <Image
                src={"/mapache/mapachePrincipal.gif"}
                className={`  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showHeart
                    ? " opacity-0 hidden "
                    : "opacity-100 relative w-[25vw] min-w-[25vw] h-[40vh] min-h-[40vh]  hover:cursor-pointer"
                }`}
                height={50}
                width={50}
                onClick={() => setShowHeart(true)}
              /> */}
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Habitat;
