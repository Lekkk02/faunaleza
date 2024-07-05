import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Principal = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col absolute top-4 left-4 z-50">
        <img
          src={`${showMenu ? "/manati/cerrarMenu.png" : "/manati/menu.png"}`}
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
            src={"/tortuga/btnCardenal.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
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
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-36">
          <Link href={"?q=descript"}>
            <div className="flex items-center justify-end relative left-[190px] group">
              <img
                src="/manati/btnDescripcion.png"
                className="w-[120px] z-10"
              />
              <p className="opacity-0 left-[-2px] relative  transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#ec6255] rounded-r-xl text-white font-[Poppins] text-2xl">
                Descripción
              </p>
            </div>
          </Link>
          <Link href={"?q=habitat"}>
            <div className="flex items-center justify-end relative left-[140px]  group">
              <img src="/manati/btnHabitat.png" className="w-[120px] z-10" />
              <p className="opacity-0 relative left-[-2px]   transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#ec6255] rounded-r-xl text-white font-[Poppins] text-2xl">
                Hábitat
              </p>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden flex flex-col justify-center max-w-[50vw] w-[50vw] items-center h-[100vh] pt-8 flex-[1_0_auto]">
          <div className="flex ">
            <img
              src={"/manati/titulo.png"}
              className="w-auto h-[80px] relative  "
            />
          </div>
          <div className="flex flex-1 relative items-center justify-center  ">
            <Image
              className="relative right-[-50px] bottom-[60px] w-[22vw]  max-w-[22vw] h-[55vh] min-h-[55vh] "
              src={"/manati/manati.gif"}
              height={50}
              width={50}
            />
            <img
              src={"/manati/textoManati.png"}
              className="relative   h-[15vh] w-[20vw] bottom-[80px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-end gap-36 overflow-x-visible">
          <Link href={"?q=amenaza"}>
            <div className="flex flex-row items-center group relative right-[180px]">
              <p className="relative right-[-2px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#ec6255] rounded-l-xl text-white font-[Poppins] text-2xl">
                Amenaza
              </p>
              <img src="/manati/btnAmenaza.png" className="w-[120px] z-10" />
            </div>
          </Link>
          <Link href={"?q=juego"}>
            <div className="flex flex-row items-center group relative right-[180px]">
              <p className="relative right-[-2px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#ec6255] rounded-l-xl text-white font-[Poppins] text-2xl">
                Juego
              </p>
              <img src="/manati/btnJuego.png" className="w-[120px] z-10 " />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Principal;
