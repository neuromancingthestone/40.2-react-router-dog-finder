import React from "react";
import { Link } from "react-router-dom";

import Doggo from "./Doggo";

function Home({dogs}) {
  return (
    <div className="Home">
      <h1>DOGGOS!!!</h1>
      {dogs.map(d => (
        <div key={d.name}>
          {console.log(`/${d.src.toLowerCase()}.jpg`)}
          <Link to={`/dogs/${d.name.toLowerCase()}`}>
            <img width="100px" src={`/${d.src}.jpg`} alt={d.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;