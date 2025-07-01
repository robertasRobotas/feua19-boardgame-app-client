import React, { useState } from "react";
import styles from "./styles.module.css";
import RangeInput from "../Range/Range";
import { getRangeArray } from "./helper";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { insertGame } from "@/api/game";

const GameInsertForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [imgUrl, setImgUrl] = useState<string>();
  const [releaseYear, setReleaseYear] = useState<string>();
  const [playTimeMin, setPlayTimeMin] = useState<string>();
  const [bestStartPlayAtAge, setBestStartPlayAtAge] = useState<string>();
  const [rating, setRating] = useState<string>();
  const [dificulty, setDificulty] = useState<string>();
  const [boxSize, setBoxSize] = useState<string>();
  const [ratingCount, setRatingCount] = useState<string>();
  const [canPlayPersons, setCanPlayPersons] = useState<number[]>([1, 10]);
  const [bestPlayPersons, setBestPlayPersons] = useState<number[]>([1, 10]);

  const handleSubmit = async () => {
    try {
      const game = {
        title,
        description,
        imgUrl,
        releaseYear,
        playTimeMin,
        bestStartPlayAtAge,
        rating,
        dificulty,
        boxSize,
        ratingCount,
        canPlayPersons: getRangeArray(canPlayPersons),
        bestPlayPersons: getRangeArray(bestPlayPersons),
      };

      const jwtToken = Cookies.get("boardgame-app-user-jwt-token");

      const response = await insertGame({ jwt: jwtToken!, game });

      if (response.status === 200 || response.status === 201) {
        console.log("Game created successfully");
        toast.success("Game created successfully");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        console.log("Game creation failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        value={title}
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        value={description}
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <input
        value={imgUrl}
        placeholder="Img url"
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />

      <input
        value={releaseYear}
        placeholder="Release year"
        onChange={(e) => {
          setReleaseYear(e.target.value);
        }}
      />

      <input
        value={playTimeMin}
        placeholder="Play time"
        onChange={(e) => {
          setPlayTimeMin(e.target.value);
        }}
      />

      <input
        value={bestStartPlayAtAge}
        placeholder="Best start age"
        onChange={(e) => {
          setBestStartPlayAtAge(e.target.value);
        }}
      />

      <input
        value={rating}
        placeholder="Rating"
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />

      <input
        value={dificulty}
        placeholder="Dificulty"
        onChange={(e) => {
          setDificulty(e.target.value);
        }}
      />

      <input
        value={boxSize}
        placeholder="Box size"
        onChange={(e) => {
          setBoxSize(e.target.value);
        }}
      />

      <input
        value={ratingCount}
        placeholder="Rating count"
        onChange={(e) => {
          setRatingCount(e.target.value);
        }}
      />

      <RangeInput value={canPlayPersons} setValue={setCanPlayPersons} />

      <RangeInput value={bestPlayPersons} setValue={setBestPlayPersons} />

      <button onClick={handleSubmit}>Submit</button>

      <ToastContainer />
    </div>
  );
};

export default GameInsertForm;
