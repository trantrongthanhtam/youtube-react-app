import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames";
import { Card, CardDeck } from "react-bootstrap";

// import { connect } from "react-redux";

const cx = classNames.bind(styles);

class MusicGenre extends React.Component {
  render() {
    return (
      <div className={cx(styles.genrewrapper)}>
        <h2>Theo thể loại</h2>
        <CardDeck>
          <Card id="nhac-bolero">
            <Link to={`/musicbygenre/nhac-bolero`}>
              <Card.Img variant="top" src={require('../../images/nhac-bolero.jpg')} alt="Bolero" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Nhạc Bolero
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>

          <Card id="nhac-pop-ballad">
            <Link to={`/musicbygenre/nhac-pop-ballad`}>
              <Card.Img variant="top" src={require('../../images/nhac-pop-ballad.jpg')} alt="Pop Ballad" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Nhạc Pop/Ballad
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card id="nhac-co-dien">
            <Link to={`/musicbygenre/nhac-co-dien`}>
              <Card.Img variant="top" src={require('../../images/nhac-co-dien.jpg')} alt="Cổ Điển" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">
                  Nhạc Cổ điển
                </Card.Title>
              </Card.Body>
            </Link>
          </Card>
          <Card id="nhac-rock">
            <Link to={`/musicbygenre/nhac-rock`}>
              <Card.Img variant="top" src={require('../../images/nhac-rock.jpg')} alt="Rock" />
              <Card.Body>
                <Card.Title className="mb-0 text-center">Nhạc Rock</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default MusicGenre;
// function mapStateToProps(state) {
// 	return {
// 		cartCount: state.cartCount
// 	};
// }
// export default connect(
// 	mapStateToProps,
// 	null
// )(NavBar);
