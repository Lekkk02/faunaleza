import Image from "next/image";
import Link from "next/link";
const Principal = () => {
  return (
    <div className="flex justify-between ]">
      <div className="flex flex-col justify-center gap-36">
        <Link href={"?q=descript"}>
          <div className="flex items-center justify-end relative left-[190px]  group">
            <img src="/tortuga/btnDescripcion.png" className="w-[150px] " />
            <p className="opacity-0 relative top-[-5px] left-[-20px] transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#58b434] rounded-r-xl text-white font-[Poppins] text-2xl">
              Descripción
            </p>
          </div>
        </Link>
        <Link href={"?q=habitat"}>
          <div className="flex items-center justify-end relative left-[140px]  group">
            <img src="/tortuga/btnHabitat.png" className="w-[150px] " />
            <p className="opacity-0 relative top-[8px] left-[-23px] transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#58b434] rounded-r-xl text-white font-[Poppins] text-2xl">
              Habitat
            </p>
          </div>
        </Link>
      </div>
      <div className="overflow-hidden flex flex-col justify-center max-w-[700px] items-center h-[100vh] pt-24 flex-[1_0_auto]">
        <div className="flex">
          <img
            src={"/tortuga/titulo.png"}
            className="w-auto h-[120px] relative top-[-175px] "
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
        <div className="flex flex-row items-center group relative right-[130px]">
          <p className="relative right-[-15px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#58b434] rounded-l-xl text-white font-[Poppins] text-2xl">
            Amenaza
          </p>
          <img src="/tortuga/btnAmenaza.png" className="w-[125px] " />
        </div>

        <div className="flex flex-row items-center group relative right-[130px]">
          <p className="relative right-[-15px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-[#58b434] rounded-l-xl text-white font-[Poppins] text-2xl">
            Juego
          </p>
          <img src="/tortuga/btnJuego.png" className="w-[125px] " />
        </div>
      </div>
    </div>
  );
};

export default Principal;
