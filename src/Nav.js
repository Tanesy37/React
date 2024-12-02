import page2 from "./page2";

const NavBar = () => {
  return (
    <div className="nav">
      <h1>Eazy</h1>
      <div style={{ display: "flex" }}>
        <a href="/">page1</a>
        <a href="/">page2</a>
      </div>
    </div>
  );
};

export default NavBar;
