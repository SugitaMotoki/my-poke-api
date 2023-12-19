import axios from "axios";
import { CreatePokemonDto } from "./types";

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
  console.log(data);
  const response = await axios({
    method: "post",
    url: "/pokemon",
    data,
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
