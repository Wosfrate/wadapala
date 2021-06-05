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
      <div className="flex w-4/5 lg:max-w-screen-md lg:py-4 lg:px-3 justify-center items-center  px-2 py-2 rounded-sm bg-yellow-100 shadow-md ml-auto mr-auto">
        <SearchIcon className="h-5 w-5 text-gray-600" />
        <input
          className="border-none outline-none w-full bg-transparent font-varela ml-2"
          type="text"
          placeholder="Search your need"
        />
      </div>

      <div className=" mt-8 ">
        <div>
          <div className="px-3 py-1 flex  items-center space-x-2 text-base font-varela">
            <ArchiveIcon className="h-5 w-5 text-yellow-400" />
            <p>Category</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3  my-4 gap-y-5 xxsm:grid-cols-2 justify-items-center text-sm xxsm:text-base px-4 font-medium font-varela ">
            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 max-w-xs">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Technician</p>
            </div>
            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-1 ">
              <Image
                src="/Images/categoryImages/car.png"
                width={60}
                height={30}
              />{" "}
              <p className="font-varela">Car Mechanic</p>
            </div>
            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 ">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Bike Mechanic</p>
            </div>
            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 ">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Plumber</p>
            </div>
            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 ">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Electrician</p>
            </div>

            <div className="h-20  bg-yellow-100 flex flex-col items-center justify-center  w-4/5 shadow-md rounded-sm space-y-2 ">
              <Image
                src="/Images/categoryImages/tech.png"
                width={30}
                height={30}
              />{" "}
              <p className="">Carpenter</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className=" px-3 py-1 flex  items-center space-x-2 text-base font-varela">
            <LocationMarkerIcon className="h-5 w-5 text-yellow-400" />
            <p>Pick your location below</p>
          </div>

          <div className="">
            {cities.map((city) => {
              return (
                <div
                  key={city}
                  className="mx-4 my-2 bg-yellow-50 px-6 py-2 rounded-sm shadow-md flex justify-between text-sm items-center font-varela hover:bg-yellow-200 "
                >
                  {city}
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <ChevronRightIcon className="h-5 w-5 text-gray-600" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
