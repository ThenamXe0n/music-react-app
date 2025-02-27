import React from "react";

const TodoList = () => {
  let sectionStyle = {
    height: "100vh",
    width: "100vw",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between",
    padding:"20px"
  };

  let displayBoxStyle = {
    border: "2px solid white",
    height:"80%"
  };
  let inputBoxStyle = {
    border: "2px solid white",
    height: "15%",
  };
  return (
    <section style={sectionStyle}>
      <div  id={"taskInputBox"} style={inputBoxStyle}>
        <input  type={"text"} placeholder={"Enter Task"} />
        <button style={{background:"white"}}>+</button>
      </div>
      <div id={"taskDisplayBox"} style={displayBoxStyle}>
        
      </div>
    </section>
  );
};

export default TodoList;
