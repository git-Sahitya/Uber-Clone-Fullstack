import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignuo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    });

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-20 "
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg w-full font-medium mb-2">What's your name</h3>
          <div className="flex gap-3 mb-6  ">
            <input
              className="bg-[#eeeeee]  rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base "
              required
              type="text"
              placeholder=" First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="bg-[#eeeeee]  rounded  px-4 py-2 border w-1/2 text-lg placeholder:text-base "
              required
              type="text"
              placeholder=" Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded  px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded  px-4 py-2 border w-full text-base placeholder:text-base"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded  px-4 py-2  w-full text-base placeholder:text-base">
           Create account
          </button>
        </form>
        <p className="text-center mb-0.5 ">
          Already have a account?
          <Link to="/captain-login" className="text-blue-600">
            Login here...
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight ">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline"> Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignuo;
