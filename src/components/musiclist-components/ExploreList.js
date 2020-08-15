import React from "react";

// import styles from "./index.module.css";

import { connect } from "react-redux";
import { fetchMusic } from "../../actions/music-actions";
import { addToFavorite, removeFromFavorite } from "../../actions/user-actions";
import MusicPlayer from "./MusicPlayer";
import {Pagination} from 'react-bootstrap';

// const cx = classNames.bind(styles);

class ExploreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: "",
      activepage:1,
    };
    this.handlenowPlaying = this.handlenowPlaying.bind(this);
  }
  handlenowPlaying(id) {
    this.setState({ nowPlaying: id });
  }

  handleAddToFavorite = (id) => {
    this.props.addToFavorite(id);
  };
  handleRemoveFromFavorite = (id) => {
    this.props.removeFromFavorite(id);
  };
  onChangePage(number){
    this.setState({activepage: number})
  }
  componentDidMount() {
    this.props.fetchMusic();
  }
  render() {
    const { musics, favorite } = this.props;
    let items = [];
    for (let number = 1; number <= (Math.ceil(musics.length/5)); number++) {
      items.push(
        <Pagination.Item key={number} active={number === this.state.activepage} onClick={()=>this.onChangePage(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <React.Fragment>
        <figure
          className="d-flex justify-content-center mt-3 w-100 ml-auto mr-auto"
          style={{ maxWidth: "1000px" }}
        >
          <img
            src={require(`../../images/explore.jpg`)}
            width="100%"
            height="auto"
            alt="explore"
          ></img>
        </figure>
        <h2 className="text-center mt-2 mb-5">
          Khám phá danh sách các bài hát
        </h2>
        <Pagination className="d-flex justify-content-center">{items}</Pagination>
        <div className="d-flex flex-column align-items-center">
          {musics.map((item,index) => {
            if (index>=((this.state.activepage-1)*5) && index < ((this.state.activepage-1)*5+5)) {
            return (
              <MusicPlayer
                key={item.id}
                {...item}
                favorite={favorite.includes(item.id)}
                addToFavorite={this.handleAddToFavorite}
                removeFromFavorite={this.handleRemoveFromFavorite}
                inFocus={item.id === this.state.nowPlaying}
                nowPlaying={this.handlenowPlaying}
              />
            );
            } else return null;
          })}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ musicList, favorite }) {
  return {
    musics: musicList.items,
    favorite: favorite.favorite,
  };
}

const mapDispatchToProps = {
  fetchMusic,
  addToFavorite,
  removeFromFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreList);
