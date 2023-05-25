import { useState } from "react";

import styles from "./App.module.css";
import { Slider, ModalWindow } from "./components";
import data from "./data.json";
import { Button } from "./components/ui/Button/Button.jsx";
import { ModalWindowRecord } from "./components/ModalWindowRecord/ModalWindowRecord.jsx";

function App() {
  const [records, setRecords] = useState([]);
  const [activeModalWindow, setActiveModalWindow] = useState(true);

  const addRecord = (record) => {
    setRecords((prev) => [...prev, record]);
  };

  return (
    <div className={styles.app}>
      <div>
        <Button
          title={"Добавить запись"}
          onClickHandler={() => setActiveModalWindow(true)}
        />
        <div className={styles.table}>table</div>
      </div>

      <Slider pictures={data.pictures} className={styles.slider} />

      {activeModalWindow && (
        <ModalWindowRecord
          active={activeModalWindow}
          setActive={setActiveModalWindow}
          addRecord={addRecord}
        />
      )}
    </div>
  );
}

export default App;
