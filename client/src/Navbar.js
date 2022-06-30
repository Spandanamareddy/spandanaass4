import './App.css';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      App
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">
          Profile
        </a>
        <a className="nav-link" href="#">
          Login
        </a>
        <a className="nav-link" href="#">
          Register
        </a>
      </div>
    </div>
  </div>
</nav>


    </div>
  );
}

export default Navbar;