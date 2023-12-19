export interface Type {
  id: number;
  name: string;
}

export interface Generation {
  id: number;
  name: string;
}

export interface Ability {
  id: number;
  name: string;
  flavorText: string;
  description: string;
}

export interface Pokemon {
  id: number;
  name: string;
  pokedex: number;
  imageUrl: string;
  genus: string;
  height: number;
  weight: number;
  generation: Generation;
  types: Type[];
  abilities: {
    ability: Ability;
    isHidden: boolean;
  }[];
}

export interface CreateAbilityProps {
  id: number;
  isHidden: boolean;
}

export interface CreatePokemonDto {
  name: string;
  pokedex: number;
  imageUrl: string;
  genus: string;
  height: number;
  weight: number;
  generationId: number;
  typeIds: number[];
  abilities: CreateAbilityProps[];
}
