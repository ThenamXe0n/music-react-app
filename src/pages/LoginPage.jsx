import axios from "axios";
import Notiflix from "notiflix";
import React, { useRef, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const numberRef = useRef();
  const passwordref = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    let data = {
      mobile: numberRef.current.value,
      password: passwordref.current.value,
    };
    Notiflix.Loading.dots();

    const getUserDetails = await axios.get(
      `http://localhost:8080/users?mobile=${data.mobile}`
    );
    if (getUserDetails.data.length < 1) {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure("user not registered!");
      return;
    }
    let details = getUserDetails.data[0];

    if (details.password !== data.password) {
      Notiflix.Loading.remove();
      Notiflix.Notify.failure("invalid password!");
      return;
    }

    Notiflix.Notify.success("user logged In successfully !");
    sessionStorage.setItem("isLoggedIn", true);
    Notiflix.Loading.remove();
    navigate("/");
  }

  return (
    <section className="bg-[#000000] rounded-md shadow-lg shadow-gray-600 w-screen h-screen flex justify-center items-center">
      <div
        id="outter"
        className="w-[34vw] h-fit p-2 bg-white flex justify-center items-center"
      >
        <div
          id="inner"
          className="w-[32vw] h-full py-7 bg-white border-2 border-black "
        >
          <h2 className="text-4xl font-bold text-center">Login Form</h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center w-[100%] mt-7 gap-2"
          >
            <div className="flex flex-col">
              <label htmlFor="mobile">
                Mobile Number
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <input
                ref={numberRef}
                className="border-[1px] h-8 w-[20vw] rounded-sm border-black"
                type="text"
                id="mobile"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="Password">
                Password
                <span className="text-red-800 font-bold text-lg">*</span>
              </label>
              <div className="border-[1px]  flex items-center h-8 w-[20vw] rounded-sm border-black">
                {" "}
                <input
                  ref={passwordref}
                  className="w-11/12"
                  type={showPass ? "text" : "password"}
                  id="Password"
                />
                <BsEyeFill onClick={() => setShowPass(!showPass)} />
              </div>
            </div>

            <div className="bg-[#feb843] w-[20vw] h-8 flex justify-center items-center rounded-sm mt-5 cursor-pointer">
              {" "}
              <button> Login </button>
            </div>
          </form>
          <div>
            <h3 className="font-semibold text-black text-center my-3">
              Not Registered Yet?!{" "}
              <Link className="text-blue-600 underline" to={"/register"}>
                Register as User
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
