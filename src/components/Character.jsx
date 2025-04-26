import { useState } from "react";
import "./Character.css";
const Character = ({ character }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <img
        className= { flipped ? "flipped" : "image" }
        src= { character.image}
        alt= { character.name }
        onClick={() => setFlipped(!flipped)}
      />
    </div>
  )
  
}
export default Character
