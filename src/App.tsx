import { useState } from "react";
import "./App.css";
import ColorPicker from "./ColorPicker";

function App() {
  const [color, setColor] = useState("#1077a2");

  return (
    <>
      <main className="main-layout" style={{ backgroundColor: color }}>
        <div className="main-container">
          <ColorPicker color={color} setColor={setColor} />
        </div>
        <p className="creator">by urtaav</p>
      </main>
    </>
  );
}

export default App;
