import { motion, useDragControls } from 'framer-motion';
import './styles.css';
const DragControl = () => {
  const dragControls = useDragControls();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }

  return (
    <>
      <div onPointerDown={startDrag} className="DragControl" />
      <motion.div
        drag="x"
        dragControls={dragControls}
        className="Drag"
        dragDirectionLock
        onDirectionLock={(axis) => console.log(axis)}
      />
    </>
  );
};

export default DragControl;
