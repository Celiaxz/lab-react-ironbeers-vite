import axios from "axios";
import { useState } from "react";
function AddBeerPage() {
  const [form, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        form
      );
      console.log("New Beer Response:", response.data);
      // Handle success or redirect to a success page
    } catch (error) {
      console.error("Error creating new beer:", error);
      // Handle error or show error message to the user
    }
  };

  return (
    <div>
      <h1>Add Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />

        <label>First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={form.first_brewed}
          onChange={handleChange}
        />

        <label>Brewer's Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          value={form.brewers_tips}
          onChange={handleChange}
        />

        <label>Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_level"
          value={form.attenuation_level}
          onChange={handleChange}
        />

        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          value={form.contributed_by}
          onChange={handleChange}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
