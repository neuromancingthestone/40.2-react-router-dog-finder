import { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";

import Routing from './Routing';

function App() {

  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function loadDogs(){
      const response = await axios.get("http://localhost:5001/dogs")
      setDogs({
        data: response.data,
        isLoading: false
      })
    }
    loadDogs()
  }, [])

  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routing dogs={dogs.data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
