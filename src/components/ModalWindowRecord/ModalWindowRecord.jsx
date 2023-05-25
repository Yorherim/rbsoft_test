import { memo, useState } from "react";

import styles from "./ModalWindowRecord.module.css";
import { Button } from "../ui/Button/Button.jsx";
import { ModalWindow } from "../ui/ModalWindow/ModalWindow.jsx";

export const ModalWindowRecord = memo(({ active, setActive, addRecord }) => {
  console.log("rerender ModalWindowRecord");
  const [inputValue, setInputValue] = useState("");

  return (
    <ModalWindow active={active} setActive={setActive}>
      <div className={styles.text}>Введите значение</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        className={styles.input}
      />
      <Button
        title={"Отправить"}
        onClickHandler={() => addRecord(inputValue)}
        className={styles.btn}
      />
    </ModalWindow>
  );
});
