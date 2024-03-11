import { useState } from "react";
import ColorButton from "./components/ColorButton";
import Methods from "./components/Methods";

function App() {
  const [color, setColor] = useState("olive");

  const colorNames = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
  ];

  return (
    // <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-4 px-2">
    //     <div className="flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-4 rounded-3xl">
    //       {colorNames.map((colorName, index) => (
    //         <ColorButton
    //           onClick={() => (setColor(colorName))}
    //           key={index}
    //           btnID={colorName}
    //           colorName={colorName}
    //           colorText={colorName[0].toUpperCase() + colorName.slice(1)}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl shadow-lg px-2 py-4">
          {colorNames.map((colorName, index) => (
            <ColorButton
              onClick={() => setColor(colorName)}
              key={index}
              btnID={colorName}
              colorName={colorName}
              colorText={colorName[0].toUpperCase() + colorName.slice(1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
