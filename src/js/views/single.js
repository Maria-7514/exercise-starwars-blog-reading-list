import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const url = "https://www.swapi.tech/api/";
const randomPic = Math.floor(Math.random() * 1000);
const urlPic = "https://picsum.photos/600/400?random=" + randomPic;

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const [detalle, setDetalle] = useState();
	const getCharacterDetails = async uid => {
		try {
			const response = await fetch(url + "people/" + uid);
			const json = await response.json();
			setDetalle(json.result.properties);
		} catch (e) {
			console.log(e);
		}
	};

	const params = useParams();
	useEffect(
		() => {
			getCharacterDetails(params.uid);
		},
		[params.uid]
	);

	if (!detalle) {
		return <h2>Loading please wait...</h2>;
	}

	return (
		<div className="container">
			<div className="row my-3">
				<div className="col">
					<img src={urlPic} />
				</div>
				<div className="col">
					<h1 className="display-4">{detalle.name}</h1>
					<p>Description</p>
				</div>
			</div>
			<div className="row text-danger text-center">
				<div className="col">
					<h3>Name:</h3>
					<p className="fs-2">{detalle.name}</p>
				</div>
				<div className="col">
					<h3>Birth Year</h3>
					<p>{detalle.birth_year}</p>
				</div>
				<div className="col">
					<h3>Gender:</h3>
					<p>{detalle.gender}</p>
				</div>
				<div className="col">
					<h3>Height:</h3>
					<p>{detalle.height}</p>
				</div>
				<div className="col">
					<h3>Skin Color:</h3>
					<p>{detalle.skin_color}</p>
				</div>
				<div className="col">
					<h3>Eye Color:</h3>
					<p>{detalle.eye_color}</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							{" "}
							Back home{" "}
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

SingleCharacter.propTypes = {};

// empiezan planetas

export const SinglePlanet = props => {
	const [detalle, setDetalle] = useState();

	const getPlanetDetails = async uid => {
		try {
			const response = await fetch(url + "planets/" + uid);
			const json = await response.json();
			setDetalle(json.result.properties);
		} catch (e) {
			console.log(e);
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
		<div className="container">
			<div className="row my-3">
				<div className="col">
					<img src={urlPic} />
				</div>
				<div className="col">
					<h1 className="display-4">Planet: {detalle.name}</h1>
					<p>
						Description:
						{detalle.description}
					</p>
				</div>
			</div>
			<div className="row text-danger text-center">
				<div className="col">
					<h3>Name:</h3>
					<p className="fs-2">{detalle.name}</p>
				</div>
				<div className="col">
					<h3>Climate:</h3>
					<p>{detalle.climate}</p>
				</div>
				<div className="col">
					<h3>Population:</h3>
					<p>{detalle.population}</p>
				</div>
				<div className="col">
					<h3>Orbital Period:</h3>
					<p>{detalle.orbital_period}</p>
				</div>
				<div className="col">
					<h3>Rotation Period:</h3>
					<p>{detalle.rotation_period}</p>
				</div>
				<div className="col">
					<h3>Diameter:</h3>
					<p>{detalle.diameter}</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							{" "}
							Back home{" "}
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

SinglePlanet.propTypes = {};
