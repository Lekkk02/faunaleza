import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import "./juego.css";
import "./manajuego.css";

const Juego = () => {
  const [showComoSoy, setShowComoSoy] = useState(false);

  return (
    <>
      <div className="manajuego flex absolute top-4 left-4 z-50 titlecontainer">
        <img src={"/manati/anatomia.png"} className="juego_titulo" />
      </div>
      <div className="manajuego flex justify-between overflow-hidden">
        <div class="flex min-h-[100vh] flex-col min-w-[100vw]">
          <div class="flex min-h-[20vh] min-w-[100vw]">
            <div class="container  main-container">
              <p className="draggable" draggable="true" myvalue="Cabeza">
                Cabeza
              </p>
              <p className="draggable" draggable="true" myvalue="Hocico">
                Hocico
              </p>
              <p className="draggable" draggable="true" myvalue="Cola">
                Cola
              </p>
              <p className="draggable" draggable="true" myvalue="Panza">
                Panza
              </p>
              <p className="draggable" draggable="true" myvalue="Aleta">
                Aleta
              </p>
            </div>
          </div>
          <div class="flex min-h-[80vh] min-w-[100vw]">
            <div className="flex flex-col items-center justify-center min-h-[80vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
              <div className="game_input_container game_input_container-1">
                <div className="hocico-flechas flecha-container">
                  <div className="hocico-flecha-1 input-line input-line-p-r"></div>
                  <div className="hocico-flecha-2 input-line input-line-p-r"></div>
                  <div className="hocico-flecha-3 input-line input-line-p-r"></div>
                </div>
                <div
                  className="container secondary-container"
                  ishouldhave="Hocico"
                ></div>
              </div>
              <div className="game_input_container game_input_container-2">
                <div className="panza-flechas input-line flecha-container">
                  <div className="panza-flecha-1 input-line input-line-p-r"></div>
                  <div className="panza-flecha-2 input-line input-line-p-r"></div>
                </div>
                <div
                  className="container secondary-container"
                  ishouldhave="Panza"
                ></div>
              </div>
              <div className="game_input_container game_input_container-3">
                <div className="cola-flechas flecha-container">
                  <div className="cola-flecha-1 input-line input-line-p-r"></div>
                  <div className="cola-flecha-2 input-line input-line-p-r"></div>
                </div>
                <div
                  className="container secondary-container"
                  ishouldhave="Cola"
                ></div>
              </div>
            </div>
            {/*                       SECCION DEL MEDIO - SOMBRERO Y VIDEO
             */}{" "}
            <div className="overflow-x-visible flex flex-col justify-between  items-center  h-[80vh] pt-12 w-[50vw] min-w-[50vw] max-w-[50vw]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={"/manati/juegomanati.gif"}
                  className="custom-manati mt-[19vh] absolute top-[7px]
            "
                />
              </div>
              <div className="flex mb-16 gap-8">
                <img
                src={"/manati/btnRetroceder.png"}
                  className="w-auto h-[60px] mt-[10px] relative "
                />
                <Link href={"?q="}>
                  <img
               src={"/manati/btnHome.png"}
                    className="w-auto h-[60px] mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
                  />
                </Link>

                <img
                  src={"/manati/btnAvanzar.png"}
                  className="w-auto h-[60px] mt-[10px] relative "
                />
              </div>
            </div>
            {/*                        SECCION DERECHA - ALIMENTACIO
             */}{" "}
            <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[80vh]">
              <div className="flex flex-col items-center justify-start max-h-[80vh]">
                <div className="game_input_container game_input_container-4">
                  <div className="ala-flechas flecha-container-right">
                    <div className="cabeza-flecha-1 input-line input-line-p-l"></div>
                    <div className="cabeza-flecha-2 input-line input-line-p-l"></div>
                  </div>
                  <div
                    className="container secondary-container"
                    ishouldhave="Cabeza"
                  ></div>
                </div>
                <div className="game_input_container game_input_container-5">
                  <div className="aleta-flechas flecha-container-right">
                    <div className="aleta-flecha-1 input-line input-line-p-l"></div>
                    <div className="aleta-flecha-2 input-line input-line-p-l"></div>
                  </div>
                  <div
                    className="container secondary-container"
                    ishouldhave="Aleta"
                  ></div>
                </div>
                <img src={"/manati/check.png"} className="terminar " />
              </div>{" "}
            </div>
          </div>
        </div>{" "}
      </div>
      <Script
        type="text/javascript"
        src="js/game.js"
        onReady={() => {
          window.gameload();
        }}
      />
    </>
  );
};

export default Juego;
