import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import psyduck from "./assets/psyduck.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web5 from "./assets/web5.png";
import web6 from "./assets/web6.png";
import web1 from "./assets/RealEstateWeb.jpeg";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-700">
        <section className="min-h-screen">
          {/* Navbar Starts */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-light2">
              Jifan's Portfolio
            </h1>
            <ul className="flex items-center">
              <li className="dark:text-white">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-primary text-white font-medium px-4 py-2 rounded-md ml-8 dark:bg-light2 dark:text-black"
                  href="https://docs.google.com/document/d/1cq7_U8u7tMbyfKVkGQsz0biUNmFUAhIEvZMXIBhXAUY/edit?usp=sharing"
                  target={"_blank"}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* Navbar End */}
          {/* Hero Section Start */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-primary font-medium md:text-6xl dark:text-light2">
              Jifan Izza
            </h2>
            <h3 className="text-2xl py-2 font-medium md:text-3xl dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 font-medium md:text-xl max-w-xl mx-auto dark:text-white">
              Inspiring designs for a connected world
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
            <AiFillTwitterCircle className="cursor-pointer hover:text-gray-500" />
            <a href="https://www.instagram.com/jifanizza/" target={"_blank"}>
              <AiFillInstagram className="cursor-pointer hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/jifan-izza-bb531920a/"
              target={"_blank"}
            >
              <AiFillLinkedin className="cursor-pointer hover:text-gray-500" />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-secondary rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 dark:from-light2">
            <img src={psyduck} />
          </div>
        </section>
        {/* Hero Section End */}
        <section>
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-light2">
              Services
            </h3>
          </div>
          {/* Cards */}
          <div className="lg:flex gap-10 lg:justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl flex-1 my-10 dark:bg-light">
              <img src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-bold pt-8 pb-2 dark:text-primary">
                Creative Designs
              </h3>
              <p className="py-2">
                Our teams crafts beautiful, functional, and user-friendly
                websites that will help you make a lasting impact online
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-light">
              <img src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-bold pt-8 pb-2 dark:text-primary">
                Realise Your Dream Project
              </h3>
              <p className="py-2">
                Building a website is more than just code and design. From start
                to finish, we will work with you to build a website that truly
                sets you apart and helps you succeed online.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-light">
              <img
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-bold pt-8 pb-2 dark:text-primary">
                Consulting
              </h3>
              <p className="py-2">
                Let us help you reach your full potential by bringing fresh
                perspective and various insights
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-medium py-1 dark:text-light2">
              Portofolio
            </h3>
            <p className="text-md py-2 font-medium leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              sit quo aperiam enim voluptate!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web1}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web2}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web3}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web4}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web5}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <img
                src={web6}
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
