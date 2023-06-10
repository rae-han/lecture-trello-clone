import React, { useState } from 'react';
import { Variants } from 'framer-motion';

import { GesturesBox } from './styles.tsx';

const Gestures = () => {
  const [isReverse, setIsReverse] = useState(false);

  const boxVariants: Variants = {
    hover: { scale: 1.2, rotate: 90 },
    reverseHover: { scale: 1.2, rotate: -3600 },
    click: {
      scale: 0.8,
      rotate: -90,
      borderRadius: '100%',
    },
  };

  return (
    <GesturesBox
      variants={boxVariants}
      whileHover={isReverse ? 'reverseHover' : 'hover'}
      whileTap="click"
      onClick={() => setIsReverse((prev) => !prev)}
    ></GesturesBox>
  );
};

export default Gestures;
