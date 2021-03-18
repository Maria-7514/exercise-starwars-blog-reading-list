import React from "react";
import Card from "../component/card";

export const Planets = () => (
	<div className="text-center mt-5">
		<h1>Planets</h1>
		<div className="row">
			<div className="col">
				<Card title="Dandoran" />
			</div>
			<div className="col">
				<Card title="Utapau" />
			</div>
			<div className="col">
				<Card title="Yarma" />
			</div>
		</div>
	</div>
);
