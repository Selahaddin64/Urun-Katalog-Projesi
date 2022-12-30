import Axios from "axios";
import React, { useState } from "react";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { getError } from "../utils/error";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { redirect } = router.query;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const loginUser = async () => {
    await Axios.post(`${process.env.NEXT_PUBLIC_LOGIN_URL}`, {
      password: password,
      email: email,
    })
      .then(function (response) {
        if (response.data["token"] !== "") {
          const userAuth = response.data["token"];
          localStorage.setItem("tempUserAuth", userAuth);
          let rememberme = document.getElementById("rememberme");
          if (rememberme.checked) {
            localStorage.setItem("userAuth", userAuth);
          }
        } else {
          //show error message
          let ErrorMsg = document.getElementById("error-login");
          ErrorMsg.innerText = "Please check your Email and Password";
          ErrorMsg.style.display = "block";
        }
      })
      .catch((err) => {
        toast.error(getError(err));
      });
    router.push(redirect || "home");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <h1 className="text-2xl font-bold">Hello Again!</h1>
        <p>Welcome Back</p>
        <div className="input-icons">
          <i className="iconname">
            <MailIcon />
          </i>
          <input
            placeholder="Email Address"
            className="input-common m-3 mt-12 rounded-full p-2 text-black focus:bg-gray-300"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            {...register("emaillogin", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            id="emaillogin"
            autoFocus
          ></input>
        </div>
        {errors.emaillogin && (
          <div className="text-red-500">{errors.emaillogin.message}</div>
        )}
        <div className="input-icons">
          <i className="icon">
            <LockClosedIcon />
          </i>
          <input
            placeholder="Password"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            {...register("passwordlogin", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            id="passwordlogin"
          ></input>
        </div>
        {errors.passwordlogin && (
          <div className="text-red-500 ">{errors.passwordlogin.message}</div>
        )}
        <hr className="hr" />
        <div className="mt-2">
          <div className="float-left ml-6 ">
            <label className="block font-bold text-gray-700">Remember Me</label>
          </div>
          <div className="float-left ml-2 mt-1">
            <input
              className="text-gray-400"
              type="checkbox"
              id="rememberme"
              {...register("rememberme", {
                required: "Please enter tick the checkbox",
              })}
            />
          </div>
          {errors.rememberme && (
            <div className="text-red-500 ">{errors.rememberme.message}</div>
          )}
        </div>
        <div>
          <button className="input-common m-3 m-3 h-10 w-52 rounded-full bg-blue-600 p-2 text-center text-white text-white hover:bg-blue-700">
            login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
