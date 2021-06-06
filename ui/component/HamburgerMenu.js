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
        <Image
          src="/Images/svg/cancel.svg"
          width={20}
          height={20}
          onClick={() => {
            props.setState(false);
          }}
        />
      </div>
    </div>
  );
}

export default HamburgerMenu;
