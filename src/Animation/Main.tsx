import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import './style.css';

export default function Main2() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map((item) => (
          <Item2 key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

const Item2 = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClose = () => setIsOpen(!isOpen);

  return (
    <motion.li
      layout
      initial={{ borderRadius: 10 }}
      onClick={toggleClose}
    >
      <motion.div layout className="avatar" />
      <AnimatePresence>{isOpen && <Content2 />}</AnimatePresence>
    </motion.li>
  );
};

const Content2 = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
};

const items = [0, 1, 2];
