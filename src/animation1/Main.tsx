import { useState } from "react";
import styles from "../animation1/styles.module.css";
import Box from "./Box";

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.Box}>
        <Box />
      </div>
    </>
  );
};

export default Main;
