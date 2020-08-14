import React, { Component } from "react";
import "../css/bootstrap.css";

import FavoriteList from '../components/musiclist-components/FavoriteList';
import Preloader from "../components/general-components/Preloader";

class Favorite extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Preloader/>
        <FavoriteList />
      </React.Fragment>
    );
  }
}

export default Favorite;
