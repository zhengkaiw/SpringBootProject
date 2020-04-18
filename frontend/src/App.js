import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/index">Welcome</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <DropdownButton id="dropdown-basic-button" title="Products">
                  <Dropdown.Item href="/products/sortByAuthor">Sort By Author</Dropdown.Item>
                  <Dropdown.Item href="/products/sortByTitle">Sort By Title</Dropdown.Item>
                  <Dropdown.Item href="/products/sortByPrice">Sort By Price</Dropdown.Item>
                  <Dropdown.Item href="/products/sortByBookRating">Sort By BookRating</Dropdown.Item>
                  <Dropdown.Item href="/products/sortByTopSellers">Sort By Top Sellers</Dropdown.Item>
                  <Dropdown.Item href="/products/sortByReleaseDate">Sort By Release Date</Dropdown.Item>
                </DropdownButton>
              </li>
              <li className="nav-item">
              <Link to={"/AboutUs"} className="nav-link">
                <button id="basic-button">AboutUs</button>
              </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Login"} className="nav-link">
                  <button id="basic-button">Login</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Register"} className="nav-link">
                  <button id="basic-button">Register</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <Switch>
          <Route path="/Products" component={Products} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
