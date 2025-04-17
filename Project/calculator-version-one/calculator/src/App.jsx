import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => console.log(buttonText)
  return (
    <div className={styles.calculator}>
      <Display displayValue={calValue}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  )
}

export default App;
