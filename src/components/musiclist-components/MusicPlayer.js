import React from "react";
import ReactPlayer from "react-player";
import Form from "react-bootstrap/Form";
import styles from "./musicplayer.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);
class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      playing: false,
      height: "0px",
      show: false,
      played: 0,
      volume: 0.8,
      activate(loved) {
        return loved === true ? styles.loved : "";
      },
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.player = React.createRef();
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ windowWidth: window.innerWidth });
    if (this.state.show) {
      if (window.innerWidth > 1000) {
        this.setState({
          height: "562.5px",
        });
      } else {
        this.setState({
          height: `${(this.state.windowWidth * 9) / 16}px`,
        });
      }
    }
  }

  onToggleLove() {
    this.setState({ loved: !this.state.loved });
  }

  onPlay(e) {
    e.preventDefault();
    this.setState({
      playing: true,
    });
  }
  onStop(e) {
    e.preventDefault();
    this.setState({
      playing: false,
    });
  }
  onView(e) {
    e.preventDefault();
    this.setState({ show: true });
    if (window.innerWidth > 1000) {
      this.setState({
        height: "562.5px",
      });
    } else {
      this.setState({
        height: `${(this.state.windowWidth * 9) / 16}px`,
      });
    }
  }
  onHide(e) {
    e.preventDefault();
    this.setState({ show: false, height: "0px" });
  }
  onUpdateTime(params) {
    this.setState({ played: params.played });
  }
  handleFocus(e) {
    if (e) {
      return true;
    } else return false;
  }

  render() {
    const {
      artist,
      name,
      src,
      id,
      nowPlaying,
      inFocus,
      favorite,
      addToFavorite,
      removeFromFavorite,
    } = this.props;
    return (
      <React.Fragment>
        <hr className={styles.playerwrapper} />
        {/* React player  */}
        <div className={styles.playerwrapper}>
          <ReactPlayer
            ref={(player) => (this.player = player)}
            className="ml-auto mr-auto"
            width="100%"
            style={{ transition: "ease 0.2s" }}
            progressInterval={50}
            loop={true}
            controls={false}
            volume={this.state.volume}
            onSeek={(event) => console.log(event)}
            onProgress={(params) => {
              this.onUpdateTime(params);
            }}
            //   onDuration={duration=>console.log(duration)}
            url={src}
            playing={inFocus && this.state.playing}
            height={this.state.height}
            config={{
              youtube: {
                playerVars: { showinfo: 0, modestbranding: 1 },
              },
            }}
          ></ReactPlayer>
        </div>
        <h6 className="mt-3">
          {name} - {artist}
        </h6>
        <div
          className={cx(
            styles.controlwrapper,
            "d-flex justify-content-center w-100"
          )}
        >
          {/* Favorite ICON */}
          <div
            className={cx(styles.heart, this.state.activate(favorite))}
            onClick={() => {
              if (!favorite) {
                addToFavorite(id);
              } else removeFromFavorite(id);
            }}
          ></div>
          {/* PLAY or STOP */}
          <div className="d-flex align-items-center">
            {!inFocus || this.state.playing === false ? (
              <span
                className="mr-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  this.onPlay(e);
                  return nowPlaying(id);
                }}
              >
                <img
                  src={require("../../images/playbutton.png")}
                  width="40px"
                  height="40px"
                  alt="Play button"
                />
              </span>
            ) : (
              <span
                className="mr-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => this.onStop(e)}
              >
                <img
                  src={require("../../images/stopbutton.png")}
                  width="40px"
                  height="40px"
                  alt="Stop button"
                />
              </span>
            )}
          </div>
          <Form.Control
            className="d-inline-block"
            type="range"
            value={this.state.played * 100}
            onChange={(event) => {
              this.setState({ playing: true });
              this.player.seekTo(event.target.value / 100, "fraction");
            }}
          />
          {/* volume */}
          <div className={cx(styles.volumewrapper, "d-flex")}>
            <div className="d-flex align-items-center">
              <img
                src={require("../../images/volume-level.png")}
                width="25px"
                height="25px"
                alt="volume"
              />
            </div>
            <div className={cx("d-flex", styles.volume)}>
              <Form.Control
                className="align-self-center"
                style={{ width: "100px" }}
                type="range"
                value={this.state.volume * 100}
                onChange={(event) => {
                  this.setState({ volume: event.target.value / 100 });
                }}
              />
            </div>
          </div>
          {/* Expand or Shrink VIdeo */}
          <div className="d-flex align-items-center justify-content-end">
            {this.state.height === "0px" ? (
              <span
                className="m-2"
                onClick={(e) => this.onView(e)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={require("../../images/expand.png")}
                  width="26px"
                  height="26px"
                  alt="expand"
                />
              </span>
            ) : (
              <span
                className="m-2"
                style={{ cursor: "pointer" }}
                onClick={(e) => this.onHide(e)}
              >
                <img
                  src={require("../../images/shrink.png")}
                  width="26px"
                  height="26px"
                  alt="expand"
                />
              </span>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MusicPlayer;
