import React from "react";
import { useParams } from "react-router-dom";

import Doggo from "./Doggo";

function GetDog({dogs}) {

  const {dog} = useParams();

  const currDog = () => {
    if(dog) {
      return dogs.find(d => d.name.toLowerCase() === dog);      
    }
    return null;
  }

  return (
    <div>
      {<Doggo dog={currDog()} />}
    </div>
  )
}

export default GetDog;