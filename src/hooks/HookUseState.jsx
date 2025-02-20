import React, { useEffect, useState } from "react";

function HookUseState() {
  console.log("hookuseState mounted");
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);

  //usestate re-renders component whenever we change its state.

  const buttonStyle = {
    backgroundColor: "blue",
    padding: "4px",
    color: "white",
    borderRadius: "6px",
    border: "none",
  };

  const countStyle = {
    padding: "5px 20px",
    border: "1px solid",
    fontSize: "1.2rem",
    fontWeight: "900",
  };

  const container = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  function decreamentCount() {
    setCount(count + 1);
    console.log(count);
  }

  console.log(count);
  useEffect(function () {
    setCount(count + 1);
  }, []);

  return (
    <>
      <div style={container}>
        <button onClick={decreamentCount} style={buttonStyle}>
          decrement
        </button>
        <span style={countStyle}>{page}</span>
        <button style={buttonStyle}>increament</button>
      </div>
      <div style={container}>
        <button onClick={()=>{setPage(page-1)}} style={buttonStyle}>
          prev
        </button>
        <span style={countStyle}>page:{page}</span>
        <button onClick={()=>{setPage(page+1)}} style={buttonStyle}>next</button>
      </div>
    </>
  );
}

export default HookUseState;
