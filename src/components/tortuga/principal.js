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
      <div className="flex justify-between ]">
        <div className="flex flex-col justify-center gap-36">
          <Link href={"?q=descript"}>
            <div className="flex items-center justify-end relative left-[190px]  group">
              <img
                src="/tortuga/btnDescripcion.png"
                className="w-[110px] z-[10] "
              />
              <p className="z-[5] opacity-0 relative top-[-5px] transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#94ac3a] rounded-r-xl text-white font-[Poppins] text-2xl">
                Descripción
              </p>
            </div>
          </Link>
          <Link href={"?q=habitat"}>
            <div className="flex items-center justify-end relative left-[140px]  group">
              <img
                src="/tortuga/btnHabitat.png"
                className="w-[110px] z-[10] "
              />
              <p className="z-[5] opacity-0 relative top-[8px]   transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#94ac3a] rounded-r-xl text-white font-[Poppins] text-2xl">
                Habitat
              </p>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden flex flex-col justify-center max-w-[700px] items-center h-[100vh] pt-24 flex-[1_0_auto]">
          <div className="flex">
            <img
              src={"/tortuga/titulo.png"}
              className="w-[35vw] min-w-[35vw] h-[10vh] min-h-[10vh] relative top-[-175px] "
            />
          </div>
          <div className="flex">
            <Image
              className="relative right-[-50px] top-[-110px]"
              src={"/tortuga/tortuga_perfil.gif"}
              height={350}
              width={350}
            />
            <img
              src={"/tortuga/nombre.png"}
              className="relative right-[2px] top-[-150px] h-[280px] w-[230px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-end gap-36 overflow-x-visible">
          <Link href={"?q=amenaza"}>
            <div className="flex flex-row items-center group relative right-[130px]">
              <p className="z-[5] relative right-[-2px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#94ac3a] rounded-l-xl text-white font-[Poppins] text-2xl">
                Amenaza
              </p>
              <img src="/tortuga/btnAmenaza.png" className="w-[110px] z-[10]" />
            </div>
          </Link>
          <div className="flex flex-row items-center group relative right-[130px]">
            <p className=" z-[5] relative  opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#94ac3a] rounded-l-xl text-white font-[Poppins] text-2xl">
              Juego
            </p>
            <img src="/tortuga/btnJuego.png" className="w-[110px] z-[10]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
