import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = props => {
	const randomPic = Math.floor(Math.random() * 30);
	const url = "https://picsum.photos/600/400?random=" + randomPic;
	return (
		<div>
			<div className="card m-2">
				<img src={url} />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						Obi-Wan is here. The Force is with him. If you are right, he must not be allowed to escape.
						Escape is not his plan. I must face him alone.
					</p>
					<div className="d-flex">
						<a href="#" className="btn btn-primary">
							Learn More!
						</a>
						<a href="#" className="ml-auto btn btn-warning">
							<i className="far fa-heart" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string
};

export default Card;
