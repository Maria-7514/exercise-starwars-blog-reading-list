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
		return <div>Loading please wait...</div>;
	}

	return (
		<div className="container">
			<h1 className="display-4">Character Single Page</h1>
			<div className="row">
				<div className="col">
					<img src={urlPic} />
				</div>
				<div className="col">
					<h1 className="display-4">Character Name</h1>
					<p>
						Togruta droopy baba kyp darth ree-yees hoojib di. Organa terrik anthos calrissian wookiee farlax
						emtrey. Bimm aka irek moff disra. Jettster snootles muun cerean iblis.
					</p>
					<p>
						Tion luminara hypori onimi raymus sullustan. Feylya su rakata falleen dorvalla. Mohc defel
						dodonna wicket jerjerrod ikrit bando omas. Hutt fett nal skywalker emtrey kendal boba ralter.
						Felya boz wedge jar timoliini
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<p>{JSON.stringify({ detalle })}</p>
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
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
			<div className="row mt-3">
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
					<p className="display-4">{detalle.name}</p>
				</div>
				<div className="col">
					<p>
						<strong>Climate:</strong> {detalle.climate}
					</p>
				</div>
				<div className="col">
					<p>
						<strong>Population:</strong> {detalle.population}
					</p>
				</div>
				<div className="col">
					<p>
						<strong>Orbital Period:</strong> {detalle.orbital_period}
					</p>
				</div>
				<div className="col">
					<p>
						<strong>Rotation Period:</strong> {detalle.rotation_period}
					</p>
				</div>
				<div className="col">
					<p>
						<strong>Diameter:</strong> {detalle.diameter}
					</p>
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
