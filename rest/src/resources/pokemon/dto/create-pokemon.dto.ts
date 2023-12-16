export interface CreatePokemonDto {
  name: string;
  pokedex: number;
  genus: string;
  height: number;
  weight: number;
  typeIds: number[];
}
