import { motion } from 'framer-motion';
import './styles.css';

const ButtonVarient = {
  tap: { scale: 0.9 },
  hover: { scale: 1.2, transition: { duration: 1 } },
};

function onTapCancel(event: any, info: any) {
  console.log(info.point.x, info.point.y);
}

const Button = () => {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={ButtonVarient}
      className="Button"
      onTapCancel={onTapCancel}
      onPan={(event, info) => console.log(info.velocity.x, info.point.y)}
    >
      Sign up
    </motion.button>
  );
};

export default Button;
