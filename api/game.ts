import { config } from "@/config";
import axios from "axios";

type FetchBoardgamesProps = {
  jwt: string;
};

export const fetchAllBoardgames = async ({ jwt }: FetchBoardgamesProps) => {
  try {
    const response = await axios.get(`${config.BASE_URL}/games`, {
      headers: {
        Authorization: jwt,
      },
    });

    return response;
  } catch (err) {
    throw err;
  }
};

type InsertGameProps = {
  jwt: string;
  game: object;
};

export const insertGame = async ({ jwt, game }: InsertGameProps) => {
  try {
    const response = await axios.post(`${config.BASE_URL}/games`, game, {
      headers: {
        Authorization: jwt,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

type FetchBoardgameProps = {
  jwt: string;
  id: string;
};

export const fetchBoardgameById = async ({ id, jwt }: FetchBoardgameProps) => {
  try {
    const response = await axios.get(`${config.BASE_URL}/games/${id}`, {
      headers: { Authorization: jwt },
    });

    return response;
  } catch (err) {
    throw err;
  }
};
