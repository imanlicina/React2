import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card";
import { useState } from "react";

function App() {
  // const odeljenje = [
  //   { ime: "Iman", godine: 19, skola: "Gimnazija", social: "NO" },
  //   { ime: "Tajba", godine: 16, skola: "Gimnazija", social: "NO" },
  //   { ime: "Medina", godine: 32, skola: "Gimnazija", social: "NO" },
  //   { ime: "Tarik", godine: 33, skola: "Gimnazija", social: "NO" },
  //   { ime: "Mehmed", godine: 22, skola: "Gimnazija", social: "NO" },
  //   { ime: "Imad", godine: 12, skola: "Gimnazija", social: "NO" },
  // // ];

  //  return (
  // <div className="container">
  //     {odeljenje.map((el) => {
  //       if (el.godine > 18) {
  //         return (
  //           <Card
  //             ime={el.ime}
  //             godin<e={el.godine}
  //             skola={el.skola}
  //             social={el.social}
  //           />
  //         );
  //       }
  //     })}
  //   </div>
  //  );

  const [mojBroj, setBroj] = useState(5);
  return (
    <div className="container">
      {mojBroj}
      <button
        onClick={() => {
          setBroj((prev) => prev - 5);
        }}
      >
        <h1>-5</h1>
      </button>
      <button
        onClick={() => {
          setBroj((prev) => prev - 1);
        }}
      >
        {" "}
        <h1>-1</h1>
      </button>
      <button
        onClick={() => {
          setBroj((prev) => prev + 1);
        }}
      >
        {" "}
        <h1>+1</h1>
      </button>
      <button
        onClick={() => {
          setBroj((prev) => prev + 5);
        }}
      >
        <h1>+5</h1>
      </button>
    </div>
  );
}

export default App;
