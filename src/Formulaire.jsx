import { useState } from "react";

function Formulaire() {
  
  const [nom, setNom] = useState("");

  const handleClick = () => {
    alert(`Bonjour, ${nom} !`);
  };

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
