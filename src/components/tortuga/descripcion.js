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
          src={"/tito/menu/menu.png"}
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
      <div className="flex justify-between overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[100vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
          <div className="flex flex-col flex-1 w-full items-center justify-center relative right-[-60px] ">
            <img
              src={"/tortuga/descripcion/btnComosoy.png"}
              className={`relative w-[20vw] min-w-[20vw] h-[8vh] min-h-[8vh]   z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                showComoSoy
                  ? " transition-all hidden"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowComoSoy(true)}
            />
            <div className={`${showComoSoy ? "flex" : "h-0 w-0"}`}>
              <img
                src={"/tortuga/descripcion/clicComosoy.png"}
                className={`w-[20vw] min-w-[20vw] h-[35vh] min-h-[35vh]  mt-[-20px] transition-all duration-500  z-[5] ${
                  showComoSoy
                    ? "opacity-100 translate-y-[1px]"
                    : "opacity-0 -translate-y-full w-0 h-0"
                } `}
              />
            </div>
          </div>

          <div className="flex  flex-1 justify-center relative left-[100px] ">
            <Image
              className="w-[10vw] min-w-[10vw] h-[35vh] min-h-[35vh]"
              src={"/tortuga/descripcion/tortuga_perfil.gif"}
              height={50}
              width={50}
            />

            <img
              src="/tortuga/descripcion/btnCorazon.png"
              className={`z-[10] w-auto h-[80px] mt-[20px] relative transition-all duration-500 ease-in-out hover:scale-[1.2]  ${
                showHeart
                  ? "opacity-0 translate-x-full"
                  : "opacity-100 hover:cursor-pointer"
              }`}
              onClick={() => setShowHeart(true)}
            />

            <img
              src="/tortuga/descripcion/txtTortuga.png"
              className={`w-[10vw] min-w-[10vw] h-[35vh] min-h-[35vh] z-[5] mt-[20px] relative  right-[100px] transition-all duration-500 ease-in-out ${
                showHeart
                  ? "w-[10vw] min-w-[10vw] h-[25vh] min-h-[25vh] opacity-100 translate-x-0"
                  : "opacity-0 w-0 h-0"
              }`}
            />
          </div>
        </div>
        {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
         */}{" "}
        <div className="overflow-x-visible flex flex-col justify-between  items-center  h-[100vh] pt-12 w-[50vw] min-w-[50vw] max-w-[50vw]">
          <div className="flex">
            <img
              src={"/tortuga/descripcion/titulo.png"}
              className="w-auto h-[80px] mt-[10px] relative "
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="relative "
              src={"/tortuga/descripcion/tortuga_cara.gif"}
              height={300}
              width={300}
            />
            <img
              src={"/tortuga/descripcion/quiensoy.png"}
              className="w-[25vw] min-w-[25vw] h-[8vh] min-h-[8vh] relative top-[-50px] "
            />
            <div className="w-[35vw] top-[-55px] min-w-[35vw] h-[35vh] min-h-[35vh] border-[5px] border-orange-500 rounded-3xl relative overflow-hidden">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/tito/descr/her.mp4" />
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
            <Link href={"/tortuga"}>
              <img
                src={"/tortuga/btnRetroceder.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q="}>
              <img
                src={"/tortuga/btnHome.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
            <Link href={"?q=habitat"}>
              <img
                src={"/tortuga/btnAvanzar.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[100vh]">
          <div className="flex flex-col items-center justify-between max-h-[100vh]">
            <div className="flex flex-col items-center justify-center space-y-4 min-h-[50vh] flex-1">
              <img
                src={"/tortuga/descripcion/btnAlimentacion.png"}
                className={`relative w-[20vw] min-w-[20vw] h-[8vh] min-h-[8vh] right-[80px] z-10 transition-all duration-500 ease-in-out hover:scale-[1.1] ${
                  showAlimentacion
                    ? "opacity-100"
                    : "opacity-100 hover:cursor-pointer"
                }`}
                onClick={() => setShowAlimentacion(true)}
              />

              <div className="flex flex-col">
                <Image
                  src={"/tortuga/descripcion/graf_torta.gif"}
                  className={` relative right-[60px] z-[5] transition-all duration-500 ease-in-out ${
                    showAlimentacion
                      ? "opacity-100 translate-y-0 h-[25vh] min-h-[25vh] w-[20vw] min-w-[20vh] "
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

            <div className="flex self-start relative bottom-0 right-[70px] flex-1">
              <div className={`min-w-[150px] ${showHuevito ? "hidden" : ""}`}>
                <img
                  src={"/tortuga/descripcion/btnHuevito.png"}
                  className={`w-auto h-[80px] relative left-[80px]  hover:scale-[1.2] transition-all duration-500 ${
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
                className="h-[40vh] min-h-[40vh] max-h-[40vh] w-[25vw]"
                src={"/tortuga/descripcion/tortuga_cuerpo.gif"}
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
