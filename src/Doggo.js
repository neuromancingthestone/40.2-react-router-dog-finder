import React from "react";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

function Doggo({dogs}) {
  const {dog} = useParams();

  const currDog = () => {
    if(dog) {
      return dogs.find(d => d.name.toLowerCase() === dog);      
    }
    return null;
  }

  if(!currDog()) return <Navigate to="/dogs" />

  return (
    <div>
      <img width="300px" src={`/${currDog().src}.jpg`} alt={currDog().name} />      
      <p>Name: {currDog().name}<br/>Age: {currDog().age}</p>
      <ul>
        {currDog().facts.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>      
    </div>
  )
}

export default Doggo;