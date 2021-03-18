import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Characters } from "./characters";
import { Planets } from "./planets";

export const Home = () => (
	<div className="container">
		<div className="row mt-1 d-md-block">
			<Characters />
		</div>
		<div className="row mt-1 d-md-block">
			<Planets />
		</div>
	</div>
);
