import Pokecard from "../Pokecard"
import './pokedex.css'

function Pokedex({pokemons}) {
	return (
		<div className="pokedex-container">
			<h1 className="pokedex-title">Pokedex</h1>
			<div className="pokedex-grid">
				{pokemons.map((pokemon, i) => (
					<Pokecard
						name={pokemon.name}
						image={pokemon.image}
						type={pokemon.type}
						key={i}
					/>
				))}
			</div>
		</div>
	)
}

export default Pokedex