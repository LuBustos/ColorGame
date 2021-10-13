import router from "next/router";
import { useRef } from "react";
import styles from "./index.module.css";

const Home = () => {
  const toPlayGame = (difficult: number) =>
    router.push({ pathname: "/guessTheHex", query: { difficult: difficult } });
  const difficultRef = useRef<HTMLSelectElement>(null);
  const difficultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.body}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Color game!</h1>
        <hr />
      </div>
      <div>
        <p>
          Color game is an imitation of Guess the Hex! this game is developed in
          Next.js
        </p>
      </div>
      <div>
        <p>Select your difficult!</p>
        <div>
          <select ref={difficultRef} className={styles.select}>
            {difficultArray.map((x, i) => (
              <option value={x} key={i}>
                {x}
              </option>
            ))}
          </select>
          <button
            className={styles.button}
            onClick={() => toPlayGame(Number(difficultRef.current?.value))}
          >
            Play!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
