import Head from "next/head";

import styles from "../styles/Home.module.css";
import { ArrowForwardIcon } from "@material-ui/icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";

// import your icons
import { faMoneyBill } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BeakerIcon,
  ChevronRightIcon,
  SearchIcon,
  ArrowSmDownIcon,
  LocationMarkerIcon,
  ArchiveIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import axios from "../service/axios";

// const cities = [
//   "Anuradhapura",
//   "Kurunegala",
//   "Kandy",
//   "Galle",
//   "Colombo",
//   "Mathara",

//   "Anuradhapura",
//   "Kurunegala",
//   "Kandy",
//   "Galle",
//   "Colombo",
//   "Mathara",

//   "Anuradhapura",
//   "Kurunegala",
//   "Kandy",
//   "Galle",
//   "Colombo",
//   "Mathara",
//   "Anuradhapura",
//   "Kurunegala",
//   "Kandy",
//   "Galle",
// ];

export default function Home() {
  const [cities, setcities] = useState([]);

  useEffect(() => {
    axios.get("/").then((res) => {
      setcities(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col pt-24 xsm:pt-24 xl:pt-36 pb-5">
      <div className="flex w-4/5 lg:max-w-screen-md lg:py-4 lg:px-3 justify-center items-center  px-2 py-2 rounded-md  shadow-md ml-auto mr-auto bg-myBlue group">
        <SearchIcon className="h-5 w-5 text-white " />
        <input
          className="border-none outline-none w-full bg-transparent placeholder-white font-varela ml-2  text-white"
          type="text"
          placeholder="Search your need"
        />
      </div>

      <div className=" mt-10 xl:flex xl:flex-row-reverse xl:justify-center ">
        {/* 1st box */}
        <div className="">
          <div className="px-3 py-1 flex  items-center space-x-2 text-base font-varela mb-5">
            <ArchiveIcon className="h-5 w-5 text-myBlue" />
            <p>Category</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3  xl:my-0  my-4 gap-y-10  xl:gap-x-5 xxsm:grid-cols-2 justify-items-center text-sm xxsm:text-base px-4 font-medium font-varela  max-w-2xl mr-auto ml-auto ">
            <div className="h-28 bg-white   hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48 ">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Technician</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/car.png"
                width={60}
                height={30}
              />{" "}
              <p className="font-varela">Car Mechanic</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Bike Mechanic</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Carpenter</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Carpenter</p>
            </div>

            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-28 bg-white  hover:bg-myBlue hover:text-white p-2  flex flex-col items-center justify-center  w-4/5 shadow-md rounded-md space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Carpenter</p>
            </div>
          </div>
        </div>

        {/* 2nd box */}
        <div className="mt-8 xl:mt-0 mr-28 w-full xl:w-auto">
          <div className=" px-3 py-1  flex  items-center space-x-2 text-base font-varela mb-5">
            <LocationMarkerIcon className="h-5 w-5 text-myBlue" />
            <p>Pick your location below</p>
          </div>

          <div className="grid grid-cols-1 gap-y-3 xl:grid xl:grid-cols-3 xl:gap-y-8 ">
            {cities.map((city) => {
              return (
                <div
                  key={city.id}
                  className="mx-4 px-6 py-2 rounded-md shadow-md flex justify-between text-sm items-center font-varela hover:bg-myBlue hover:text-white group bg-white cursor-pointer"
                >
                  {city.city}
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
