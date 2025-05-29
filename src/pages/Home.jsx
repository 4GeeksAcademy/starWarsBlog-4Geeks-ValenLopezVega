import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { getAllCharacters, getAllVehicles, getAllPlanets } from "../services/starWarsApi.jsx";
import { useEffect } from "react";

async function fetchPeople(){
    const data = await getAllCharacters()
    if(data){
        dispatch({type: 'SET_CHARACTERS', payload: data})
    }
}

async function fetchPlanets(){
    const data = await getAllPlanets()
    if(data){
        dispatch({type: 'SET_PLANETS', payload: data})
    }
}

async function fetchVehicles(){
    const data = await getAllVehicles()
    if(data){
        dispatch({type: 'SET_VEHICLES', payload: data})
    }

}

useEffect(() => {
    fetchPeople()
    fetchPlanets()
    fetchVehicles()
}, [])

export const Home = () => {
	return (
		<div>
			<h1>testing home</h1>
			<CharacterCard />
		</div>

	);
}; 
