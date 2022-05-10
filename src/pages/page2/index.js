import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>

      <ul>
        <li>
          <Link to="/page2/100">Detail 1</Link>
        </li>

        <li>
          <Link to="/page2/101">Detail 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page2;
