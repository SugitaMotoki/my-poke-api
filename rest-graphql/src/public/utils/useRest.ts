import axios from "axios";
import {
  CreatePokemonDto,
  CreateTypeDto,
  UpdateTypeDto,
  CreateAbilityDto,
  UpdateAbilityDto,
  CreateGenerationDto,
  UpdateGenerationDto,
} from "./types";

export const getPokemon = async () => {
  const response = await axios({
    method: "get",
    url: "/pokemon",
  });
  return response.data;
};

export const getPokemonById = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `/pokemon/${id}`,
  });
  return response.data;
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
    method: "delete",
    url: `/pokemon/${id}`,
  });
  return response.data;
};

export const getTypes = async () => {
  const response = await axios({
    method: "get",
    url: "/types",
  });
  return response.data;
};

export const getTypeById = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `/types/${id}`,
  });
  return response.data;
};

export const postType = async (data: CreateTypeDto) => {
  const response = await axios({
    method: "post",
    url: "/types",
    data,
  });
  return response.data;
};

export const putType = async (id: number, data: UpdateTypeDto) => {
  const response = await axios({
    method: "put",
    url: `/types/${id}`,
    data,
  });
  return response.data;
};

export const deleteType = async (id: number) => {
  const response = await axios({
    method: "delete",
    url: `/types/${id}`,
  });
  return response.data;
};

export const getGenerations = async () => {
  const response = await axios({
    method: "get",
    url: "/generations",
  });
  return response.data;
};

export const getGenerationById = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `/generations/${id}`,
  });
  return response.data;
};

export const postGeneration = async (data: CreateGenerationDto) => {
  const response = await axios({
    method: "post",
    url: "/generations",
    data,
  });
  return response.data;
};

export const putGeneration = async (id: number, data: UpdateGenerationDto) => {
  const response = await axios({
    method: "put",
    url: `/generations/${id}`,
    data,
  });
  return response.data;
};

export const deleteGeneration = async (id: number) => {
  const response = await axios({
    method: "delete",
    url: `/generations/${id}`,
  });
  return response.data;
};

export const getAbilities = async () => {
  const response = await axios({
    method: "get",
    url: "/abilities",
  });
  return response.data;
};

export const getAbilityById = async (id: number) => {
  const response = await axios({
    method: "get",
    url: `/abilities/${id}`,
  });
  return response.data;
};

export const postAbility = async (data: CreateAbilityDto) => {
  const response = await axios({
    method: "post",
    url: "/abilities",
    data,
  });
  return response.data;
};

export const putAbility = async (id: number, data: UpdateAbilityDto) => {
  const response = await axios({
    method: "put",
    url: `/abilities/${id}`,
    data,
  });
  return response.data;
};

export const deleteAbility = async (id: number) => {
  const response = await axios({
    method: "delete",
    url: `/abilities/${id}`,
  });
  return response.data;
};
