import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container">
		<div className="row mt-1 d-md-block">
			<Link to="/characters" className="btn btn-danger btn-lg">
				Characters
			</Link>
		</div>
		<div className="row mt-1 d-md-block">
			<Link to="/planets" className="btn btn-danger btn-lg">
				Planets
			</Link>
			{/* <Link to="/demo">
			<button className="btn btn-primary">Check the Context in action</button>
		</Link> */}
		</div>
	</div>
);
