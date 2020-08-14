import React from "react";
// import styles from "./general.module.css";
// import classNames from "classnames";
import fb from '../../images/facebook.png';
import tw from '../../images/twitter.png';
import ln from '../../images/linkedin.png';


// import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    return (
      <div>
          <hr/>
          <section className="d-flex justify-content-center mt-4">
              <figure className=" d-inline-block pl-2 pr-2"><a href='https://www.facebook.com/trantrongthanhtam'><img src={fb} alt="facebook" width="40px" height="40px" /></a></figure>
              <figure className=" d-inline-block pl-2 pr-2"><a href='https://www.twitter.com/th4nht4m'><img src={tw} alt="twitter" width="40px" height="40px"/></a></figure>
              <figure className=" d-inline-block pl-2 pr-2"><a href='https://www.linkedin.com/in/trantrongthanhtam/'><img src={ln} alt="linkedin" width="40px" height="40px"/></a></figure>
          </section>
          <h6 className="text-center mt-1">Powered by Tam Tran</h6>
      </div>
    );
  }
}

export default Footer;
// function mapStateToProps(state) {
// 	return {
// 		cartCount: state.cartCount
// 	};
// }
// export default connect(
// 	mapStateToProps,
// 	null
// )(NavBar);
