import Header from "@/components/Header/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import BoardgameView from "@/components/BoardgameView/BoardgameView";
import { useRouter } from "next/router";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);

  const router = useRouter();

  const id = router.query.id as string;

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
    if (id) {
      fetchBoardgame(id);
    }
  }, [id]);

  return (
    <div>
      <Header />

      {game ? <BoardgameView boardgame={game} /> : <>Loading</>}
    </div>
  );
};

export default BoardgamePage;
