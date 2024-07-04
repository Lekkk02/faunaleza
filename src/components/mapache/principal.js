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
          {" "}
          <img
            src={"/btnMenuHome.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh]  mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          />
          <img
            src={"/tortuga/btnTortuga.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh]  mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/tortuga");
            }}
          />
          <img
            src={"/tortuga/btnManati.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh]  mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/manati");
            }}
          />
          <img
            src={"/tortuga/btnCardenal.png"}
            className="w-[4vw] min-w-[4vw] h-[7vh] min-h-[7vh]  mt-[10px] relative cursor-pointer"
            onClick={() => {
              router.push("/cardenalito");
            }}
          />
        </div>
      </div>
      <div className="flex justify-between ]">
        <div className="flex flex-col justify-center gap-36">
          <Link href={"?q=descript"}>
            <div className="flex items-center justify-end relative left-[190px] top-[-40px] group">
              <img src="/mapache/BotonDescript.png" className="w-[145px] " />
              <p className="opacity-0 relative left-[-10px] transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-r-xl text-white font-[Poppins] text-2xl">
                Descripción
              </p>
            </div>
          </Link>
          <Link href={"?q=habitat"}>
            <div className="flex items-center justify-end relative left-[140px] top-[-50px] group">
              <img src="/mapache/BotonHabitat.png" className="w-[145px] " />
              <p className="opacity-0 relative left-[-10px] transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-r-xl text-white font-[Poppins] text-2xl">
                Habitat
              </p>
            </div>
          </Link>
        </div>
        <div className="overflow-hidden flex flex-col justify-center max-w-[50vw] w-[50vw] items-center h-[100vh] pt-24 flex-[1_0_auto]">
          <div className="flex flex-1">
            <img
              src={"/mapache/TITULO.png"}
              className="w-auto h-[140px] relative  "
            />
          </div>
          <div className="flex flex-1 relative top-[-40px]">
            <Image
              className="relative right-[-50px] w-[30vw] max-w-[30vw] "
              src={"/mapache/mapachePrincipal.gif"}
              height={50}
              width={50}
            />
            <img
              src={"/mapache/NOMBRE.png"}
              className="relative right-[60px] top-[-20px] h-[150px] w-[200px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-end gap-36 overflow-x-visible">
          <Link href={"?q=amenaza"}>
            <div className="flex flex-row items-center group relative right-[180px]">
              <p className="relative right-[-15px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
                Amenaza
              </p>
              <img src="/mapache/BotonAmenaza.png" className="w-[145px] " />
            </div>
          </Link>
          <Link href={"?q=juego"}>
            <div className="flex flex-row items-center group relative right-[180px]">
              <p className="relative right-[-15px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
                Juego
              </p>
              <img src="/mapache/BotonJuego.png" className="w-[145px] " />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Principal;
