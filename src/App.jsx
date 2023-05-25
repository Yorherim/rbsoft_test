import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./App.module.css";

import data from "./data.json";
import { Slider, ModalWindowRecord, Table } from "./components";
import { Button } from "./components/ui";
import { recordActions } from "./state/reducers/record.reducer.js";

function App() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.records);
  const [activeModalWindowRecord, setActiveModalWindowRecord] = useState(false);

  const addRecord = useCallback((record) => {
    dispatch(recordActions.addRecord(record));
  }, []);

  const openModalWindowRecord = useCallback(() => {
    setActiveModalWindowRecord(true);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles["table-side"]}>
        <Button
          title={"Добавить запись"}
          onClickHandler={openModalWindowRecord}
          className={styles["add-record-btn"]}
        />

        {records.length > 0 && <Table records={records} />}

        <span className={styles.result}>Итого: {records.length}</span>
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
