import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navb  ar-brand mb-0 h1">
					<img src={"https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png "} />
				</span>
			</Link>
			<div className="ml-auto dropdown">
				<button
					className="btn btn-primary  dropdown-toggle"
					type="button"
					id="favorite"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					FAVORITES ITEMS MODAL
				</button>
				<ul className="dropdown-menu" aria-labelledby="favorite">
					{store.favorites.map((favorite, i) => {
						return (
							<li key={i} className="dropdown-item">
								{favorite}
								<span
									className="ml-4"
									onClick={() => {
										actions.deleteFavorites(i);
									}}>
									<i className="fas fa-trash" />
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

{
	/* <li key={index}>
{task.label}{" "}
<span
onClick={() => {
deleteTask(index);
}}>
x
</span>
// const allPeople = store.people.map((person, i) => { */
}
// 	return <CardPeople key={i} name={person.name} url={person.url} />;
// });

{
	/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */
}

//....................
// var listenerFunction = function() {
// 	alert("First click");
// 	document.getElementById("onTimeButton").removeEventListener("click", listenerFunction);
// };
// function inicialize() {
// 	document.getElementById("onTimeButton").addEventListener("click", listenerFunction);
// }

/*var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})*/
