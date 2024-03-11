import React from 'react';


function ColorButton({ btnID, colorName, colorText, onClick }) {
  
    return (
    <button
    onClick={() => onClick && onClick(colorName) }
      id={btnID}
      className="outline-none px-4 rounded-full text-white shadow-md "
      style={{ background: colorName, }}
    >
      {colorText}
    </button>
  );
}

export default ColorButton;
