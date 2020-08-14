import React from "react";
import styles from "./preloader.module.css";
import classNames from "classnames";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

class Preloader extends React.Component {
	render() {
		const { visible } = this.props;
		return (
			<div
				className={cx("container", styles.container)}
				style={{ display: visible ? "block" : "none" }}
			>
				<div className="row text-center">
					<div className={styles.centered}>
						<div className={styles.loader}></div>
					</div>
				</div>
			</div>
		);
	}
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

const mapStateToProps = state => {
	return {
		visible: state.preload.visible
	};
};
const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Preloader);
