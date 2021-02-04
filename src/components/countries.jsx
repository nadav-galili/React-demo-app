import React, { Component } from "react";
import axios from "axios";

class Countries extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      this.setState({ countries: response.data });
    });
  }

  state = {
    countries: [],
  };

  render() {
    const { countries } = this.state;

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }
}

export default Countries;
