const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // demo: [
            // 	// {
            // 	// 	title: "FIRST",
            // 	// 	background: "white",
            // 	// 	initial: "white"
            // 	// },
            // ],
            BASE_URL: "https://www.swapi.tech/api",
            planets: [],
            people: [],
            vehicles: [],
            getAllData: [],
            allData: []
        },
        actions: {
            loadSomeData: () => {
                const urls = [BASE_URL + "/planets/", BASE_URL + "/vehicles/", BASE_URL + "/people/"];
                fetch(urls)
                    .then(res => res.json())
                    .then(data => {
                        setStore(actions.savePeople(data.results)),
                            console.log("primer fetch"),
                            console.log(loadSomeData(data))

                                .catch(err => {
                                    console.error(err);

                                }),
                    }            
            //  let listadoData = store.data.map(data => {
            //                 return <li key={data.uid}> {data.name} </li>;
            //             }))
         getData= ()=> {
                            const urls = [BASE_URL + "/planets/", BASE_URL + "/vehicles/", BASE_URL + "/people/"],
                            const checkStatus = res => (res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText))),
                            const parseJSON = response => response.json(),
                            return allData
                        }
         saveAllData= ()=> {store.data.map(data => {
                            return <li key={data.uid}> {data.name} </li>;
                        })
                            setStore({ allData: allData });
                        }
                    }
        
        }
    }

}
// // Select data out of all the pages gotten.
//     getAllData: await Promise.all(urls.map(url => getAllPages(url))),
//     buildData( planets, caracters,vehicles)

// **nos**loadPlanets: () => {
// 	fetch("https://www.swapi.tech/api/planets/")
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 		})
// 		.catch(err => console.error(err));
// },
// loadPeople: () => {
// 	fetch("https://www.swapi.tech/api/planets/")
// 		.then(res => res.json())
// 		.then(data => {
// 			console.log(data);
// 		})
// 		.catch(err => console.error(err));
// },
// loadVehicles: () => {
// 	fetch("https://www.swapi.tech/api/vehicles/")
// 		.then(res => res.json())
// 		.then(data => {
// 			setStore({ data });
// 			console.log(data);
// 		})
// 		.catch(err => console.error(err));
//**nos** */ }

//code omar
//             useEffect(() => {
// 		loadPeople();
// 	}, []);

// 	function loadPeople(url = BASE_URL) {
// 		fetch(url)
// 			.then(res => res.json())
// 			.then(data => {
// 				//console.log(data.next, data.previous);
// 				actions.savePeople(data.results);
// 				actions.savePagination(data.next, data.previous);
// 			})
// 			.catch(err => console.error(err));
// 	}

// 	let listadoPersonas = store.people.map(person => {
// 		return <li key={person.uid}> {person.name} </li>;
// 	});

// 	function nextPeople() {
// 		console.log(store.pagination.next);
// 		loadPeople(store.pagination.next);
// 	}

// 	return (
// 		<div className="text-center mt-5">
// 			<ul>{listadoPersonas}</ul>
// 			<button onClick={nextPeople}> NEXT </button>
// 		</div>
// 	);
// };
// // flux
// savePeople: people => {
// 				setStore({ people: people });
// 			},

// Use getActions to call a function within a fuction
// exampleFunction: () => {
// 	getActions().changeColor(0, "green");
// },
// loadSomeData: () => {
// 	/**
// 		fetch().then().then(data => setStore({ "foo": data.bar }))
// 	*/
// },
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.demo.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// },



}
export default getState;
