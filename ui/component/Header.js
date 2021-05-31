import style from "../styles/Header.module.css";
function Header() {
  return (
    <div className="flex border-gray-500 border justify-between px-3">
      <div className="text-2xl font-archivo">Wadapala</div>

      <div className="flex border-gray-500 border space-x-6">
        <div>Login</div>
        <div>Add Service</div>
      </div>
    </div>
  );
}

export default Header;
