import style from "../styles/Header.module.css";
function Header() {
  return (
    <div className="flex  align-middle justify-between px-2 py-3   bg-white shadow-md ">
      <div className="text-2xl font-pattaya ">Wadapala</div>

      <div className="flex justify-items-center space-x-3 font-varel">
        <div className="flex p-1 px-1 font-medium  bg-yellow-400 bg-primary shadow-md rounded-sm text-sm  ">
          Login
        </div>
        <div className="p-1 px-1 font-medium shadow-md bg-yellow-400 bg-primary rounded-sm text-sm sm:bg-red-400">
          Add Service
        </div>
      </div>
    </div>
  );
}

export default Header;
