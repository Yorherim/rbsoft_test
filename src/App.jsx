import { useCallback, useState } from "react";

import styles from "./App.module.css";
import { Slider, ModalWindow } from "./components";
import data from "./data.json";
import { Button } from "./components/ui/Button/Button.jsx";
import { ModalWindowRecord } from "./components/ModalWindowRecord/ModalWindowRecord.jsx";
import { useDispatch, useSelector } from "react-redux";
import { recordActions } from "./state/reducers/record.reducer.js";

function App() {
  console.log("rerender app");
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);
  const [activeModalWindowRecord, setActiveModalWindowRecord] = useState(true);

  const addRecord = useCallback((record) => {
    console.log(record);
    dispatch(recordActions.addRecord(record));
  }, []);

  const openModalWindowRecord = useCallback(() => {
    setActiveModalWindowRecord(true);
  }, []);

  return (
    <div className={styles.app}>
      <div>
        <Button
          title={"Добавить запись"}
          onClickHandler={openModalWindowRecord}
        />
        <div className={styles.table}>table</div>
      </div>

      <Slider pictures={data.pictures} className={styles.slider} />

      {activeModalWindowRecord && (
        <ModalWindowRecord
          active={activeModalWindowRecord}
          setActive={setActiveModalWindowRecord}
          addRecord={addRecord}
        />
      )}
    </div>
  );
}

export default App;
