import axios from "axios";
import React, { useEffect, useRef } from "react";
import Notiflix from "notiflix";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();
  const passwordRef = useRef();
  const numberRef = useRef();

  async function handleLogin(e) {
    e.preventDefault();
    let data = {
      mobile: numberRef.current.value,
      password: passwordRef.current.value,
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

  useEffect(() => {
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      navigate("/");
    }
  }, []);

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="h-1/2 w-1/2 flex flex-col gap-y-20 p-4 bg-slate-800 text-white border-2 rounded-md">
        <h1 className="text-center font-bold text-4xl capitalize">
          Login Form
        </h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-y-5 justify-center w-4/5 mx-auto "
        >
          <input
            ref={numberRef}
            type="text"
            className="p-2 border rounded-lg  text-black placeholder:text-2xl"
            placeholder="enter Mobile number"
          />
          <input
            ref={passwordRef}
            type="password"
            className="p-2 border rounded-lg  text-black placeholder:text-2xl"
            placeholder="enter password"
          />

          <button className="p-2 bg-black text-white rounded-sm shadow-lg">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
