import React, { useRef, useState } from "react";

const RefHook = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const inputStyle = {
    // border:"2px solid",
    // padding:"10px",
    // fontSize:"1.5rem"
    visibility: "hidden",
  };

  function focusInput() {
    // let input = document.getElementById("search")
    console.log(inputRef);
  }
  console.log("render")

  return (
    <div>
      <input
        ref={inputRef}
        id="search"
        // style={inputStyle}
        // onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="search"
      />
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{console.log(inputRef.current?.value)}</p>
      <button onClick={focusInput} style={{ fontSize: "5rem" }}>
        🔍
      </button>

      {/* <input ref={inputRef} style={inputStyle} type='file' />
        <div onClick={()=>{inputRef.current.click()}}  style={{border:"2px solid",height:"150px",width:"150px",borderRadius:"1000px"}}></div> */}
    </div>
  );
};

export default RefHook;
