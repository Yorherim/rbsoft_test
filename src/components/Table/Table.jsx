import { memo, useEffect, useRef } from "react";

import styles from "./Table.module.css";

export const Table = memo(({ records }) => {
  const lastRecord = useRef(null);

  useEffect(() => {
    lastRecord.current.scrollIntoView({ behavior: "smooth" });
  }, [records]);

  return (
    <ul className={styles.table}>
      {records.map((record, i) => {
        return (
          <li
            key={`${i} ${Date.now()}`}
            className={styles["table-item"]}
            ref={i === records.length - 1 ? lastRecord : null}
          >
            {record}
          </li>
        );
      })}
    </ul>
  );
});
