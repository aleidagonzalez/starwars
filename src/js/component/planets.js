// import React, { useEffect, useContext } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.scss";
// import { Context } from "../store/appContext";

// export function Planets() {
// 	const [planets, setPlanets] = useState(0);
// 	const { store, actions } = useContext(Context);

// 	useEffect(() => {
// 		fetch("https://www.swapi.tech/api/planets/", {
// 			method: "GET"
// 		})
// 			.then(res => res.json())
// 			.then(data => console.log(data))
// 			.then(responseJson => {
// 				setPlanets(responseJson);
// 			})
// 			.catch(err => console.error(err));
// 	}, []);

// 	return (
// 		<div className="text mt-5">
// 			<h1>Planets</h1>
// 			<ul>
// 				{planets.map(planet => {
// 					return <li key={planet.id}>{{ planet }}</li>;
// 				})}
// 			</ul>
// 		</div>
// 	);
// }
