import React, { ComponentProps, FC, PropsWithChildren } from "react";
import styles from "../button/button.module.scss";

type Props = {} & ComponentProps<"button">;

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className={styles.container}>
      {children}
    </button>
  );
};
