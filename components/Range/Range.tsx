import React from "react";
import styles from "./styles.module.css";
import { Range } from "react-range";

type RangeInputProps = {
  value: number[];
  setValue: (value: number[]) => void;
};

const RangeInput = ({ value, setValue }: RangeInputProps) => {
  return (
    <div className={styles.wrapper}>
      <Range
        label="Can play persons"
        step={1}
        min={1}
        max={10}
        values={value!}
        onChange={(values) => setValue(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              backgroundColor: "#999",
            }}
          />
        )}
      />
      <div className={styles.value}>{value[0]}</div>
      <div className={styles.value}>{value[1]}</div>
    </div>
  );
};

export default RangeInput;
