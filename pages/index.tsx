import axios from "axios";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { BoardgameType } from "@/types/boardgame";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const router = useRouter();

  const [boardgames, setBoardgames] = useState<BoardgameType[]>([]);

  const getAllBoardgames = async () => {
    try {
      const jwt = Cookie.get("boardgame-app-user-jwt-token");

      const result = await axios.get("http://localhost:3005/games", {
        headers: {
          Authorization: jwt,
        },
      });

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
    <>
      <Header />
      {/* <CardsWrapper boardgames={boardgames} /> */}
      <Footer />
    </>
  );
}
