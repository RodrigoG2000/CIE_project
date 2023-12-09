import React from "react";
import Form from "./components/Form";
import fondo from "./fondo.jpeg"
import Presentation from "./components/Presentation";


function App() {
  return (
   <div>
      <div className = "grid grid-cols-1 lg:grid-cols-2 w-full h-screen">
        <div className="flex items-center justify-center lg:col-span-1">
          <Form/>
          </div>
        <div className= "hidden relative lg:flex h-full w-full items-start p-20 justify-center bg-cover bg-center" style={{ backgroundImage: `url(${fondo})` }}>
          <Presentation/>
        </div>
        </div>
    
   </div>
  );
}

export default App;
