export { PokemonModule } from "./pokemon/pokemon.module";
export { TypeModule } from "./types/type.module";
export { GenerationModule } from "./generations/generation.module";
export { AbilityModule } from "./abilities/ability.module";

import { Pokemon } from "./pokemon/entities/pokemon.entity";
import { Type } from "./types/entities/type.entity";
import { Generation } from "./generations/entities/generation.entity";
import { Ability } from "./abilities/entities/ability.entity";
import { PokemonToAbility } from "./pokemon/entities/pokemon-to-ability.entity";

export const entityClasses = [
  Pokemon,
  Type,
  Generation,
  Ability,
  PokemonToAbility,
];
