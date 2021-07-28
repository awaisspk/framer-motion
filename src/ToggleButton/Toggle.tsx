import { useState } from "react";
import { motion } from "framer-motion";
import styles from './style.module.css'

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
      <motion.button
        className={styles.handle}
        layout
        transition={spring}
      />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 550,
  damping: 90
};

