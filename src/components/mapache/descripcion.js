import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Descripcion = () => {
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
            src={"/tortuga/btnTortuga.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/tortuga");
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
            src={"/tortuga/btnCardenal.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
            }}
          />
        </div>
      </div>
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-center justify-center relative right-[-60px] ">
            <img
              src={"/mapache/descripcion/btn_como_soy.png"}
              className={`relative w-[260px] h-[50px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowComoSoy(true)}
            />
            <div className={`${showComoSoy ? "flex" : "h-0 w-0"}`}>
              <img
                src={"/mapache/descripcion/clic_como_soy.png"}
                className={`h-[230px] w-[240px] mt-[-20px] transition-all duration-500  z-[5] ${
                  showComoSoy
                    ? "opacity-100 translate-y-[1px]"
                    : "opacity-0 -translate-y-full w-0 h-0"
                } `}
              />
            </div>
          </div>

          <div className="flex  flex-1 w-full items-start justify-end relative  ">
            <img
              src="/descript/Descripcion_izquierda.png"
              className={` transition-transform duration-500 ease-in-out hover:scale-[1.2]  ${
                showHeart
                  ? "opacity-0  w-0 h-0"
                  : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[13vh] min-h-[13vh]"
              }`}
              onClick={() => setShowHeart(true)}
            />
            <Image
              className={` transition-all duration-500 ease-in-out relative top-[130px] ${
                showHeart
                  ? "opacity-100 w-[12vw] min-w-[12vw] h-[26vh] min-h-[26vh]"
                  : "opacity-0  w-0 h-0"
              }`}
              src={"/mapache/descripcion/mapache_hembra.gif"}
              height={10}
              width={10}
            />
            <img
              src="/mapache/descripcion/madre_mapache.png"
              className={` transition-all duration-500 ease-in relative top-[130px]  ${
                showHeart
                  ? "opacity-100 w-[12vw] min-w-[12vw] h-[26vh] min-h-[26vh]"
                  : "opacity-0  w-0 h-0"
              }`}
            />
          </div>
        </div>
        {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
         */}{" "}
        <div className="overflow-x-visible flex flex-col justify-between  items-center  h-[100vh] pt-12 w-[50vw] min-w-[50vw] max-w-[50vw]">
          <div className="flex">
            <img
              src={"/mapache/descripcion/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="relative w-[16vw] min-w-[16vw] h-[18vh] min-h-[18vh]"
              src={"/mapache/descripcion/quienSoy.gif"}
              height={50}
              width={50}
            />
            <img
              src={"/descript/quiensoy.png"}
              className="w-[20vw]  min-w-[20vw] h-[7vh] min-h-[7vh] relative  "
            />
            <div className="w-[35vw]  min-w-[35vw] h-[35vh] min-h-[35vh] border-[5px] border-orange-500 rounded-3xl relative overflow-hidden">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/mapache/video_mapache.mp4" />
              </video>
            </div>

            {/*    <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/CXDv_oH-XYQ?si=p717bgg2CSnmdKK6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe> */}
          </div>
          <div className="flex mb-16 gap-8">
            <Link href={"?q="}>
              <img
                src={"/descript/Retroceder.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=habitat"}>
              <img
                src={"/descript/Avanzar.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex flex-col items-center justify-stretch min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col items-center justify-center max-h-[100vh]">
            <div className="flex flex-1 flex-col items-center justify-center  min-h-[50vh]">
              <img
                src={"/descript/alimentacion.png"}
                className={`relative w-[260px] h-[50px] top-[10px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showAlimentacion
                    ? "opacity-100 "
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/mapache/descripcion/grafTorta.gif"}
                  className={` relative  z-[5] transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-y-0 h-[180px] w-[240px] "
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

            <div
              className={`flex flex-1 self-start relative bottom-0 ${
                showHuevito ? "self-end items-end" : "self-start"
              } `}
            >
              <img
                src={"/mapache/descripcion/btn_alimen.png"}
                className={`hover:scale-[1.2] transition-all duration-500 ease-in-out${
                  showHuevito
                    ? "opacity-0 hidden"
                    : "opacity-100 hover:cursor-pointer w-[8vw] min-w-[8vw] h-[13vh] min-h-[13vh]"
                }`}
                onClick={() => setShowHuevito(true)}
              />

              <div
                className={`${
                  showHuevito
                    ? "flex flex-col gap-y-2 transition-all   opacity-100"
                    : " opacity-0 w-0"
                }`}
              >
                <Image
                  className="w-[10vw] min-w-[10vw] h-[40vh] min-h-[40vh]"
                  src={"/mapache/descripcion/camadas.gif"}
                  height={320}
                  width={200}
                />
              </div>

              <Image
                className={` transition-all duration-500 ease-in-out relative  ${
                  showHuevito
                    ? "opacity-100 w-[12vw] min-w-[12vw] h-[26vh] min-h-[26vh]"
                    : "opacity-0  w-0 h-0"
                }`}
                src={"/mapache/descripcion/mapache_hembra.gif"}
                height={10}
                width={10}
              />
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Descripcion;
/*    <div className="flex min-h-[100vh] h-[100vh] w-full px-16 py-8">
             SECCION IZQUIERDA     
      <div className="flex flex-col flex-1 min-w-[20vw] w-[20vw] min-h-[85vh]">
        <div
          className={`flex-1 transition-all duration-500 ease-in-out  flex justify-center ${
            showComoSoy ? "items-start" : "items-center"
          }`}
        >
          <img
            src={"/descript/como_soy.png"}
            className={`  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showComoSoy
                ? " transition-all h-0 w-0 opacity-0"
                : "opacity-100 hover:cursor-pointer relative w-[310px] h-[65px]"
            }`}
            onClick={() => setShowComoSoy(true)}
          />
          <div
            className={`${showComoSoy ? " flex w-[20vw] h-[20vh]" : "w-0 h-0"}`}
          >
            <img
              src={"/mapache/descripcion/clic_como_soy.png"}
              className={` transition-all duration-500  z-[5] ${
                showComoSoy
                  ? "opacity-100 h-[250px] w-[350px] "
                  : "opacity-0 -translate-y-full w-0 h-0"
              } `}
            />
          </div>
        </div>
        <div className="flex-1 justify-end flex">
          <img
            className={` transition-all duration-500 ease-in-out ${
              showMapache
                ? "opacity-0 w-0 h-0"
                : "cursor-pointer hover:scale-105 w-[100px] h-[100px]"
            }`}
            src={"/mapache/descripcion/btn_corazon.png"}
            onClick={() => {
              setShowMapache(true);
            }}
          />
          <div className={`${showMapache ? "w-[100px] h-[100px]" : "w-0 h-0"}`}>
            <img
              className={` transition-all duration-500 ease-in-out ${
                showMapache
                  ? "opacity-0 w-0 h-0"
                  : "cursor-pointer hover:scale-105 w-[100px] h-[100px]"
              }`}
              src={"/mapache/descripcion/btn_corazon.png"}
              onClick={() => {
                setShowMapache(true);
              }}
            />
          </div>
        </div>
      </div>
      /*       SECCION CENTRAL       
      <div className="flex flex-col flex-[2_2_0%] min-w-[50vw] w-[25vw] min-h-[85vh] items-center">
        <img
          src={"mapache/descripcion/TITULO.png"}
          className="w-[27vw] h-[15vh] min-w-[27vw] min-h-[15vh]   "
        />
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative top-[-45px]"
            src={"/mapache/descripcion/quienSoy.gif"}
            height={200}
            width={200}
          />
          <img
            src={"/descript/quiensoy.png"}
            className="w-[260px] h-[50px] relative top-[-50px] "
          />
          <img
            src={"/descript/Prevvideo.png"}
            className="w-[35vw] min-w-[35vw] h-[30vh] min-h-[30vh] relative top-[-55px] "
          />
        </div>
        <div className="flex gap-8">
          <Link href={"?q="}>
            <img
              src={"/descript/Retroceder.png"}
              className="w-[10vw] min-w-[10vw] h-[9vh] min-h-[9vh]   relative hover:scale-105"
            />
          </Link>

          <Link href={"?q="}>
            <img
              src={"/descript/Inicio.png"}
              className="w-[5vw] min-w-[5vw] h-[9vh] min-h-[9vh]  relative  hover:scale-[1.2] transition-all duration-500"
            />
          </Link>

          <Link href={"?q=habitat"}>
            <img
              src={"/descript/Avanzar.png"}
              className="w-[10vw] min-w-[10vw] h-[9vh] min-h-[9vh]   relative hover:scale-105"
            />
          </Link>
        </div>
      </div>
      {/*       SECCION DERECHA       
      <div className="flex flex-col flex-1 min-w-[20vw] w-[20vw] min-h-[85vh]">
        <div
          className={`flex-1 transition-all duration-500 ease-in-out  flex justify-center ${
            showAlimentacion ? "items-start" : "items-center"
          }`}
        >
          {" "}
          <img
            src={"/descript/alimentacion.png"}
            className={`relative  w-[310px] h-[65px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
              showAlimentacion
                ? "opacity-100"
                : "opacity-100 hover:cursor-pointer"
            }`}
            onClick={() => setShowAlimentacion(true)}
          />
          <div className="flex flex-col">
            <Image
              className={`h-[260px] w-[260px] relative  transition-all duration-500 ease-in-out ${
                showAlimentacion
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              } `}
              src={"/mapache/descripcion/grafTorta.gif"}
              height={220}
              width={220}
            />
            <img
              src={"/mapache/descripcion/ALIMENTO.png"}
              className={`h-[120px] w-[120px] relative transition-all duration-500 ease-in-out ${
                showAlimentacion
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              } `}
              height={80}
              width={80}
            />
          </div>{" "}
        </div>
        <div className="flex flex-1">
          <img
            src="/mapache/descripcion/btn_alimen.png"
            className="w-[7vw] min-w-[7vw] h-[12vh] min-h-[12vh]"
          />
        </div>
      </div>
    </div> */
