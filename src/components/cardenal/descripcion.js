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
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-center justify-center relative right-[-60px] ">
            <img
              src={"/descript/como_soy.png"}
              className={`relative w-[260px] h-[50px]  z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowComoSoy(true)}
            />
            <div className={`${showComoSoy ? "flex" : "h-0 w-0"}`}>
              <img
                src={"/tito/descr/txt_tito.png"}
                className={`h-[230px] w-[240px] mt-[-20px] transition-all duration-500  z-[5] ${
                  showComoSoy
                    ? "opacity-100 translate-y-[1px]"
                    : "opacity-0 -translate-y-full w-0 h-0"
                } `}
              />
              <Image
                className={`h-[100px] w-[100px] absolute top-[180px] right-[-50px] transition-all duration-500  z-[5] ${
                  showComoSoy
                    ? "opacity-100 translate-y-[-50px]"
                    : "opacity-0 -translate-y-full w-0 h-0"
                } `}
                src={"/descript/Plumas.gif"}
                height={50}
                width={50}
              />
            </div>
          </div>

          <div className="flex gap-4 flex-1 relative ">
            <Image
              className=""
              src={"/descript/Cardenalita.gif"}
              height={310}
              width={310}
            />

            <img
              src="/descript/Descripcion_izquierda.png"
              className={`w-auto h-[80px] mt-[20px] relative right-[55px] transition-all duration-500 ease-in-out hover:scale-[1.2]  ${
                showHeart
                  ? "opacity-0 translate-x-full"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHeart(true)}
            />

            <img
              src="/tito/descr/txt_soy_cardenalita.png"
              className={`w-[200px] h-[180px] z-10 mt-[20px] relative top-[50px] right-[200px] transition-all duration-500 ease-in-out ${
                showHeart
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
              src={"/descript/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="relative "
              src={"/descript/Cardenalito-sombrero.gif"}
              height={300}
              width={300}
            />
            <img
              src={"/descript/quiensoy.png"}
              className="w-[260px] h-[50px] relative top-[-50px] "
            />
            <div className="w-[35vw] top-[-55px] min-w-[35vw] h-[35vh] min-h-[35vh] border-[5px] border-orange-500 rounded-3xl relative overflow-hidden">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/tito/video_cardenal.mp4" />
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
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=habitat"}>
              <img
                src={"/descript/Avanzar.png"}
                className="w-auto h-[10vh] min-h-[10vh] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[100vh]">
          <div className="flex flex-col items-center justify-between max-h-[100vh]">
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[50vh]">
              <img
                src={"/descript/alimentacion.png"}
                className={`relative w-[260px] h-[50px] right-[80px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showAlimentacion
                    ? "opacity-100"
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/tito/descr/graf_torta.gif"}
                  className={` relative right-[80px] z-[5] transition-all duration-500 ease-in-out ${
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

            <div className="flex self-end relative bottom-0 right-[50px] ">
              <div className={`min-w-[150px] ${showHuevito ? "hidden" : ""}`}>
                <img
                  src={"/descript/huevito.png"}
                  className={`w-[80px] h-[80px]  hover:scale-[1.2] transition-all duration-500 ${
                    showHuevito
                      ? "opacity-0 hidden"
                      : "opacity-100 hover:cursor-pointer"
                  }`}
                  onClick={() => setShowHuevito(true)}
                />
              </div>

              <div
                className={`${
                  showHuevito
                    ? "flex flex-col gap-y-2 transition-all   opacity-100"
                    : " opacity-0 w-0"
                }`}
              >
                <Image
                  className="h-[300px]  min-w-[150px] w-[150px]"
                  src={"/tito/descr/graf_nido.gif"}
                  height={320}
                  width={200}
                />
              </div>

              <Image
                className="h-[50vh] min-h-[50vh] max-h-[50vh] w-[25vw]"
                src={"/descript/Descripcionderecha.gif"}
                height={320}
                width={320}
              />
            </div>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
};

export default Descripcion;
