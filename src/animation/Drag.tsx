import { motion } from 'framer-motion';
import { useRef } from 'react';
import './styles.css';

const Drag = () => {
  const dragContrains = useRef(null);
  return (
    <motion.div className="dragContainer" ref={dragContrains}>
      <motion.div
        drag="x"
        dragPropagation
        className="Drag"
        dragConstraints={dragContrains}
        dragElastic={true}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      ></motion.div>
    </motion.div>
  );
};

export default Drag;
