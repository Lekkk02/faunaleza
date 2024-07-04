import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import "./juego.css";
import "./tortujuego.css";

const Juego = () => {
  const [showComoSoy, setShowComoSoy] = useState(false);

  return (
    <>
      <div className="tortujuego flex absolute top-4 left-4 z-50 titlecontainer">
        <img src={"/tortuga/juego/Estático-55.png"} className="juego_titulo" />
        <img src={"/tortuga/juego/Estático-56.png"} className="subtitle" />
      </div>
      <div className=" tortujuego flex justify-between overflow-hidden">
        <div class="flex min-h-[100vh] flex-col min-w-[100vw]">
          <div class="flex min-h-[20vh] min-w-[100vw]">
            <div class="container  main-container">
              <p className="draggable" draggable="true" myvalue="Boca">
                Boca
              </p>
              <p className="draggable" draggable="true" myvalue="Ojo">
                Ojo
              </p>
              <p className="draggable" draggable="true" myvalue="Caparazon">
                Caparazon
              </p>
              <p className="draggable" draggable="true" myvalue="Cola">
                Cola
              </p>
              <p className="draggable" draggable="true" myvalue="Aleta">
                Aleta
              </p>
            </div>
          </div>
          <div class="flex min-h-[80vh] min-w-[100vw]">
            <div className="flex flex-col items-center justify-center min-h-[80vh] w-[25vw] min-w-[25vw] max-w-[25vw]">
              <div className="game_input_container">
                <div className="caparazon-flechas flecha-container">
                  <div className="caparazon-flecha-1 input-line"></div>
                  <div className="caparazon-flecha-2 input-line"></div>
                </div>
                <div
                  className="container secondary-container"
                  ishouldhave="Caparazon"
                ></div>
              </div>
              <div className="game_input_container">
                <div className="cola-flechas flecha-container">
                  <div className="cola-flecha-1 input-line"></div>
                  <div className="cola-flecha-2 input-line"></div>
                  <div className="cola-flecha-3 input-line"></div>
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
                  src={"/tortuga/juego/rotateme.gif"}
                  className="rotateme  mt-[19vh] absolute top-[7px]
            "
                />
              </div>
              <div className="flex mb-16 gap-8">
                <Link href={"?q=amenaza"}>
                  <img
                    src={"/tortuga/btnRetroceder.png"}
                    className="w-auto h-[10vh] min-h-[10vh]  mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
                  />
                </Link>
                <Link href={"?q="}>
                  <img
                    src={"/tortuga/btnHome.png"}
                    className="w-auto h-[10vh] min-h-[10vh]  mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
                  />
                </Link>
                <Link href={"?q="}>
                  <img
                    src={"/tortuga/btnAvanzar.png"}
                    className="w-auto h-[10vh] min-h-[10vh]  mt-[10px] relative  hover:scale-[1.2] transition-all duration-500"
                  />
                </Link>
              </div>
            </div>
            {/*                        SECCION DERECHA - ALIMENTACIO
             */}{" "}
            <div className="flex justify-between overflow-visible w-[25vw] min-w-[25vw] max-w-[25vw] h-[80vh]">
              <div className="flex flex-col items-center justify-start max-h-[80vh]">
                <div className="game_input_container">
                  <div className="ojo-flechas flecha-container-right">
                    <div className="ojo-flecha-1 input-line"></div>
                    <div className="ojo-flecha-2 input-line"></div>
                  </div>
                  <div
                    className="container secondary-container"
                    ishouldhave="Ojo"
                  ></div>
                </div>
                <div className="game_input_container">
                  <div className="boca-flechas flecha-container-right">
                    <div className="boca-flecha-1 input-line"></div>
                    <div className="boca-flecha-2 input-line"></div>
                    <div className="boca-flecha-3 input-line"></div>
                  </div>
                  <div
                    className="container secondary-container"
                    ishouldhave="Boca"
                  ></div>
                </div>
                <div className="game_input_container">
                  <div className="aleta-flechas flecha-container-right">
                    <div className="aleta-flecha-1 input-line"></div>
                    <div className="aleta-flecha-2 input-line"></div>
                  </div>
                  <div
                    className="container secondary-container"
                    ishouldhave="Aleta"
                  ></div>
                </div>
                <img src={"/tortuga/ok.png"} className="terminar " />
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
