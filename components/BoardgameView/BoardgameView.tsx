import { BoardgameType } from "@/types/boardgame";
import Cookie from "js-cookie";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../Button/Button";

type BoardgameViewProps = {
  boardgame: BoardgameType;
};

const BoardgameView = ({ boardgame }: BoardgameViewProps) => {
  const router = useRouter();

  const onDeleteBoardgame = async () => {
    try {
      const jwt = Cookie.get("boardgame-app-user-jwt-token");

      const response = await axios.delete(
        `http://localhost:3005/games/${boardgame.id}`,
        {
          headers: {
            Authorization: jwt,
          },
        }
      );

      if (response.status === 200) {
        router.push("/");
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={boardgame.imgUrl} />

        <Button
          title="Delete Boardgame"
          type="DANGER"
          onClick={onDeleteBoardgame}
        />
      </div>
      <div className={styles.description}>
        <h1>
          {boardgame.title} - {boardgame.bestPlayPersons}
        </h1>
        <h3>Rating: {boardgame.rating}</h3>
        <p>{boardgame.description}</p>
        <h4>Dificulty: {boardgame.dificulty}</h4>
        <h4>Can play: {boardgame.canPlayPersons}</h4>
        <h4>Play time: {boardgame.playTimeMin}</h4>
        <h4>Release year: {boardgame.releaseYear}</h4>
      </div>
    </div>
  );
};

export default BoardgameView;
