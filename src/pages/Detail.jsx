import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom"; // Si usás enlaces para volver
import PropTypes from "prop-types"; // Si le pasás props al componente

export function Detail() {
    const { store } = useGlobalReducer()
    const { type, id } = useParams()

    console.log("STORE CHARACTERS:", store.characters);
    console.log("ID PARAM:", id);

    const character = store.characters.find(char => char.uid === id);
    const planet = store.planets.find(item => item.uid === id);
    const vehicle = store.vehicles.find(i => i.uid === id);

    let content;

    switch (type) {
        case 'characters':
            content = (
                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-md-4 mb-3">
                            <img src={character.image} classNameName="img-fluid rounded-start" alt={character.properties.name} />
                        </div>

                        <div className="col-md-8">
                            <h2 className="mb-4">{character.properties.name}</h2>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Eye color: {character.properties.eye_color}</li>
                                <li className="list-group-item">Hair color: {character.properties.hair_color}</li>
                                <li className="list-group-item">Gender: {character.properties.gender}</li>
                                <li className="list-group-item">Height: {character.properties.height}</li>
                                <li className="list-group-item">Skin color: {character.properties.skin_color}</li>
                            </ul>

                            <Link to="/" className="btn btn-primary mt-4">Volver</Link>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'planets':
            content = (
                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-md-4 mb-3">
                            <img src={planet.image} classNameName="img-fluid rounded-start" alt={planet.properties.name} />
                        </div>

                        <div className="col-md-8">
                            <h2 className="mb-4">{planet.properties.name}</h2>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Climate: {planet.properties.climate}</li>
                                <li className="list-group-item">Terrain: {planet.properties.terrain}</li>
                                <li className="list-group-item">Gravity: {planet.properties.gravity}</li>
                                <li className="list-group-item">Population: {planet.properties.population}</li>
                                <li className="list-group-item">Rotation period: {planet.properties.rotation_period}</li>
                                <li className="list-group-item">Orbital period: {planet.properties.orbital_period}</li>
                            </ul>

                            <Link to="/" className="btn btn-primary mt-4">Volver</Link>
                        </div>
                    </div>
                </div>
            );
            break;
        case 'vehicles':
            content = (
                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-md-4 mb-3">
                            <img src={vehicle.image} classNameName="img-fluid rounded-start" alt={vehicle.properties.name} />
                        </div>

                        <div className="col-md-8">
                            <h2 className="mb-4">{vehicle.properties.name}</h2>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Model: {vehicle.properties.model}</li>
                                <li className="list-group-item">Vehicle className: {vehicle.properties.vehicle_className}</li>
                                <li className="list-group-item">Manufacturer: {vehicle.properties.manufacturer}</li>
                                <li className="list-group-item">Passengers: {vehicle.properties.passengers}</li>
                                <li className="list-group-item">Crew: {vehicle.properties.crew}</li>
                            </ul>

                            <Link to="/" className="btn btn-primary mt-4">Volver</Link>
                        </div>
                    </div>
                </div>
            );
            break;
        default:
            content = (<p>No se encontró el tipo.</p>);
    }


    return (
        <div className="container-fluid">{content}</div>
    )
}