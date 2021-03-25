import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [addFav, setAddFav] = useState("");
	const [listFav, setListFav] = useState([]);
	const putFav = () => {
		if (addFav != "") {
			setListFav([...listFav, addFav]);
			setAddFav("");
		} else {
			alert("Card was already in your Favorites");
		}
	};

	return (
		<div className="container-fluid black">
			<div className="container">
				<nav className="px-0 navbar navbar-light">
					<Link to="/">
						<img
							src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
							width="40%"
						/>
					</Link>

					<div className="ml-auto">
						{/* empieza drop down */}
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-secondary dropdown-toggle"
								data-toggle="dropdown"
								data-display="static">
								Favorites{" "}
								<span className="badge bg-warning text-dark">4 {/*{store.favorites.lenght}*/} </span>
							</button>
							<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
								<button className="dropdown-item d-flex px-2" type="button">
									<div className="mr-2">Me cago en Rigo</div>
									<div>
										<i className="fas fa-trash" />
									</div>
								</button>
							</div>
						</div>
						{/* termina drop dowm */}
					</div>
				</nav>
			</div>
		</div>
	);
};
