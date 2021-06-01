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
    <div className="flex flex-col mt-6">
      <div className="flex w-4/5 justify-center items-center  px-2 py-2 rounded-sm bg-yellow-200 shadow-md ml-auto mr-auto">
        <SearchIcon className="h-5 w-5 text-gray-600" />
        <input
          className="border-none outline-none w-full bg-transparent font-varela ml-2"
          type="text"
          placeholder="Search your need"
        />
      </div>

      <div className=" mt-6 ">
        <div className="">
          <div className=" px-3 py-1 flex  items-center space-x-2 text-base font-varela">
            <LocationMarkerIcon className="h-5 w-5 text-yellow-400" />
            <p>Pick your location below</p>
          </div>

          <div className="">
            {cities.map((city) => {
              return (
                <div
                  key={city}
                  className="my-2 bg-yellow-50 px-6 py-2 rounded-sm shadow-md flex justify-between text-sm items-center font-varela hover:bg-yellow-200"
                >
                  {city}
                  {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                  <ChevronRightIcon className="h-5 w-5 text-gray-600" />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="px-3 py-1 flex  items-center space-x-2 text-base font-varela">
            <ArchiveIcon className="h-5 w-5 text-yellow-400" />
            <p>Category</p>
          </div>

          <div className="grid grid-cols-2  my-4 gap-y-5 xxsm:grid-cols-3 justify-items-center">
            <div className="h-20 bg-yellow-100 flex items-center justify-center  w-4/5 shadow-md rounded-sm">
              <Image
                src="/Images/categoryImages/tech.png"
                width={100}
                height={100}
              />{" "}
              Technision
            </div>
            <div className="h-20 bg-yellow-100 flex items-center justify-center  w-4/5 shadow-md">
              {" "}
              Technision
            </div>
            <div className="h-20 bg-yellow-100 flex items-center justify-center  w-4/5 shadow-md rounded-sm">
              {" "}
              Technision
            </div>
            <div className="h-20 bg-yellow-100 flex items-center justify-center  w-4/5 shadow-md">
              {" "}
              Technision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
