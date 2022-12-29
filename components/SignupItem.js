import Axios from "axios";
import React, { useState, useEffect } from "react";
import {
  UserIcon,
  DeviceMobileIcon,
  MailIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";
import { getError } from "../utils/error";
import toast from "react-hot-toast";

function Signup() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (user) {
      router.push(redirect || "home");
    }
  }, [router, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const addSignUpToDB = async () => {
    const data = await Axios.post(`${process.env.NEXT_PUBLIC_REGISTER_URL}`, {
      name: name,
      password: password,
      email: email,
    }).catch((err) => {
      toast.error(getError(err));
    });
    const userAuth = data["token"];
    localStorage.setItem("userAuth", userAuth);
    setUser(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addSignUpToDB)}>
        <h1 className="text-2xl font-bold">Hello!</h1>
        <p>Sign Up to Get Started</p>
        <div className="input-icons">
          <i className="iconname">
            <UserIcon />
          </i>
          <input
            placeholder="FirstName"
            className="input-field input-common m-3 mt-12 rounded-full p-2 text-black focus:bg-gray-300"
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            id="firstName"
            autoFocus
            {...register("firstName", {
              required: "Please enter First name",
              maxLength: 20,
            })}
          ></input>
          {errors.firstName && (
            <p role="alert" className="text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="input-icons">
          <i className="icon">
            <UserIcon />
          </i>
          <input
            placeholder="Lastname"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            onChange={(event) => {
              setSurname(event.target.value);
            }}
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "Please enter Last name",
              pattern: /^[A-Za-z]+$/i,
            })}
          ></input>
          {errors.lastName && (
            <p className="text-red-500" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="input-icons">
          <i className="icon">
            <DeviceMobileIcon />
          </i>
          <InputMask
            placeholder="Phone Number"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            mask="+0(999)-999-99-99"
            value={tel}
            id="PhoneNumber"
            onChange={(event) => {
              setTel(event.target.value);
            }}
          />
        </div>
        <div className="input-icons">
          <i className="icon">
            <MailIcon />
          </i>
          <input
            placeholder="Email Address"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            id="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
          />
        </div>
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <div className="input-icons">
          <i className="icon">
            <LockClosedIcon />
          </i>
          <input
            id="password"
            placeholder="Password"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
          />
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>

        <div className="input-icons">
          <i className="icon">
            <LockClosedIcon />
          </i>
          <input
            id="confirmPassword"
            placeholder="Password Again"
            className="input-common m-3 rounded-full p-2 text-black focus:bg-gray-300"
            type="password"
            {...register("confirmPassword", {
              required: "Please enter confirm password",
              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "confirm password is more than 5 chars",
              },
            })}
          ></input>
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>

        <div>
          <button className="input-common m-3 h-10 w-52 rounded-full bg-blue-600 p-2 text-center text-white hover:bg-blue-700">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
