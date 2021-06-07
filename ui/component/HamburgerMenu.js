import Image from "next/image";
function HamburgerMenu(props) {
  return (
    <div className=" h-full w-full fixed z-30 top-0 right-0 shadow-lg flex ">
      <div
        onClick={() => {
          props.setState(false);
        }}
        className="bg-black opacity-50 w-5/12 h-full"
      ></div>
      <div className="p-2 w-7/12 bg-myBlue">
        {/* <Image
          className=""
          src="/Images/svg/cancel.svg"
          width={20}
          height={20}
          onClick={() => {
            props.setState(false);
          }}
        /> */}
        {/* border-red-600 border */}
        <div className="grid grid-cols-1 gap-y-8  font-varela text-white text-base  mt-3 ml-2">
          <div className="border-gray-50 border-l-4 pl-3 flex">
            <Image src="/Images/svg/login.svg" width={20} height={20} />{" "}
            <p className="ml-2 ">Login </p>
          </div>
          <div className="border-gray-50 border-l-4 pl-3 flex">
            <Image src="/Images/svg/work.svg" width={20} height={20} />{" "}
            <p className="ml-2 ">Register </p>
          </div>

          <div className="border-gray-50 border-l-4 pl-3">FAQ</div>
          <div className="border-gray-50 border-l-4 pl-3">Stay Safe</div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
