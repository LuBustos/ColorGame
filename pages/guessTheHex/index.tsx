import { useEffect, useState } from "react";
import styles from "./box.module.css";
import swal from "sweetalert";
const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

const GuessTheHex = () => {
  //First - lvl intermidiete.
  const [colors, setColors] = useState<string[]>([]);
  const [hexToGuess, setHexToGuess] = useState<string>("");
  const [update,setUpdate] = useState(false);
 
  useEffect(() => {
    if(update){
        setUpdate(false);
    }
    let colorArray: string[] = [];
    const colorsTotal = Math.floor(Math.random() * 10 + 1); // numbers between 1 and 10
    const toGuess = Math.floor(Math.random() * colorsTotal);
    for (let i = 0; i < colorsTotal; i++) {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const hex = rgbToHex(red, green, blue);
      colorArray.push(hex);
    }
    setHexToGuess(colorArray[toGuess]);
    setColors(colorArray);
  }, [update]);

  const clickTheColor = (index: number) => {
    const hex = colors[index];
    if (hexToGuess === hex) {
      swal({
        title: "You guess the color!",
        text: "Do you want to play again?",
        icon: "success",
        buttons: ["Main page", "Again!"],
      }).then((value) => {
            console.log(value)
          if(value === "Again!"){
              setUpdate(true);
          }

          if(value === "Main page"){
              console.log("pa casa")
          }
      });
    } else {
      const arrayLessOne = colors.filter((x, i) => i !== index);
      setColors(arrayLessOne);
    }
  };

  return (
    colors.length > 0 && (
      <div className={styles.page}>
        <h1 className={styles.title}>Guess the color: {hexToGuess}</h1>
        <hr />
        <div className={styles.container}>
          {colors.map((x: string, index: number) => {
            return (
              <div
                className={styles.box}
                style={{ background: x, color: x }}
                onClick={() => clickTheColor(index)}
              ></div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default GuessTheHex;
