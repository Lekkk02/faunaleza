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

      <div className="flex flex-col px-16 py-8 min-h-[100vh]">
        <div className="flex max-h-[60vh] h-[60vh] ">
          {/*             SECCION IZQUIERDA
           */}
          <div
            className={` flex-1  transition-all  ease-in-out duration-500 w-[25vh] min-w[25vh] h-[70vh] min-h-[70vh] flex  ${
              showComoSoy
                ? "pt-6 justify-end items-center"
                : "pt-20 justify-center "
            } `}
          >
            <img
              src={"/tito/amenaza/btn_cap.png"}
              className={`relative  z-10 transition-opacity transition-transform duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all w-0 h-0"
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[14vh] min-h-[14vh] "
              }`}
              onClick={() => setShowComoSoy(true)}
            />

            <img
              src={"/tito/amenaza/captura_graf.png"}
              className={`relative   z-10 transition-all duration-500 ease-in-out  ${
                showComoSoy
                  ? " transition-all  w-[18vw] min-w-[18vw] h-[36vh] min-h-[36vh] "
                  : "opacity-100  w-0 h-0 "
              }`}
              onClick={() => setShowComoSoy(true)}
            />
          </div>
          {/*           SECCIÓN CENTRO
           */}
          <div className=" flex-[2_2_0%] flex-col w-[50vh] min-w[50vh] max-w-[50vw] h-[70vh] min-h-[70vh] flex items-center gap-20">
            <img
              src={"/tito/amenaza/titulo.png"}
              className={`relative z-10 transition-all h-[10vh] min-h-[10vh] duration-500 ease-in-out hover:scale-[1.1] `}
            />
            <Image
              src={"/tito/amenaza/cardenalito.gif"}
              className="w-[27vw] min-w[27vw] h-[40vh] min-h-[40vh]"
              width={50}
              height={50}
            />
          </div>
          {/*           SECCION DERECHA
           */}
          <div
            className={` flex-1  transition-all ease-in-out duration-500 w-[25vh] min-w[25vh] h-[70vh] min-h-[70vh] flex  justify-center ${
              showHuevito ? "pt-6 items-center" : "pt-20"
            } `}
          >
            <img
              src={"/tito/amenaza/btn_causa.png"}
              className={`relative  z-10 transition-opacity transition-transform duration-500 ease-in-out hover:scale-[1.1] ${
                showHuevito
                  ? " transition-all w-0 h-0 "
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[14vh] min-h-[14vh]"
              }`}
              onClick={() => setShowHuevito(true)}
            />

            <img
              src={"/tito/amenaza/causas.png"}
              className={`relative    z-10 transition-all duration-500 ease-in-out  ${
                showHuevito
                  ? " transition-all  w-[18vw] min-w-[18vw] h-[36vh] min-h-[36vh] "
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
              src={"/tito/amenaza/escala.gif"}
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
                src={"/descript/Retroceder.png"}
                className="w-auto h-[10vh] min-h-[10vh] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[10vh] min-h-[10vh] relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
            <Link href={"?q=juego"}>
              <img
                src={"/descript/Avanzar.png"}
                className="w-auto h-[10vh] min-h-[10vh]  relative  hover:scale-[1.2] transition-all duration-500 z-50"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenaza;
