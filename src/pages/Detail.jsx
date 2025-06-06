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
    console.log("Character detail encontrado:", character);

    let content;
    // style="max-width: 540px;"

    if (type === 'characters') {
        return (
            <div class="container mt-5">
                <div class="row align-items-center">

                    <div class="col-md-4 mb-3">
                        <img src={character.image} className="img-fluid rounded-start" alt={character.properties.name} />
                    </div>

                    <div class="col-md-8">
                        <h2 class="mb-4">{character.properties.name}</h2>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Eye color: {character.properties.eye_color}</li>
                            <li class="list-group-item">Hair color: {character.properties.hair_color}</li>
                            <li class="list-group-item">Gender: {character.properties.gender}</li>
                            <li class="list-group-item">Height: {character.properties.height}</li>
                            <li class="list-group-item">Skin color: {character.properties.skin_color}</li>
                        </ul>

                        <Link to="/" class="btn btn-primary mt-4">Volver</Link>
                    </div>
                </div>
            </div>
        );

    }


    return (
        <div className="container">{content}</div>
    )
}