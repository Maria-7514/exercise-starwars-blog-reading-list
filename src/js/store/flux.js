const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://www.swapi.tech/api/";
	return {
		store: {
			personajes: [],
			planetas: [],
			favorites: []
		},
		actions: {
			getPersonajes: () => {
				let fetchUrl = baseUrl + "people";
				fetch(fetchUrl)
					.then(response => response.json())
					.then(result => {
						setStore({ personajes: result.results });
					})
					.catch(error => console.log("error", error));
			},
			getPlanetas: () => {
				let fetchUrl = baseUrl + "planets";
				fetch(fetchUrl)
					.then(response => response.json())
					.then(result => {
						setStore({ planetas: result.results });
					})
					.catch(error => console.log("error", error));
			},
			addFavorites: () => {
				const store = getStore();
				const favoritos = store.favorites;
				setStore({ favorites: favoritos.concat(name) });
			}
		}
	};
};

export default getState;
