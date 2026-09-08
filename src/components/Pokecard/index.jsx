import './pokecard.css'

function Pokecard({name, image, type}) {
	return (
		<div className="pokecard-container">
			<h2 className="pokecard-name">{name}</h2>
			<img src={image}></img>
			<p className="pokecard-type">Type: {type}</p>
		</div>
	)
}

export default Pokecard