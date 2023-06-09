import React from 'react';
import { motion } from 'framer-motion';

import { Box, Wrapper } from './styles.tsx';
import Animation from './Animation.tsx';
import Variants from './Variants.tsx';

const Animations = () => {
  return (
    <Wrapper>
      <Animation />
      <Variants />
    </Wrapper>
  );
};

export default Animations;
