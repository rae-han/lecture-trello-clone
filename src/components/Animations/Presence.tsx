import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Box } from './styles.tsx';

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 80,
  },
};

const Presence = () => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <>
      <button onClick={toggleShowing}>toggle!</button>
      <AnimatePresence>
        {showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null}
      </AnimatePresence>
    </>
  );
};

export default Presence;
