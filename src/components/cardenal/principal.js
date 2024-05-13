import Image from "next/image";
import Link from "next/link";
const Principal = () => {
  return (
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

        <div className="flex items-center group">
          <img src="/descript/ramahabitat.png" className="w-[300px] " />
          <p className="relative top-[-14px] opacity-0 transform translate-x-[-16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-r-xl text-white font-[Poppins] text-2xl">
            Habitat
          </p>
        </div>
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
        <div className="flex flex-row items-center group">
          <p className="relative top-[14px] opacity-0 transform translate-x-[16px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
            Amenaza
          </p>
          <img src="/descript/ramaamenaza2.png" className="w-[300px] " />
        </div>
        <div className="flex flex-row items-center group">
          <p className="relative top-[-32px] opacity-0 transform  transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 p-[8px] bg-naranja rounded-l-xl text-white font-[Poppins] text-2xl">
            Juego
          </p>
          <img src="/descript/ramajuego.png" className="w-[300px] " />
        </div>
      </div>
    </div>
  );
};

export default Principal;
