export const getTypesOperation = `
query GetTypes {
  types {
    id
    name
  }
}
`;

export const getTypeOperation = `
query GetType {
  type(id: $typeId) {
    id
    name
  }
}
`;

export const createTypeOperation = `
mutation CreateType($name: String!) {
  createType(name: $name) {
    id
    name
  }
}
`;

export const updateTypeOperation = `
mutation UpdateType($updateTypeId: Int!, $name: String!) {
  updateType(id: $updateTypeId, name: $name)
}
`;

export const deleteTypeOperation = `
mutation DeleteType($deleteTypeId: Int!) {
  deleteType(id: $deleteTypeId)
}
`;
