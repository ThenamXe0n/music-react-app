import axios from "axios";
import React, { useRef } from "react";
import Notiflix from "notiflix";

const RegisterPage = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const numberRef = useRef();

  async function handleRegister(e) {
    e.preventDefault();
    if (confirmPassRef.current.value !== passwordRef.current.value) {
      Notiflix.Notify.failure("password and confirm password do not match");
      return;
    }
    Notiflix.Loading.circle();

    let registerationData = {
      name: nameRef.current.value,
      mobile: numberRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("registerationData : ", registerationData);

    try {
      const response = await axios.post(
        "http://localhost:8080/users",
        registerationData
      );
      console.log(response);
      Notiflix.Notify.success("Registration Successfull");
      Notiflix.Loading.remove();
    } catch (error) {
      alert(error.message);
      Notiflix.Loading.remove();
    }

    //clearing fields after registration
    nameRef.current.value = "";
    numberRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <section className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="h-1/2 w-1/2 flex flex-col gap-y-20 p-4 bg-slate-800 text-white border-2 rounded-md">
        <h1 className="text-center font-bold text-4xl capitalize">
          Register Form
        </h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-y-5 justify-center w-4/5 mx-auto "
        >
          <input
            ref={nameRef}
            type="text"
            className="p-2 border rounded-lg  text-black placeholder:text-2xl"
            placeholder="enter full Name"
          />
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
          <input
            ref={confirmPassRef}
            type="password"
            className="p-2 border rounded-lg  text-black placeholder:text-2xl"
            placeholder="confirm password"
          />
          <button className="p-2 bg-black text-white rounded-sm shadow-lg">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
