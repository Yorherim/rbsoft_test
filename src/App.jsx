import styles from "./App.module.css";
import { Slider } from "./components";
import data from "./data.json";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.table}>table</div>
      <Slider pictures={data.pictures} className={styles.slider} />
    </div>
  );
}

export default App;
