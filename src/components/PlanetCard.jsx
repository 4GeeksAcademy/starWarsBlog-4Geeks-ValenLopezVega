export function PlanetCard({data}) {
    return (
        <div className="card my-card" >
            <img src={data.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.properties.name}</h5>
                    <p className="card-text">{data.properties.population}</p>
                    <p className="card-text">{data.properties.terrain}</p>
                    <a href="#" className="btn btn-primary">Learn more</a>
                    <button>fav</button>
                </div>
        </div>
    )
}