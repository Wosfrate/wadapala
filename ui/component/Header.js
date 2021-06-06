import style from "../styles/Header.module.css";
import Image from "next/image";
import { white } from "tailwindcss/colors";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
function Header() {
  const [showMenu, setshowMenu] = useState(false);

  var menu;

  if (showMenu) {
    menu = <HamburgerMenu />;
  }

  return (
    <div className="flex items-center justify-between px-2 py-3 bg-myBlue shadow-md xxl:px-5 xxl:py-4 fixed top-0 w-full z-20">
      <div className="text-2xl font-pattaya xsm:text-3xl xl:text-5xl text-white">
        Wadapala
      </div>
      {menu}
      <div
        onClick={() => {
          if (showMenu) {
            setshowMenu(false);
          } else {
            setshowMenu(true);
          }
        }}
        className="flex justify-items-center space-x-3 font-varel"
      >
        <div className="flex md:hidden justify-center align-middle p-1 px-1 font-medium  bg-myBlue text-white   shadow-md rounded-sm text-sm xxsm:py-2 xxsm:px-3 xsm:p-2 xsm:text-base xxl:p-2 xxl:px-5">
          <Image src="/Images/svg/menu.svg" width={20} height={20} />
        </div>
        <div className="hidden md:flex justify-center align-middle p-1 px-1 font-medium  bg-myBlue text-white  border-white border  shadow-md rounded-sm text-sm xxsm:py-2 xxsm:px-3 xsm:p-2 xsm:text-base xxl:p-2 xxl:px-5">
          <Image src="/Images/svg/login.svg" width={20} height={20} />{" "}
          <p className="ml-2 ">Login </p>
        </div>
        <div className="hidden md:flex justify-center p-1 px-1 font-medium shadow-md bg-myBlue border-white border  text-white rounded-sm text-sm xxsm:py-2 xxsm:px-4  xsm:p-2 xsm:text-base xxl:p-2 xxl:px-6">
          <Image src="/Images/svg/work.svg" width={20} height={20} />{" "}
          <p className="ml-2 ">Add Service </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
