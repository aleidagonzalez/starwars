import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Loadplanets } from "../component/planets.js";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { useContext } from "react";

// Aleida Sara StarWars Flux Fetch Api

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>Planets</h1>
			<p>
				<Card />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
