import { BoardgameType } from "@/types/boardgame";

import styles from "./styles.module.css";

type BoardgameViewProps = {
  boardgame: BoardgameType;
};

const BoardgameView = ({ boardgame }: BoardgameViewProps) => {
  console.log(boardgame);

  const onDeleteBoardgame = () => {
    // delete logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={boardgame.imgUrl} />

        <button onClick={onDeleteBoardgame}>Delete</button>
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
