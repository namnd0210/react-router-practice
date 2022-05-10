import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id } = useParams();

  return (
    <div>
      <h3>Detail id: {id}</h3>
    </div>
  );
};

export default Detail;
