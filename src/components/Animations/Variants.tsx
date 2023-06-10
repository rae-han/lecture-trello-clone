import React from 'react';

import { Circle, VariantsBox } from './styles.tsx';

const myVariants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
};

const boxVariants = {
  initial: {
    opacity: 1,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const circleVariants = {
  initial: {
    y: 64,
    opacity: 0,
  },
  animate: {
    duration: 1,
    y: 0,
    opacity: 1,
  },
};

const Variants = () => {
  return (
    <VariantsBox variants={boxVariants} initial="initial" animate="animate">
      {/* 기본적으로 부모의 variants는 자식에게 자동으로 붙는다. */}
      {/* 그래서 initial, animate 도 자동으로 들어가 있다. 또 적을 필요 없다. */}
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
      <Circle variants={circleVariants} />
    </VariantsBox>
  );
};

export default Variants;
