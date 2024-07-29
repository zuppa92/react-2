import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact to="/snacks" className="nav-link">
              Snacks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/drinks" className="nav-link">
              Drinks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/new" className="nav-link">
              Add Item
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;