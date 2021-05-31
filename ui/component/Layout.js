import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <div>footer</div>
    </div>
  );
}

export default Layout;
