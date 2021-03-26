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
			addFavorite: name => {
				const store = getStore();
				const itm = store.favorites.indexOf(name);
				if (itm == -1) setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorite: name => {
				const store = getStore();
				const favorites = store.favorites.filter(fav => fav != name);
				setStore({ favorites });
			}
		}
	};
};

export default getState;
