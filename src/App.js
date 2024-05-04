import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
function Navbar() {
  return (
    <div className="nav">
      <div className="container navbar d-flex align-items-center justify-content-between">
        <Logo />
        <Navbarlinks />
      </div>
    </div>
  );
}
function Logo() {
  return <h1>Gravity</h1>;
}
function Navbarlinks() {
  return (
    <ul className="navbar-links d-flex list-unstyled align-items-center gap-5 pt-2">
      <li>
        <a href="" className="text-decoration-none navbar-link pt-2">
          Features
        </a>
      </li>
      <li>
        <a href="" className="text-decoration-none navbar-link pt-2">
          Pricing
        </a>
      </li>
      <li>
        <a href="" className="text-decoration-none navbar-link pt-2">
          Why Gravity
        </a>
      </li>
      <li>
        <a href="" className="text-decoration-none navbar-link pt-2">
          Sign In
        </a>
      </li>
    </ul>
  );
}
function Header() {
  return (
    <div className="container">
      <div className="row ">
        <HeaderText />
        <HeaderImg />
      </div>
    </div>
  );
}
function HeaderText() {
  return (
    <div className="col-5 d-flex align-items-center">
      <div className="header-text">
        <h1 className="heading">Simple time tracking. Powerful reporting.</h1>
        <p>Turn your team on to productivity with Gravity the time tracker.</p>
        <button>Request early access</button>
      </div>
    </div>
  );
}
function HeaderImg() {
  return(
    <div className="col-7">
      <img className="" src="img/rasm.png" alt="" />
    </div>
  )
}
function Footer() {
  return(
    <div className="w-100 d-flex justify-content-center ">
      <p>Created By Whitehacker React Developer</p>


    </div>
  )
  
}
export default App;
