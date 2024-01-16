import { Ability } from "./ability";
import { Generation } from "./generation";
import { Type } from "./type";

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
