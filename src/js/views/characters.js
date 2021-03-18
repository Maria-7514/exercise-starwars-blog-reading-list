import React from "react";
import Card from "../component/card";

export const Characters = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div className="row">
			<div className="col">
				<Card title="Han Solo" />
			</div>
			<div className="col">
				<Card title="Chewbacca" />
			</div>
			<div className="col">
				<Card title="Dart Vader" />
			</div>
		</div>
	</div>
);
