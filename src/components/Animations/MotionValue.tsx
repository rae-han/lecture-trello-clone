import React from 'react';
import { useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion';

import { Box } from './styles.tsx';

const MotionValue = () => {
  const x = useMotionValue(0);
  // x 가 바뀌어도 렌더링 되지 않는다.
  // 즉 React의 state에 있지 않다.

  const _scale = useTransform(x, [-800, 0, 800], [0.5, 1, 1.5]);
  // 뭘?, 기준, 출력 값
  const backgroundColor = useTransform(x, [-800, 0, 800], ['rgba(255, 0, 0)', 'rgba(0, 255, 0)', 'rgba(0, 0, 255)']);

  useMotionValueEvent(x, 'change', (lastest) => {
    console.log(lastest);
    // width.set(lastest);
  });

  useMotionValueEvent(_scale, 'change', (lastest) => {
    console.log(lastest);
    // width.set(lastest);
  });

  return <Box style={{ x, scale: _scale, backgroundColor }} drag="x" dragSnapToOrigin></Box>;
  // 유저가 박스를 드레그 하면 x가 업데이트 된다.
  // motions vlaue의 x를 style의 x와 연결했다.
  // style의 x 좌표가 바뀔때 마다 motion value가 업데이트 된다.
};

export default MotionValue;
