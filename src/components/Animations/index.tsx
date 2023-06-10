import React from 'react';
import { motion } from 'framer-motion';

import { Box, BoxWrapper, Wrapper } from './styles.tsx';
import Animation from './Animation.tsx';
import Variants from './Variants.tsx';
import Gestures from './Gestures.tsx';
import Drag from './Drag.tsx';
import MotionValue from './MotionValue.tsx';
import Scroll from './Scroll.tsx';
import Path from './Path.tsx';
import Presence from './Presence.tsx';
import Slider from './Slider.tsx';
import Layout from './Layout.tsx';
import Final from './Final.tsx';

const Animations = () => {
  return (
    <Wrapper>
      <Final />
      <BoxWrapper>
        <Layout />
      </BoxWrapper>
      <BoxWrapper>
        <Slider />
      </BoxWrapper>
      <Presence />
      <Animation />
      <Variants />
      <Gestures />
      <Drag />
      <MotionValue />
      <Scroll />
      <Path />
    </Wrapper>
  );
};

export default Animations;
