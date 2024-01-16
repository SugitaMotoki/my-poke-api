export interface Ability {
  id: number;
  name: string;
  flavorText: string;
  description: string;
}

export interface CreateAbilityDto {
  name: string;
  flavorText: string;
  description: string;
}

export interface UpdateAbilityDto {
  name: string;
  flavorText: string;
  description: string;
}
