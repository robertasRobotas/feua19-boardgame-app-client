import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import BoardgameView from "@/components/BoardgameView/BoardgameView";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { fetchBoardgameById } from "@/api/game";

const BoardgamePage = () => {
  const [game, setGame] = useState<BoardgameType | null>(null);

  const router = useRouter();

  const id = router.query.id as string;

  const fetchBoardgame = async (id: string) => {
    try {
      const jwt = Cookie.get("boardgame-app-user-jwt-token");
      const response = await fetchBoardgameById({ id: id, jwt: jwt! });

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
    <PageTemplate>
      {game ? <BoardgameView boardgame={game} /> : <>Loading</>}
    </PageTemplate>
  );
};

export default BoardgamePage;
