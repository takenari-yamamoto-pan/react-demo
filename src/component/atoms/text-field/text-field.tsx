import React, { ComponentProps, FC, PropsWithChildren } from "react";
import styles from "../text-field/text-field.module.scss";

type Props = {} & ComponentProps<"input">;

export const TextField: FC<PropsWithChildren<Props>> = ({ ...props }) => {
  return <input {...props} type="text" className={styles.input} />;
};
