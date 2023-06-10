import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavPress = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm font-bold">
      <div>
        <a href="https://tesla.com">
          <img
            className="h-3"
            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
            alt="Tesla Logo"
          />
        </a>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center  hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/models">Model S</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/model3">Model 3</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/modelx">Model X</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/modely">Model Y</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/solarroof">Solar Roof</a>
          </li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">
            <a href="https://tesla.com/solarpannels">Solar Pannels</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center  hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Account</li>
          <li
            onClick={handleNavPress}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleNavPress}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>
      <div
        className={
          nav
            ? "bg-white absolute top-0 right-0 w-80 h-full z-10"
            : "fixed right-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNavPress}
            className="rounded p-1 hover:bg-black/5 hover:cursor-pointer"
            size={28}
          />
        </div>
        <ul className="pt-8 px-6">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model S</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model 3</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model X</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model Y</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Solar Roof
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Solar Pannels
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Existing Inventory
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Used Inventory
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Trade-in</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Test Drive
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Insurance
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Powerwall
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
