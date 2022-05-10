import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { NoMatch } from "./pages/404";
import Router from "./router";

export default function Example() {
  return (
    <div>
      <h2>Pages</h2>

      <br />
      <Link to="/page1">Page1</Link>

      <br />
      <Link to="/page2">Page2</Link>

      <Router />
    </div>
  );
}
