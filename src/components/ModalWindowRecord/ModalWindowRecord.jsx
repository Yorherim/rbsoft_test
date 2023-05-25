import { memo, useState } from "react";

import styles from "./ModalWindowRecord.module.css";
import { Button, ModalWindow } from "../ui";

export const ModalWindowRecord = memo(({ active, setActive, addRecord }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const handlerAddRecord = () => {
    if (inputValue.trim().length === 0) {
      setErrorInput(true);
      return;
    }
    addRecord(inputValue);
    setInputValue("");
    setActive(false);
  };

  const handlerChangeInputValue = (e) => {
    if (errorInput) {
      setErrorInput(false);
    }
    setInputValue(e.currentTarget.value);
  };

  return (
    <ModalWindow active={active} setActive={setActive}>
      <div className={styles.text}>Введите значение</div>
      <input
        type="text"
        value={inputValue}
        onChange={handlerChangeInputValue}
        className={styles.input}
        onKeyUp={(e) => e.key === "Enter" && handlerAddRecord()}
        autoFocus
      />
      {errorInput && (
        <span className={styles.error}>Нужно вести значение!!!</span>
      )}
      <Button
        title={"Отправить"}
        onClickHandler={handlerAddRecord}
        className={styles.btn}
      />
    </ModalWindow>
  );
});
