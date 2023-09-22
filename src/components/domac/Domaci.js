import React from "react";

function Domaci() {
  const [user, setUser] = useState({
    imePrezime: "",
    godine: "",
    zanimanje: "",
  });
  return (
    <div className="main">
      <input
        className="input"
        placeholder="Ime i prezime"
        value={user}
        onChange={(e) => setImePrezime({ ...user, imePrezime: e.target.value })}
      />
      <input
        className="input"
        placeholder="Godine"
        value={user}
        onChange={(e) => setUser({ ...user, godine: e.target.value })}
      />
      <input
        className="input"
        placeholder="Zanimanje"
        value={user}
        onChange={(e) => setUser({ ...user, zanimanje: e.target.value })}
      />

      <button className="dugme" onClick={() => console.log(user)}>
        Dodaj
      </button>
    </div>
  );
}
