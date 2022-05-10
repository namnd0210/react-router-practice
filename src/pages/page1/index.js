import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <h1>Page1</h1>

      <ul>
        <li>
          <Link to="/page1/detail1">Detail 1</Link>
        </li>

        <li>
          <Link to="/page1/detail2">Detail 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page1;
