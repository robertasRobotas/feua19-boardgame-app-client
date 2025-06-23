import Header from "@/components/Header/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);

  const fetchBoardgame = async (id: string) => {
    try {
      const jwt = Cookie.get("boardgame-app-user-jwt-token");
      const response = await axios.get(`http://localhost:3005/games/${id}`, {
        headers: { Authorization: jwt },
      });

      setGame(response.data.game);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBoardgame("226a3ced-a8d0-4fb0-9532-02f52f8c8189");
  }, []);

  return (
    <div>
      <Header />

      {game ? <>{game.title}</> : <>Loading</>}
    </div>
  );
};

export default BoardgamePage;
