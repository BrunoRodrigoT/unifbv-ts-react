import api from "../config/api";
import { RickAndMortyResponse } from "../types/rickAndMorty";

export default function useRickAndMortyApi() {

    async function getCharacters(page: number): Promise<RickAndMortyResponse> {
        const response = await api.get("/character", {
            params: {
                page
            }
        });
        return response.data;
    }

    return {
        getCharacters
    }
}