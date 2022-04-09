import "./App.css";

const links = ["Services", "Projects", "About"];

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Logo />
        <div className="link-div">
          {links.map((e) => {
            return <Links link={e} />;
          })}
        </div>
        <Btn />
      </nav>
    </div>
  );
}

export default App;

// Logo component
function Logo() {
  return <h1 className="logo">LOGOBAKERY</h1>;
}
// Links component
function Links(props) {
  return <p className="nav-link">{props.link}</p>;
}

// button component

function Btn() {
  return <button className="btn">Contact</button>;
}
