import { memo, useEffect, useRef } from "react";

import styles from "./ModalWindow.module.css";
import { Button } from "../Button/Button.jsx";

export const ModalWindow = memo(
  ({ active, setActive, children, className, ...props }) => {
    const modalBackground = useRef(null);

    const handlerCloseModalWindow = (e) => {
      setActive(false);
    };

    const handlerOutsideClickModalWindow = (e) => {
      if (e.target === modalBackground.current) {
        setActive(false);
      }
    };

    return (
      <div
        className={styles.modal}
        onClick={handlerOutsideClickModalWindow}
        ref={modalBackground}
      >
        <div className={styles.block}>
          <div className={styles.content}>
            <Button
              title={"X"}
              onClickHandler={handlerCloseModalWindow}
              className={styles["btn-close"]}
            />
            {children}
          </div>
        </div>
      </div>
    );
  }
);
