import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//
//   _____     _ _                _____         _          _____
//  |     |___| |_|___ ___ ___   |     |___ ___| |_ ___   |  _  |___ ___ _ _ ___
//  | | | | -_| | |_ -|_ -| .'|  | | | | .'|  _|  _| .'|  |     |  _| .'| | | .'|
//  |_|_|_|___|_|_|___|___|__,|  |_|_|_|__,|_| |_| |__,|  |__|__|_| |__,|_  |__,|
//                                                                      |___|

const url = "https://www.swapi.tech/api/";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">Single Character</h1>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleCharacter.propTypes = {};

export const SinglePlanet = props => {
	const [detalle, setDetalle] = useState();

	const getPlanetDetails = async uid => {
		try {
			const response = await fetch(url + "planets/" + uid); // esperamos la respuesta del servidor.
			const json = await response.json(); // esperamos la transformación a JSON.
			setDetalle(json.result.properties);
		} catch (e) {
			// falló intentando traer los detalles.
			console.log(e); // reportar el error.
		}
	};
	const params = useParams();
	useEffect(
		() => {
			getPlanetDetails(params.uid);
		},
		[params.uid]
	);

	const { store, actions } = useContext(Context);

	if (!detalle) {
		return <div>Loading please wait...</div>;
	}

	return (
		<div className="jumbotron">
			<h1 className="display-4">Planet: {detalle.name}</h1>
			<hr className="my-4" />
			<p>
				Diameter: <strong>{detalle.diameter} km</strong>
			</p>
			<p>{JSON.stringify({ detalle })}</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {};
