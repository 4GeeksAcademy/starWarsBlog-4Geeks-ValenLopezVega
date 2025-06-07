import { Link } from "react-router-dom";
import { FavoriteButton } from "../components/FavoriteButton";

export function VehicleCard({data}) {
    return (
        <div className="card my-card bg-custom-dark text-white" >
            <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.properties.name}</h5>
                    <p className="card-text">{data.properties.model}</p>
                    <p className="card-text">{data.properties.crew}</p>
                    <Link to={`/details/vehicles/${data.uid}`} className="btn btn-outline-light">Learn more</Link>
                    <FavoriteButton element={data}/>
                </div>
        </div>
    )
}