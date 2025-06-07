export const initialStore = () => {
  return {
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'SET_CHARACTERS':
      return {
        ...store,
        characters: action.payload
      };

    case 'SET_PLANETS':
      return {
        ...store,
        planets: action.payload
      }

    case 'SET_VEHICLES':
      return {
        ...store,
        vehicles: action.payload
      }

    case 'ADD_FAVORITE':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

    case 'DELETE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter((item) => item._id != action.payload)
      }

    default:
      throw Error('Unknown action.');
  }
}
