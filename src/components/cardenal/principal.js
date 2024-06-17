import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Principal = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <>
      {" "}
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
            src={"/tortuga/btnMapache.png"}
            className="w-[5vw] min-w-[5vw] h-[8vh] min-h-[8vh] mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/mapache");
            }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-center gap-36">
          <Link href={"?q=descript"}>
            <div className="flex items-center group">
              <img src="/descript/ramadescripcion.png" className="w-[300px] " />
              <p className="opacity-0 transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-r-xl text-white font-[Poppins] text-2xl">
                Descripción
              </p>
            </div>
          </Link>
          <Link href={"?q=habitat"}>
            <div className="flex items-center group">
              <img src="/descript/ramahabitat.png" className="w-[300px] " />
              <p className="relative top-[-14px] opacity-0 transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-r-xl text-white font-[Poppins] text-2xl">
                Habitat
              </p>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden flex flex-col justify-center items-center h-[100vh] pt-24">
          <div className="flex">
            <img
              src={"/tito/TituloElCardenalito.png"}
              className="w-auto h-[60px]"
            />
          </div>
          <div className="flex">
            <Image className="" src={"/prueba.gif"} height={600} width={600} />
            <img
              src={"/tito/HolaSoyTito.png"}
              className="relative right-[200px] top-[122px] h-[110px] w-[110px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-end gap-36 overflow-hidden">
          <Link href={"?q=amenaza"}>
            <div className="flex flex-row items-center group">
              <p className="relative top-[14px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
                Amenaza
              </p>
              <img src="/descript/ramaamenaza2.png" className="w-[300px] " />
            </div>
          </Link>
          <Link href={"?q=juego"}>
            <div className="flex flex-row items-center group">
              <p className="relative top-[-32px] opacity-0 transform  transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
                Juego
              </p>
              <img src="/descript/ramajuego.png" className="w-[300px] " />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Principal;
