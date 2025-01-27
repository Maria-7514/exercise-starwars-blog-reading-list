import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);

	const deleteFav = indexDelete => {
		let borrar = listFav.filter((fav, index) => index != indexDelete);
		setListFav(borrar);
	};

	const [detalle, setDetalle] = useState();
	const getDetalle = async () => {
		try {
			const response = await fetch(props.url); // espera la respuesta del servidor.
			const json = await response.json(); // espera la transformación a JSON.
			setDetalle(json.result.properties);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getDetalle();
	}, []);

	const cardContents = () => {
		if (!detalle) {
			return <div>Loading...</div>;
		}
		if (props.cardType == "character") {
			return (
				<p className="card-text">
					<div>Gender: {detalle.gender}</div>
					<div>Hair Color: {detalle.hair_color}</div>
					<div>Eye Color: {detalle.eye_color}</div>
				</p>
			);
		}
		return (
			<p className="card-text">
				<div>Diameter: {detalle.diameter}</div>
				<div>Rotation Speen: {detalle.rotation_period}</div>
				<div>Orbital Period: {detalle.orbital_period}</div>
			</p>
		);
	};

	const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LF3hgG72sOVV5nATLmjWyJDo2k_E8Sk7zQ&usqp=CAU";
	return (
		<div>
			<div className="card m-2">
				<img src={url} />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					{cardContents()}
					<div className="d-flex">
						<Link to={"/single" + props.cardType + "/" + props.uid} className="btn btn-outline-primary">
							Learn More
						</Link>
						<button
							className="ml-auto btn btn-outline-warning"
							onClick={() => actions.addFavorite(props.name)}>
							<i className="far fa-heart" />
						</button>
						{/* <a href="#" className="ml-auto btn btn-warning">
							<i className="far fa-heart" />
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string,
	uid: PropTypes.number,
	cardType: PropTypes.string
};

export default Card;
