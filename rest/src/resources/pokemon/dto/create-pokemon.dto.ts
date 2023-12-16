export interface CreatePokemonDto {
  name: string;
  pokedex: number;
  genus: string;
  height: number;
  weight: number;
  generationId: number;
  typeIds: number[];
}
