import { useState } from "react";
import styles from "../animation1/styles.module.css";
import Box from "./Box";
import Refresh from "./Refresh";

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className={styles.Box}>
        <Box key={count} />
      </div>
    </>
  );
};

export default Main;
