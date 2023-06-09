import React from 'react';

import { Box } from './styles.tsx';

const Animation = () => {
  return (
    <Box
      initial={{ scale: 0 }}
      transition={{
        type: 'spring',
        duration: 1,
        // stiffness: 10, // 현실적이게? 만듦
        // damping: 4, // 반동력
        // bounce: 0.25,
        delay: 0.5,
      }}
      animate={{
        scale: 1,
        rotateZ: 1440,
      }}
    ></Box>
  );
};

export default Animation;
