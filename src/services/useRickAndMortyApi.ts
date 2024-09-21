import api from "../config/api";

export default function useRickAndMortyApi() {

    async function getCharacters() {
        const response = await api.get("/character");
        return response.data;
    }

    return {
        getCharacters
    }
}