import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
						<Link to="/demo">
							<button type="button" className="btn btn-secondary">
								Notifications <span className="badge bg-warning text-dark">4</span>
							</button>
						</Link>
					</div>
				</nav>
			</div>
		</div>
	);
};
