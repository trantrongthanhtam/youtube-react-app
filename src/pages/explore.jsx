import React, { Component } from "react";
import "../css/bootstrap.css";

import ExploreList from '../components/musiclist-components/ExploreList';
import Preloader from "../components/general-components/Preloader";

class Explore extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Preloader/>
        <ExploreList />
      </React.Fragment>
    );
  }
}

export default Explore;
