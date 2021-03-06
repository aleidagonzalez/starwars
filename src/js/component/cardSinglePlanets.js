import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cardSingle.scss";
import { Context } from "../store/appContext";

export const CardSinglePlanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	const [cardDetails, setCardDetails] = useState({});
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.uid)
			.then(res => res.json())
			.then(data => {
				setCardDetails(data.result);
				console.log(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card cardSingle d-flex flex-row ">
			<img
				src="https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				className="card-img-top imgsingle"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{cardDetails.properties ? cardDetails.properties.name : "name"}</h5>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.diameter : "diameter"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.climate : "climate"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.terrain : "terrain"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.gravity : "gravity"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.population : "population"}</p>
			</div>
		</div>
	);
};
CardSinglePlanets.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
