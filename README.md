# Pokedex

A pokemon pokedex application that displays pokemon. An exercise for understanding props in react from LaFosse Academy.

## Components

The app contains two components:
- Pokedex, that handles the maping of the pokemon data sent from the Parent App.jsx file, and then creates however many Pokecards as there are pokemon in the data.
- Pokecard, that displays the name, image and type of pokemon in an easy to view way.

### Data

Below is the raw json data used.

```
{
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
}
```
