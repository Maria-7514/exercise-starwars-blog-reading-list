import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="mt-5">
			<h1>Characters</h1>
			<div className="horizontal-scroll-wrapper">
				{store.personajes.map(item => {
					return (
						<div key={item.uid}>
							<Card name={item.name} url={item.url} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
