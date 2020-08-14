import React, { Component } from "react";
import "../css/bootstrap.css";

import ByTheme from '../components/musiclist-components/ByTheme';
import Preloader from "../components/general-components/Preloader";

class MusicListByTheme extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const listname = this.props.match.params.listname;
    return (
      <React.Fragment>
        <Preloader/>
        <ByTheme listname={listname} />
        
      </React.Fragment>
    );
  }
}

export default MusicListByTheme;
