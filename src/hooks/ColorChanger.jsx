import React, { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("blue");
  const screenstyle = {
    height: "100vh",
    width: "100vw",
    background: `${bgColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleChangeColor = (e) => {
    setBgColor(e.target.value);
    alert("color changed to "+" " + bgColor)
  };

  return (
    <section style={screenstyle}>
      <div style={{ padding: "10px", background: "white" }}>
        <label style={{ color: "black", fontSize: "3rem", fontWeight: "900" }}>
          Change Screen Color
        </label>
        <input onChange={handleChangeColor} type="color" />
      </div>
    </section>
  );
}

export default ColorChanger;
