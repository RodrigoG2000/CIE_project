import React from "react";
import Form from "./components/Form";
import fondo from "./fondo.jpeg"
import Presentation from "./components/Presentation";


function App() {
  return (
   <div>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form/>
          </div>
        <div className="hidden relative lg:flex h-full  w-1/2 items-start p-20 justify-center bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}>
          <Presentation/>
        </div>
        </div>
    
   </div>
  );
}

export default App;
