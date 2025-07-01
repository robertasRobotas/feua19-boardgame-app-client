import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { fetchAllBoardgames } from "@/api/game";

export default function Home() {
  const router = useRouter();

  const [boardgames, setBoardgames] = useState<BoardgameType[]>([]);

  const getAllBoardgames = async () => {
    try {
      const jwt = Cookie.get("boardgame-app-user-jwt-token");

      const result = await fetchAllBoardgames({ jwt: jwt! });

      setBoardgames(result.data.games);
    } catch (err) {
      console.log(err);

      // @ts-expect-error TODO: fix error later
      if (err.status === 401) {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    getAllBoardgames();
  }, []);

  return (
    <PageTemplate>
      <CardsWrapper boardgames={boardgames} />
    </PageTemplate>
  );
}
