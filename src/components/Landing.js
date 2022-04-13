import React, { Component } from "react";
import Intro from "./Intro";
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";

class Landing extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Cards />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default Landing;
