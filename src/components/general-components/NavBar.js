import React from "react";
import { Link } from "react-router-dom";
import styles from "./general.module.css";
import classNames from "classnames";
import logo from "../../images/youtube-music-logo.svg";
import loginicon from "../../images/anonymous.png";
import { Navbar, Nav } from "react-bootstrap";

// import { connect } from "react-redux";

const cx = classNames.bind(styles);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  onCollapsed() {
    this.setState({expanded: false});
  }
  onToggle(){
    this.setState({expanded: !this.state.expanded});
  }
  render() {
    return (
      <>
        <Navbar
          bg="light"
          expand="lg"
          sticky="top"
          expanded={this.state.expanded}
          onToggle={()=>this.onToggle()}
          className={cx(styles.navbarwrapper, "ml-auto", "mr-auto")}
        >
          <Navbar.Brand className="p-0 ">
            <Link to="/">
              <img src={logo} width="40px" height="40px" alt="Logo" /> MUSIC
              REACT{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" onClick={()=>this.onCollapsed()}>Trang chủ</Link>
              <Link to="/explore" onClick={()=>this.onCollapsed()}>Khám phá</Link>
              <Link to="/favorite" onClick={()=>this.onCollapsed()}>Yêu thích</Link>

              <div className={styles.vl}></div>
              <Link to="/" onClick={()=>this.onCollapsed()}>
                <img src={loginicon} width="20px" height="20px" alt="Login" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
// function mapStateToProps(state) {
// 	return {
// 		cartCount: state.cartCount
// 	};
// }
// export default connect(
// 	mapStateToProps,
// 	null
// )(NavBar);
