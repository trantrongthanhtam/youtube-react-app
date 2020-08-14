import React, { Component } from "react";
import "../css/bootstrap.css";

import ByGenre from '../components/musiclist-components/ByGenre';
import Preloader from "../components/general-components/Preloader";

class MusicListByGenre extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const listname = this.props.match.params.listname;
    return (
      <React.Fragment>
        <Preloader/>
        <ByGenre listname={listname} />
        
      </React.Fragment>
    );
  }
}

export default MusicListByGenre;
