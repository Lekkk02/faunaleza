import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import './juego.css'
import './cardijuego.css'


const Juego = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showComoSoy, setShowComoSoy] = useState(false);
  const [showAlimentacion, setShowAlimentacion] = useState(false);
  const [showHuevito, setShowHuevito] = useState(false);

  return (
    <>
      <div className="flex absolute top-4 left-4 z-50">
        <img
          src={"/tito/menu/menu.png"}
          className="w-auto h-[80px] mt-[10px] relative "
          onClick={() => {
            console.log("clicked menu from layout.js");
          }}
        />
      </div>
      <div className="flex justify-between overflow-hidden cardinalgame">
      <div class="flex min-h-[100vh] flex-col min-w-[100vw]">
      <div class="flex min-h-[20vh] min-w-[100vw]">
      <div class="container  main-container">
  <p className="draggable" draggable="true" myvalue="Pico">Pico</p>
  <p className="draggable" draggable="true" myvalue="Ojo">Ojo</p>
  <p className="draggable" draggable="true" myvalue="Pluma">Pluma</p>
  <p className="draggable" draggable="true" myvalue="Ala">Ala</p>
  <p className="draggable" draggable="true" myvalue="Cola">Cola</p>
  <p className="draggable" draggable="true" myvalue="Pata">Pata</p>
</div>

      
     
      
      </div>
      <div class="flex min-h-[80vh] min-w-[100vw]">
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
        
        <div className="game_input_container">
        <div className="pico-flechas flecha-container">
        <div className="pico-flecha-1 input-line"></div>
        <div className="pico-flecha-2 input-line"></div>
        <div className="pico-flecha-3 input-line"></div>
        </div>
        <div className="container secondary-container" ishouldhave="Pico"></div>
        </div>
        <div className="game_input_container">
        <div className="pata-flechas flecha-container">
        <div className="pata-flecha-1 input-line"></div>
        <div className="pata-flecha-2 input-line"></div>
        </div>
        <div className="container secondary-container" ishouldhave="Pata"></div>
        </div>
        <div className="game_input_container">
        <div className="pluma-flechas flecha-container">
        <div className="pluma-flecha-1 input-line"></div>
        <div className="pluma-flecha-2 input-line"></div>
        <div className="pluma-flecha-3 input-line"></div>
        <Image
              src={"/pluma.png"}
              className="pluma"
              height={50}
              width={50}
              onClick={() => setShowComoSoy(true)}
            />
        </div>
        <div className="container secondary-container" ishouldhave="Pluma"></div>
        </div>

        </div>
        {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
         */}{" "}
        <div className="overflow-x-visible flex flex-col justify-between  items-center  h-[80vh] pt-12 w-[50vw] min-w-[50vw] max-w-[50vw]">
          <div className="flex flex-col justify-center items-center">
           <img
              src={"/cardijuegoframe.png"}
              className="h-[80vh] mt-[19vh] absolute top-[7px]
            "
            />
          </div>
          <div className="flex mb-16 gap-8">
            <img
              src={"/descript/Retroceder.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
            <Link href={"?q="}>
              <img
                src={"/descript/Inicio.png"}
                className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
              />
            </Link>

            <img
              src={"/descript/Avanzar.png"}
              className="w-auto h-[60px] mt-[10px] relative "
            />
          </div>
        </div>
        {/*                        SECCION DERECHA - ALIMENTACIO
         */}{" "}
        <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[80vh]">
          <div className="flex flex-col items-center justify-start gap-[20px] max-h-[80vh]">
          <div className="game_input_container">
          <div className="container secondary-container" ishouldhave="Pluma"></div>
          </div>
          <div className="game_input_container">
          <div className="container secondary-container" ishouldhave="Ala"></div>
          </div>
          <div className="game_input_container">
          <div className="container secondary-container" ishouldhave="Cola"></div>
          </div>
          </div>{" "}
        </div>
        </div>
      </div>{" "}
      </div>
      <Script type="text/javascript" src="js/game.js" />
      <style>
        
      </style>
    </>
  );
};


export default Juego;
