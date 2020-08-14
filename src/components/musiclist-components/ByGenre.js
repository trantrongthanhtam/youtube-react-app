import React from "react";

// import styles from "./index.module.css";

import { connect } from "react-redux";
import { fetchMusic } from "../../actions/music-actions";
import {addToFavorite, removeFromFavorite} from '../../actions/user-actions';
import MusicPlayer from "./MusicPlayer";

// const cx = classNames.bind(styles);

class ByGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: "",
    };
    this.handlenowPlaying = this.handlenowPlaying.bind(this);
  }
  handlenowPlaying(id) {
    this.setState({ nowPlaying: id });
  }

  handleAddToFavorite= (id) => {
    this.props.addToFavorite(id);
  }
  handleRemoveFromFavorite = (id) => {
    this.props.removeFromFavorite(id);
  }
  componentDidMount() {
    this.props.fetchMusic();
  }
  render() {
    const { musics, listname, favorite } = this.props;
    return (
      <React.Fragment>
        <figure
          className="d-flex justify-content-center mt-5 w-100 ml-auto mr-auto"
          style={{ maxWidth: "1000px" }}
        >
          <img
            src={require(`../../images/${listname}.jpg`)}
            width="100%"
            height="auto"
            alt={listname}
          ></img>
        </figure>
        {listname === "nhac-pop-ballad" ? (
          <h2 className="text-center mt-2 mb-5">Nhạc Pop/Ballad</h2>
        ) : listname === "nhac-rock" ? (
          <h2 className="text-center mt-2 mb-5">Nhạc Rock</h2>
        ) : listname === "nhac-co-dien" ? (
          <h2 className="text-center mt-2 mb-5">Nhạc Cổ Điển</h2>
        ) : listname === "nhac-bolero" ? (
          <h2 className="text-center mt-2 mb-5">Nhạc Bolero</h2>
        ) : (
          <h2 className="text-center mt-2 mb-5">Nhạc Nhẹ Các Nước</h2>
        )}
        <div className="d-flex flex-column align-items-center">
          {musics.map((item) => {
            if (item.genre === listname) {
              return (
                <MusicPlayer
                  key={item.id}
                  {...item} favorite={favorite.includes(item.id)}
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
    favorite: favorite.favorite
  };
}

const mapDispatchToProps = {
  fetchMusic,
  addToFavorite,
  removeFromFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ByGenre);
