import { BoardgameType } from "@/types/boardgame";
import Card from "../Card/Card";
import styles from "./styles.module.css";

type CardsWrapperProps = {
  boardgames: BoardgameType[];
};

const CardsWrapper = ({ boardgames }: CardsWrapperProps) => {
  return (
    <div className={styles.container}>
      {boardgames.map((b) => {
        return (
          <Card
            key={b.id}
            imgUrl={b.imgUrl}
            title={b.title}
            description={b.description}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
