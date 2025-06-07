import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
// import logoStarWars from "../assets/img/logo.png"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const deleteFavorite = (id) => {
		dispatch({
			type: "DELETE_FAVORITE", payload: id
		})
	}

	return (
		<nav className="navbar navbar-dark bg-custom-dark p-3">
			<div className="container">
				{/* <Link to={"/"}>
					<img
						src={logoStarWars}
						alt="logo Star Wars"
						className="w-50" />
				</Link> */}
			</div>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="number-gray bg-secondary bor ms-1 me-1 ">
						{store.favorites.length}
					</span>
				</button>
				<ul className=" menu dropdown-menu dropdown-menu-dark">
					{
						store.favorites.map((person) => {
							return (
								<li
									key={person._id}
									className="d-flex justify-content-between align-items-center px-2"
								><a className="dropdown-item active" href="#">{person.properties?.name}</a>
									<button
										type="button"
										className="btn btn-trasparent"
										onClick={() => deleteFavorite(person._id)}>

										<i className="fa-solid fa-trash"></i></button>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav >
	);
};