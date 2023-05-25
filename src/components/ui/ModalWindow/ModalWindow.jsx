import styles from "./ModalWindow.module.css";
import { Button } from "../Button/Button.jsx";
import { memo } from "react";

export const ModalWindow = memo(
  ({ active, setActive, children, className, ...props }) => {
    console.log("rerender ModalWindow");
    return (
      <div className={styles.modal}>
        <div className={styles.block}>
          <div className={styles.content}>
            <Button
              title={"X"}
              onClickHandler={() => setActive(false)}
              className={styles["btn-close"]}
            />
            {children}
          </div>
        </div>
      </div>
    );
  }
);
