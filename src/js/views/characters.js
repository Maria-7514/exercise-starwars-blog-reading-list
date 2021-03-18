import React from "react";
import Card from "../component/card";

export const Characters = () => (
	<div className="row">
		<div className="col">
			<div className="text-center mt-5">
				<h1>Characters</h1>
				<Card title="personajes" />
				<Card title="planetas" />
				<Card title="vehiculos" />
			</div>
		</div>
	</div>
);
