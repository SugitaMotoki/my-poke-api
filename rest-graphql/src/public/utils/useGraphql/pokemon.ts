export const getPokemonOperation = `
query GetPokemon {
  pokemons {
    id
    name
    pokedex
    imageUrl
    genus
    height
    weight
    types {
      id
      name
    }
    generation {
      id
      name
    }
    abilities {
      ability {
        id
        name
        flavorText
        description
      }
      isHidden
    }
  }
}
`;

export const getPokemonByIdOperation = `
query GetPokemonById($pokemonId: Int!) {
  pokemon(id: $pokemonId) {
    id
    name
    pokedex
    imageUrl
    genus
    height
    weight
    types {
      id
      name
    }
    generation {
      id
      name
    }
    abilities {
      ability {
        id
        name
        flavorText
        description
      }
      isHidden
    }
  }
}
`;

export const deletePokemonOperation = `
mutation DeletePokemon($deletePokemonId: Int!) {
  deletePokemon(id: $deletePokemonId)
}
`;
