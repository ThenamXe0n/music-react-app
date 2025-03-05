import axios from "axios";
import { Notify } from "notiflix";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResistrationPage = () => {
  const navigate = useNavigate();
  const nameref = useRef();
  const numberref = useRef();
  const passwordref = useRef();
  const emailref = useRef();
  const ConformPassref = useRef();

  async function postData(data) {
    let sended = await axios.post("http://localhost:8080/users", data);
    return sended;
  }

  async function handleRegister(e) {
    e.preventDefault();

    let isMatch = passwordref.current.value === ConformPassref.current.value;
    if (!isMatch) {
      Notify.failure("password do not match!");
    }
    let data = {
      username: nameref.current?.value,
      password: passwordref.current?.value,
      emil: emailref.current?.value,
      mobile: numberref.current?.value,
    };
    let response = await postData(data);
    Notify.success("register successfully!");
    navigate("/login");
  }

  // useEffect(postData,[]);

  return (
    <section className="bg-[#eee7d7] w-screen h-screen flex justify-center items-center">
      <div
        id="outter"
        className="w-[34vw] p-2 h-fit bg-white flex justify-center items-center"
      >
        <div
          id="inner"
          className="w-[32vw] h-full py-7 bg-white border-2 border-black "
        >
          <h2 className="text-4xl font-bold text-center">Resistration Form</h2>
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center w-[100%] mt-7 gap-3"
          >
            <div className="flex flex-col">
              <label htmlFor="name">
                Username
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={nameref}
                className="border-[1px] h-8 w-[20vw] rounded-sm border-black"
                type="text"
                id="name"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Email">
                Email<span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={emailref}
                className="border-[1px] h-8 w-[20vw] rounded-sm border-black"
                type="Email"
                id="Email"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Mobil">
                Mobile Number
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={numberref}
                className="border-[1px]  h-8 w-[20vw] rounded-sm border-black"
                type="number"
                id="Mobile"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Password">
                Password
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={passwordref}
                className="border-[1px]  h-8 w-[20vw] rounded-sm border-black"
                type="password"
                id="Password"
              />
            </div>

            <div className="flex flex-col  ">
              <label htmlFor="ConformPass">
                Conform Password
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={ConformPassref}
                className="border-[1px]  h-8 w-[20vw] rounded-sm border-black"
                type="password"
                id="ConformPass"
              />{" "}
            </div>

            <div className="bg-[#feb843] w-[20vw] h-8 flex justify-center items-center rounded-sm mt-7 cursor-pointer">
              {" "}
              <button> Sign Up</button>
            </div>
          </form>
          <div>
            <h3 className="font-semibold text-black text-center my-3">
              Already a user?{" "}
              <Link className="text-blue-600 underline" to={"/login"}>
                Log In
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResistrationPage;
