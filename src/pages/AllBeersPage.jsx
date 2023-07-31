import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function fetchAllBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log("this my resopone: ", response.data);
        setBeers(response.data);
      } catch (error) {
        console.log("error while fetching data: ", error);
      }
    }
    fetchAllBeers();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
      );
      console.log("response:", response.data);
      setBeers(response.data);
    } catch (error) {
      console.log("error while searching beers: ", error);
    }
  };

  return (
    <>
      <div>
        <h1>All Beers </h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search beers..."
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {beers.map((beer) => (
            <li key={beer._id}>
              <Link to={`./${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  style={{ height: "200px" }}
                />
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default AllBeersPage;
