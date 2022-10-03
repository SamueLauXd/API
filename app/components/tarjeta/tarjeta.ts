import { Personajes } from "../../dataApi";

export const obtenerPersonaje = async (): Promise<Array<Personajes>> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data.results);
    return data.results;
};