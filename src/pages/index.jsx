import React, { Component } from 'react';
import "../css/bootstrap.css";

import MusicGenre from '../components/index-components/MusicGenre';
import MusicTheme from '../components/index-components/MusicTheme';


class Index extends Component {
    componentDidMount() {
		window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <React.Fragment>
                <MusicGenre/>
                <MusicTheme/>
			</React.Fragment>
        );
    }
}

export default Index;