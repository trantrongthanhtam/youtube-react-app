import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames";
import { Card, CardDeck } from "react-bootstrap";

// import { connect } from "react-redux";

const cx = classNames.bind(styles);

class MusicTheme extends React.Component {
  render() {
    return (
      <div className={cx(styles.genrewrapper)}>
        <h2>Theo chủ đề</h2>
        <CardDeck>
          <Card id="nhac-ngay-mua-buon">
            <Link to={`/musicbytheme/nhac-ngay-mua-buon`}>
              <Card.Img variant="top" src={require('../../images/nhac-ngay-mua-buon.jpg')} alt="Bolero" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Ngày mưa buồn
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card id="nhac-caphe-thu-gian">
            <Link to={`/musicbytheme/nhac-caphe-thu-gian`}>
              <Card.Img variant="top" src={require('../../images/nhac-caphe-thu-gian.jpg')} alt="Pop Ballad" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Cà phê thư giãn
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card id="nhac-luyen-tap-nang-dong">
            <Link to={`/musicbytheme/nhac-luyen-tap-nang-dong`}>
              <Card.Img variant="top" src={require('../../images/nhac-luyen-tap-nang-dong.jpg')} alt="Cổ Điển" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Luyện tập năng động
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default MusicTheme;
// function mapStateToProps(state) {
// 	return {
// 		cartCount: state.cartCount
// 	};
// }
// export default connect(
// 	mapStateToProps,
// 	null
// )(NavBar);
