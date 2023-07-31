import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        console.log("Random Beer:", response.data);
        setRandomBeer(response.data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    }
    fetchRandomBeer();
  }, []);

  return (
    <div>
      <h1>Random Beer</h1>
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        style={{ height: "500px" }}
      />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeersPage;
