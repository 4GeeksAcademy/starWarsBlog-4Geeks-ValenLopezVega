export const initialStore=()=>{
  return{
    characters: [],
    planets: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'SET_CHARACTERS':
      return {
        ...store,
        characters: [...store.characters, action.payload]
      };

  case 'SET_PLANETS':
    return{
      ...store,
      planets: [...store.planets, action.payload]
    }

  case 'SET_VEHICLES':
    return{
      ...store,
      vehicles: [...store.vehicles, action.payload]
    }

    default:
      throw Error('Unknown action.');
  }    
}
