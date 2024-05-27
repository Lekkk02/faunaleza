import Image from "next/image";
import Link from "next/link";
const Principal = () => {
  return (
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
      <div className="overflow-hidden flex flex-col justify-center max-w-[700px] items-center h-[100vh] pt-24 flex-[1_0_auto]">
        <div className="flex">
          <img
            src={"/mapache/TITULO.png"}
            className="w-auto h-[140px] relative top-[-155px] "
          />
        </div>
        <div className="flex">
          <Image
            className="relative right-[-50px]"
            src={"/mapache/mapachePrincipal.gif"}
            height={350}
            width={350}
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

        <div className="flex flex-row items-center group relative right-[180px]">
          <p className="relative right-[-15px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
            Juego
          </p>
          <img src="/mapache/BotonJuego.png" className="w-[145px] " />
        </div>
      </div>
    </div>
  );
};

export default Principal;
