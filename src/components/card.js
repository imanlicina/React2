import React from "react";
import "./Sta.css";
function Card(arg) {
  return (
    <div className="card">
      <h1>{arg.ime}</h1>
      <p>{arg.godine}</p>
      <p>{arg.skola}</p>
      <p>{arg.social}</p>
    </div>
  );
}
export default Card;
