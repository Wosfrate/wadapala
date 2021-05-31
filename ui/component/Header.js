import style from "../styles/Header.module.css";
function Header() {
  return (
    <div className="flex items-center justify-between px-2 py-3 bg-white shadow-md xxl:px-5 xxl:py-4">
      <div className="text-2xl font-pattaya xsm:text-3xl xl:text-5xl">
        Wadapala
      </div>

      <div className="flex justify-items-center space-x-3 font-varel">
        <div className="flex justify-center align-middle p-1 px-1 font-medium  bg-yellow-400 bg-primary shadow-md rounded-sm text-sm xsm:px-3 xsm:p-2 xsm:text-base xxl:p-2 xxl:px-5">
          Login
        </div>
        <div className="p-1 px-1 font-medium shadow-md bg-yellow-400 bg-primary rounded-sm text-sm xsm:px-3 xsm:p-2 xsm:text-base xxl:p-2 xxl:px-6">
          Add Service
        </div>
      </div>
    </div>
  );
}

export default Header;
