import React from "react";

import styles from "./favorite.module.css";
import classNames from 'classnames';
import { connect } from "react-redux";
import { fetchMusic } from "../../actions/music-actions";
import { addToFavorite, removeFromFavorite } from "../../actions/user-actions";
import MusicPlayer from "./MusicPlayer";

const cx = classNames.bind(styles);

class FavoriteList extends React.Component {
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

  handleAddToFavorite = (id) => {
    this.props.addToFavorite(id);
  };
  handleRemoveFromFavorite = (id) => {
    this.props.removeFromFavorite(id);
  };
  componentDidMount() {
    this.props.fetchMusic();
  }
  render() {
    const { musics, favorite } = this.props;
    console.log(musics, favorite);
    return (
      <React.Fragment>
        <figure
          className={cx("d-flex justify-content-center w-100 ml-auto mr-auto",styles.favoriteimg)}
          style={{ maxWidth: "1000px" }}
        >
          <img
            src={require(`../../images/favorite.png`)}
            width="100%"
            height="auto"
            alt="explore"
          ></img>
        </figure>
        <h2 className="text-center mt-2 mb-5">
          Bài hát yêu thích
        </h2>
        <div className="d-flex flex-column align-items-center">
          {musics.map((item) => {
            if (favorite.includes(item.id)) {
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
          {favorite === undefined ? <div className={cx("w-100 d-flex justify-content-center align-items-center",styles.notify)} ><h3>Bạn chưa có bài hát yêu thích nào</h3></div>:""}
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

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
