import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const cities = [
  "lkdsfj",
  "woiej",
  "sklfjldkfj",
  "skjfhdjks",
  "idfuso",
  "lkdsfj",
  "woiej",
  "sklfjldkfj",
  "skjfhdjks",
  "idfuso",
  "lkdsfj",
  "woiej",
  "sklfjldkfj",
  "skjfhdjks",
  "idfuso",
  "lkdsfj",
  "woiej",
  "sklfjldkfj",
  "skjfhdjks",
  "idfuso",
];

export default function Home() {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex w-4/5 justify-center  px-2 py-1 rounded-sm bg-yellow-100 shadow-md ml-auto mr-auto">
        <input
          className="border-none outline-none w-full bg-transparent"
          type="text"
          placeholder="hello "
        />
      </div>
      <div className="">
        <div className=" bg-yellow-100 mt-4">Find by Cities !</div>

        <div className="grid grid-cols-2 ml-5 mt-4">
          {cities.map((city) => {
            return <div className="my-1 bg-red-100">{city}</div>;
          })}
        </div>

        <div>catogories</div>
      </div>
    </div>
  );
}
