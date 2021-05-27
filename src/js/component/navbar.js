import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid black">
			<div className="container">
				<nav className="px-0 navbar navbar-light">
					<Link to="/">
						<img
							className="logo"
							src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg"
						/>
					</Link>

					<div className="ml-auto">
						{/* empieza drop down */}
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-primary dropdown-toggle"
								data-toggle="dropdown"
								data-display="static">
								Favorites{" "}
								<span className="badge bg-secondary text-white">{store.favorites.length} </span>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
								{store.favorites.length == 0 && (
									<button disabled className="dropdown-item d-flex px-2" type="button">
										<div className="mr-2">Empty</div>
									</button>
								)}
								{store.favorites.map(fav => {
									return (
										<button className="dropdown-item d-flex px-2" type="button" key={fav}>
											<div className="mr-2">{fav}</div>
											<a onClick={() => actions.deleteFavorite(fav)}>
												<i className="fas fa-trash" />
											</a>
										</button>
									);
								})}
							</div>
						</div>
						{/* termina drop dowm */}
					</div>
				</nav>
			</div>
		</div>
	);
};
