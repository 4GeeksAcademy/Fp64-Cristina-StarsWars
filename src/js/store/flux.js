const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			vehiculos: [],
			planetas: [],

		},
		actions: {
			obtenerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({personajes:data.results}))
					.catch(err => console.error(err)) 
			},
			obtenerVehiculos: () => {
						fetch("https://www.swapi.tech/api/vehicles")
							.then(res => res.json())
							.then(data => setStore({vehiculos:data.results}))
							.catch(err => console.error(err))
			},
			obtenerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({planetas:data.results}))
					.catch(err => console.error(err))
				},
			
			obtenerFavorito: (name) => {
					const store = getStore();
					getStore ({...store,listafavoritos: [store.listafavoritos, name]})

					},

			borrarFavorito: (borrar) => {
				const store = getStore();
				const listafavoritos = store.listafavoritos.filet()
				setStore({ ...store,listafavoritos })
			},

			// Use getActions to call a function within a fuction
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
