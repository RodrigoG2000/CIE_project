import React from "react";
import jujutsu from "./nobara2.gif";

export default function Presentation(){
    return(
        <div className="text-center">
        <img src={jujutsu} className="rounded-full w-auto h-50"/>
        <p className="text-white p-12 text-justify">
          𝐄l 𝗜𝗺𝗽𝗲𝗿𝗶𝗼 𝗶𝗻𝘁𝗲𝗿𝗶𝗻𝗼 𝗰𝗼𝗺𝘂𝗻𝗶𝘁𝗮𝗿𝗶𝗼 busca incentivar a la sana competitividad entre los distintos jugadores, agrupaciones y comunidades roleplayers, principalmente de WhatsApp. Posteriormente otras plataformas como Facebook, Amino, entre otras. 
          <br></br>
          <br></br>
          Aquí no se discrimina a ningún jugador o agrupación, siempre y cuando cumplan con el reglamento de convivencia podrán permanecer en este lugar sin problemas. Se aceptan jugadores que no pertenezcan a ningún lado, incluso aquellos que no se hayan dentro de lo competitivo y sea más casual, debido a que CIE™ busca llegar a todos estos lugares para la convivencia sana en el Roleplay en general dentro de su plataforma.  
        </p>
        </div>
    )
}