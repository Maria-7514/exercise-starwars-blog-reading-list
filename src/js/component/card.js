import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div>
			<div className="card">
				<img src="https://fakeimg.pl/350x200/?text=World&font=lobster" className="img-thumbnail" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string
};

export default Card;
