export function Carousel({title, items, renderCard}){
    return(
        <div className="bg-custom-dark text-white">
            <h1 className="text-danger">{title}</h1>
			<div className="my-carousel">
				{
					items.map((item) => (
                        <div key={item.uid}>
                            {renderCard(item)}
                        </div>
					))
				}
			</div>
        </div>
    )
}