import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import Doggo from "./Doggo";
import NotFound from "./NotFound";

function Routing({dogs}) {
  return (
    <Routes>    
      <Route path="/dogs" element={<Home dogs={dogs}/>} />
      <Route path="/" element={<Navigate to="/dogs"/>} />
      <Route path="/dogs/:dog" element={<Doggo dogs={dogs}/>} />
      <Route path="*" element={<NotFound />} />      
    </Routes>
  )
}

export default Routing;