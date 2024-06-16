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
      <div
        style={{
          position: "absolute",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={"/manati/amenaza/fondo.mp4"} type="video/mp4" />
        </video>
      </div>
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
              router.push("/manati");
            }}
          />
          <img
            src={"/tortuga/btnMapache.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
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
              src={"/manati/amenaza/btnAmenaza.png"}
              className={`relative  z-10 transition-opacity duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all w-0 h-0"
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[12vh] min-h-[12vh] "
              }`}
              onClick={() => setShowComoSoy(true)}
            />
            <div className="flex flex-col gap-4">
              <img
                src={"/manati/amenaza/manatiLinea.png"}
                className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                  showComoSoy
                    ? " transition-all  w-[18vw] min-w-[18vw] h-[28vh] min-h-[28vh] "
                    : "opacity-100  w-0 h-0 "
                }`}
                onClick={() => setShowComoSoy(true)}
              />
              <img
                src={"/manati/amenaza/catalog.png"}
                className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                  showComoSoy
                    ? " transition-all  w-[18vw] min-w-[18vw] h-[9vh] min-h-[9vh] "
                    : "opacity-100  w-0 h-0 "
                }`}
                onClick={() => setShowComoSoy(true)}
              />
            </div>
          </div>
          {/*           SECCIÓN CENTRO
           */}
          <div className="flex-[2_2_0%] flex-col w-[50vh] min-w[50vh] max-w-[50vw] h-[70vh] min-h-[70vh] flex items-center gap-20">
            <img
              src={"/manati/amenaza/titulo.png"}
              className={`relative z-10 transition-all h-[10vh] min-h-[10vh] duration-500 ease-in-out hover:scale-[1.1] `}
            />
            <Image
              src={"/manati/amenaza/manati.gif"}
              className="w-[30vw] min-w[30vw] h-[25vh] min-h-[25vh] z-10"
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
              src={"/manati/amenaza/btnAmenaza.png"}
              className={`relative  z-10 transition-opacity  duration-500 ease-in-out hover:scale-[1.1] ${
                showHuevito
                  ? " transition-all w-0 h-0 "
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[12vh] min-h-[12vh] "
              }`}
              onClick={() => setShowHuevito(true)}
            />

            <div className="flex flex-col gap-4">
              <img
                src={"/manati/amenaza/causas.png"}
                className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                  showHuevito
                    ? " transition-all  w-[18vw] min-w-[1vw] h-[28vh] min-h-[28vh] "
                    : "opacity-100  w-0 h-0 mt-0"
                }`}
              />
              <img
                src={"/manati/amenaza/causas2.png"}
                className={`relative  z-10 transition-all duration-500 ease-in-out  ${
                  showHuevito
                    ? " transition-all  w-[18vw] min-w-[18vw] h-[15vh] min-h-[15vh] "
                    : "opacity-100  w-0 h-0 mt-0"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex ">
            <div className="min-h-[166px] flex items-center">
              <img
                src={"/manati/amenaza/escala.png"}
                className={`relative  z-10 hover:scale-[1.05] ${
                  showHeart
                    ? "  w-0 h-0"
                    : "opacity-100 hover:cursor-pointer w-[90vw] min-w-[90vw] h-[8vh] min-h-[8vh] "
                }`}
                onClick={() => setShowHeart(true)}
              />
            </div>

            <Image
              src={"/manati/amenaza/escala.gif"}
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
                src={"/manati/btnRetroceder.png"}
                className="w-auto h-[60px] relative "
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/manati/btnHome.png"}
                className="w-auto h-[60px]  relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=juego"}>
              <img
                src={"/manati/btnAvanzar.png"}
                className="w-auto h-[60px] relative "
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenaza;
