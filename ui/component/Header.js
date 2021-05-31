import style from "../styles/Header.module.css";
function Header() {
  return (
    <div className="flex  align-middle justify-between px-3 py-3  bg-white shadow-md">
      <div className="text-3xl font-pattaya ">Wadapala</div>

      <div className="flex justify-items-center space-x-5">
        <div className="flex p-1 px-3 border-gray-500 border bg-yellow-600 bg-primary ">
          Login
        </div>
        <div className="p-1 px-3 border-gray-500 border">Add Service</div>
      </div>
    </div>
  );
}

export default Header;
