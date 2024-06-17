import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Amenaza = () => {
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
          className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
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
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/");
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
            src={"/tortuga/btnManati.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/manati");
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
      <div className="flex flex-col px-16 py-8 min-h-[100vh]">
        <div className="flex max-h-[60vh] h-[60vh]">
          {/*             SECCION IZQUIERDA
           */}
          <div
            className={` flex-1 transition-all ease-in-out duration-500 w-[25vh] min-w[25vh] h-[70vh] min-h-[70vh] flex  justify-center ${
              showComoSoy ? "pt-6" : "pt-20"
            } `}
          >
            <img
              src={"/tortuga/amenaza/btnAmenaza.png"}
              className={`relative  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all w-0 h-0"
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[12vh] min-h-[12vh] "
              }`}
              onClick={() => setShowComoSoy(true)}
            />

            <img
              src={"/tortuga/amenaza/evo_cap.png"}
              className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                showComoSoy
                  ? " transition-all  w-[18vw] min-w-[18vw] h-[36vh] min-h-[36vh] "
                  : "opacity-100  w-0 h-0 "
              }`}
              onClick={() => setShowComoSoy(true)}
            />
          </div>
          {/*           SECCIÓN CENTRO
           */}
          <div className="flex-[2_2_0%] flex-col w-[50vh] min-w[50vh] max-w-[50vw] h-[70vh] min-h-[70vh] flex items-center gap-20">
            <img
              src={"/tortuga/amenaza/titulo.png"}
              className={`relative z-10 transition-all h-[10vh] min-h-[10vh] duration-500 ease-in-out hover:scale-[1.1] `}
            />
            <Image
              src={"/tortuga/amenaza/triste.gif"}
              className="w-[25vw] min-w[25vw] h-[30vh] min-h-[30vh] -rotate-12 z-[50]"
              width={50}
              height={50}
            />
          </div>
          {/*           SECCION DERECHA
           */}
          <div
            className={`flex-1 transition-all ease-in-out duration-500 w-[25vh] min-w[25vh] h-[70vh] min-h-[70vh] flex  justify-center ${
              showHuevito ? "pt-6" : "pt-20"
            } `}
          >
            <img
              src={"/tortuga/habitat/btnInterro.png"}
              className={`relative  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showHuevito
                  ? " transition-all w-0 h-0 "
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[12vh] min-h-[12vh] "
              }`}
              onClick={() => setShowHuevito(true)}
            />

            <img
              src={"/tortuga/amenaza/causas.png"}
              className={`relative  z-10 transition-all duration-500 ease-in-out right-[80px]  ${
                showHuevito
                  ? " transition-all  w-[28vw] min-w-[28vw] h-[36vh] min-h-[36vh] "
                  : "opacity-100  w-0 h-0 mt-0"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex ">
            <div className="min-h-[166px] flex items-center">
              <img
                src={"/tito/amenaza/escala.png"}
                className={`relative  z-10 hover:scale-[1.05] ${
                  showHeart
                    ? "  w-0 h-0"
                    : "opacity-100 hover:cursor-pointer w-[90vw] min-w-[90vw] h-[8vh] min-h-[8vh] "
                }`}
                onClick={() => setShowHeart(true)}
              />
            </div>

            <Image
              src={"/tortuga/amenaza/escala.gif"}
              className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                showHeart
                  ? " transition-all  w-[90vw] min-w-[90vw] h-[20vh] min-h-[20vh] "
                  : "opacity-0  w-0 h-0 "
              }`}
              width={50}
              height={50}
            />
          </div>

          <div className="flex  gap-8">
            <Link href={"?q=habitat"}>
              <img
                src={"/tortuga/btnRetroceder.png"}
                className="w-auto h-[60px]  relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/tortuga/btnHome.png"}
                className="w-auto h-[60px]  relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=juego"}>
              <img
                src={"/tortuga/btnAvanzar.png"}
                className="w-auto h-[60px]  relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenaza;
