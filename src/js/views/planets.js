import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Planets = () => {
	const { store } = useContext(Context);
	return (
		<div className="mt-5">
			<h1>Planets</h1>
			<div className="horizontal-scroll-wrapper">
				{store.planetas.map(item => {
					return (
						<div key={item.uid}>
							<Card name={item.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
