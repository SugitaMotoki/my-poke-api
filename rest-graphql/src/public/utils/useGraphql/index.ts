import axios from "axios";
import {
  CreatePokemonDto,
  CreateTypeDto,
  UpdateTypeDto,
  CreateAbilityDto,
  UpdateAbilityDto,
  CreateGenerationDto,
  UpdateGenerationDto,
} from "../types";
import * as pokemon from "./pokemon";
import * as type from "./type";
import * as generation from "./generation";
import * as ability from "./ability";

export const getPokemon = async () => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: pokemon.getPokemonOperation,
    },
  });
  return response.data.data.pokemons;
};

export const getPokemonById = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: pokemon.getPokemonByIdOperation,
      variables: { pokemonId: id },
    },
  });
  return response.data.data.pokemon;
};

export const postPokemon = async (data: CreatePokemonDto) => {
  const response = await axios({
    method: "post",
    url: "/pokemon",
    data,
  });
  return response.data;
};

export const deletePokemon = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: pokemon.deletePokemonOperation,
      variables: { deletePokemonId: id },
    },
  });
  return response.data.data;
};

export const getTypes = async () => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: type.getTypesOperation,
    },
  });
  return response.data.data.types;
};

export const getTypeById = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: type.getTypesOperation,
      variables: { typeId: id },
    },
  });
  return response.data.data.type;
};

export const postType = async (data: CreateTypeDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: type.createTypeOperation,
      variables: data,
    },
  });
  return response.data.data;
};

export const putType = async (id: number, data: UpdateTypeDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: type.updateTypeOperation,
      variables: {
        updateTypeId: id,
        ...data,
      },
    },
  });
  return response.data.data;
};

export const deleteType = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: type.deleteTypeOperation,
      variables: { deleteTypeId: id },
    },
  });
  return response.data.data;
};

export const getGenerations = async () => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: generation.getGenerationsOperation,
    },
  });
  return response.data.data.generations;
};

export const getGenerationById = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: generation.getGenerationOperation,
      variables: { generationId: id },
    },
  });
  return response.data.data.generation;
};

export const postGeneration = async (data: CreateGenerationDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: generation.createGenerationOperation,
      variables: data,
    },
  });
  return response.data.data;
};

export const putGeneration = async (id: number, data: UpdateGenerationDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: generation.updateGenerationOperation,
      variables: {
        updateGenerationId: id,
        ...data,
      },
    },
  });
  return response.data.data;
};

export const deleteGeneration = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: generation.deleteGenerationOperation,
      variables: { deleteGenerationId: id },
    },
  });
  return response.data.data;
};

export const getAbilities = async () => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: ability.getAbilitiesOperation,
    },
  });
  return response.data.data.abilities;
};

export const getAbilityById = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: ability.getAbilityOperation,
      variables: { AbilityId: id },
    },
  });
  return response.data.data.ability;
};

export const postAbility = async (data: CreateAbilityDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: ability.createAbilityOperation,
      variables: data,
    },
  });
  return response.data.data;
};

export const putAbility = async (id: number, data: UpdateAbilityDto) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: ability.updateAbilityOperation,
      variables: {
        updateAbilityId: id,
        ...data,
      },
    },
  });
  return response.data.data;
};

export const deleteAbility = async (id: number) => {
  const response = await axios({
    method: "post",
    url: "/graphql",
    data: {
      query: ability.deleteAbilityOperation,
      variables: { deleteAbilityId: id },
    },
  });
  return response.data.data;
};
