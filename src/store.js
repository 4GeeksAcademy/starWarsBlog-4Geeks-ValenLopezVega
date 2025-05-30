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
        characters: action.payload
      };

  case 'SET_PLANETS':
    return{
      ...store,
      planets: action.payload
    }

  case 'SET_VEHICLES':
    return{
      ...store,
      vehicles: action.payload
    }

    default:
      throw Error('Unknown action.');
  }    
}
