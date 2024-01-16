export const getGenerationsOperation = `
query Generations {
  generations {
    id
    name
  }
}
`;

export const getGenerationOperation = `
query Generation($generationId: Int!) {
  generation(id: $generationId) {
    id
    name
  }
}
`;

export const createGenerationOperation = `
mutation CreateGeneration($name: String!) {
  createGeneration(name: $name) {
    id
    name
  }
}
`;

export const updateGenerationOperation = `
mutation UpdateGeneration($updateGenerationId: Int!, $name: String!) {
  updateGeneration(id: $updateGenerationId, name: $name)
}
`;

export const deleteGenerationOperation = `
mutation DeleteGeneration($deleteGenerationId: Int!) {
  deleteGeneration(id: $deleteGenerationId)
}
`;
