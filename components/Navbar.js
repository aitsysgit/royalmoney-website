"use client"
// import Link from 'next/link';
import React, { useState } from "react";

export default function Navbar() {
  const [hide, setHide] = useState(false);

  const fun = () => {
    setHide(!hide);
  };

  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-row">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images\Royal Money (mobile pics)\Logo-white.png"
              style={{
                width: "9rem",
                
              }}

            />
          </a>
          <button
            id="menu-toggle"
            onClick={fun}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${hide ? "block" : "hidden"} w-full md:block md:w-auto h-[340px] md:h-auto`} id="navbar-default">
            <ul className={`font-medium flex items-center flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg  sm:bg-transparent md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
              <li>
              <a className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white" href="#hero">
              Home
            </a>
              </li>
              <li>
              <a className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white" href="#features">
              Features
            </a>
              </li>
              <li>
              <a className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white" href="#info">
              About
            </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white"
                >
                  Services
                </a>
              </li>
              <li>
              <a className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white" href="#sec">
              Screenshots
            </a>
              </li>
              <li>
              <a className="mr-5 hover:text-gray-900 cursor-pointer text-gray-900 md:text-white" href="#contact">
              contact us
            </a>
              </li>
              <li>
              <a
            href="#download"
            className="inline-flex items-center bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-gray-200 rounded-[30px] text-base mt-4 md:mt-0 text-gray-600"
          >
            Download
          </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
