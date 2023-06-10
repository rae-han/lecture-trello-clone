import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll, useTransform, useViewportScroll } from 'framer-motion';

import { Box, ScrollBox } from './styles.tsx';

const Scroll = () => {
  const scrollBox = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    container: scrollBox,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log('scrollY : ', latest);
    // px 단위
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('scrollYProgress : ', latest);
    // 0 ~ 1
  });

  return (
    <ScrollBox style={{ scale }} ref={scrollBox}>
      <div style={{ height: '200vh' }}></div>
    </ScrollBox>
  );
};

export default Scroll;
