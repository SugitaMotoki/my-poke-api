export const getAbilitiesOperation = `
query GetAbilities {
  abilities {
    id
    name
    flavorText
    description
  }
}
`;

export const getAbilityOperation = `
query GetAbility {
  ability(id: $abilityId) {
    id
    name
    flavorText
    description
  }
}
`;

export const createAbilityOperation = `
mutation CreateAbility($name: String!, $flavorText: String!, $description: String!) {
  createAbility(name: $name, flavorText: $flavorText, description: $description) {
    id
    name
    flavorText
    description
  }
}
`;

export const updateAbilityOperation = `
mutation UpdateAbility($updateAbilityId: Int!, $name: String!, $flavorText: String!, $description: String!) {
  updateAbility(id: $updateAbilityId, name: $name, flavorText: $flavorText, description: $description)
}
`;

export const deleteAbilityOperation = `
mutation DeleteAbility($deleteAbilityId: Int!) {
  deleteAbility(id: $deleteAbilityId)
}
`;
