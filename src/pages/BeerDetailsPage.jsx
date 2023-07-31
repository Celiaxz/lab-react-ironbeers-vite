import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    async function fetchBeerDetails() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        console.log("respinse details :", response);
        setBeer(response.data);
      } catch (error) {
        console.log("error ocurred while fetching beer details:", error);
      }
    }
    fetchBeerDetails();
  }, [beerId]);

  return (
    <div>
      <h1>Beer Details</h1>
      <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetailsPage;
