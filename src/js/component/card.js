import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = props => {
	const [detalle, setDetalle] = useState();

	useEffect(() => {
		getDetalle();
	}, []);

	const getDetalle = () => {
		fetch(props.url)
			.then(response => response.json())
			.then(result => {
				//console.log(result.result);
				setDetalle(result.result.properties);
			})
			.catch(error => console.log("error", error));
	};

	const randomPic = Math.floor(Math.random() * 1000);
	const url = "https://picsum.photos/600/400?random=" + randomPic;
	return (
		<div>
			<div className="card m-2">
				<img src={url} />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<p>Gender: {detalle ? detalle.gender : ""}</p>
						<p>Hair Color: {detalle ? detalle.hair_color : ""}</p>
						<p>Eye Color: {detalle ? detalle.eye_color : ""}</p>
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
	name: PropTypes.string,
	url: PropTypes.string
};

export default Card;
