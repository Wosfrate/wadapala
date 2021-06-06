import { useState } from "react";
import Footer from "./Footer";
import HamburgerMenu from "./HamburgerMenu";
import Header from "./Header";

function Layout({ children }) {
  const [showMenu, setshowMenu] = useState(false);

  var menu;

  if (showMenu) {
    menu = <HamburgerMenu setState={setshowMenu} />;
  }
  return (
    <div>
      {menu}
      <Header setState={setshowMenu} show={showMenu} />
      {/* <Header setMenuStatus={[showMenu, setshowMenu]} /> */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
