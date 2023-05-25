import { memo } from "react";

import styles from "./Button.module.css";

export const Button = memo(({ title, onClickHandler, className, ...props }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.btn} ${className}`}
      {...props}
    >
      {title.trim()}
    </button>
  );
});
