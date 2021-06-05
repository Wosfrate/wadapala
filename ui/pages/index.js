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

const cities = [
  "Anu'pura",
  "Kurunegala",
  "Kandy",
  "Galle",
  "Colombo",
  "lkdsfj",
  "woidsej",
  "skldsfjldkfj",
  "skjffwhdjks",
  "idwffuso",
  "lkdwqsfj",
  "wowfiej",
  "sklvhfjldkfj",
  "skj6ufhdjks",
  "idfuuso",
  "lkdhsfj",
  "woviej",
  "skflfjldkfj",
  "skeijfhdjks",
  "idfusiuo",
];

export default function Home() {
  return (
    <div className="flex flex-col mt-20 xsm:mt-24 xl:mt-28 mb-5">
      <div className="flex w-4/5 lg:max-w-screen-md lg:py-4 lg:px-3 justify-center items-center  px-2 py-2 rounded-sm bg-blue-50 shadow-md ml-auto mr-auto">
        <SearchIcon className="h-5 w-5 text-gray-600" />
        <input
          className="border-none outline-none w-full bg-transparent font-varela ml-2"
          type="text"
          placeholder="Search your need"
        />
      </div>

      <div className=" mt-8 xl:flex xl:flex-row-reverse xl:justify-center ">
        {/* 1st box */}
        <div className="">
          <div className="px-3 py-1 flex  items-center space-x-2 text-base font-varela mb-5">
            <ArchiveIcon className="h-5 w-5 text-myBlue" />
            <p>Category</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 border-yellow-700 border xl:my-0  my-4 gap-y-10  xl:gap-x-5 xxsm:grid-cols-2 justify-items-center text-sm xxsm:text-base px-4 font-medium font-varela  max-w-2xl mr-auto ml-auto ">
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Technician</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/car.png"
                width={60}
                height={30}
              />{" "}
              <p className="font-varela">Car Mechanic</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Bike Mechanic</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Carpenter</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-20  bg-blue-50 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 fsm:w-48">
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
        <div className="mt-8 xl:mt-0 mr-10">
          <div className=" px-3 py-1  flex  items-center space-x-2 text-base font-varela mb-5">
            <LocationMarkerIcon className="h-5 w-5 text-myBlue" />
            <p>Pick your location below</p>
          </div>

          <div className="xl:grid xl:grid-cols-3 gap-y-6  ">
            {cities.map((city) => {
              return (
                <div
                  key={city}
                  className="mx-4 bg-blue-50   px-6 py-2 rounded-sm shadow-md flex justify-between text-sm items-center font-varela hover:bg-blue-200 "
                >
                  {city}
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
