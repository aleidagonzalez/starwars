import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	// const { store, actions } = useContext(Context);
	fetch;
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Learn More!
				</a>
				<a href="#" className="btn ">
					<i className="far fa-heart" />
				</a>
			</div>
		</div>
	);
};
