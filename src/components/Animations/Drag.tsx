import React, { useRef } from 'react';

import { BiggerBox, Box } from './styles.tsx';

const boxVariants = {
  whileDrag: {
    backgroundColor: 'rgba(46, 204, 113)',
  },
};

const Drag = () => {
  const biggerBox = useRef<HTMLDivElement>(null);

  const limit = {
    top: 50,
    right: 50,
    bottom: -50,
    left: -50,
  };

  return (
    <BiggerBox ref={biggerBox}>
      {/*<Box variants={boxVariants} drag dragConstraints={limit} whileDrag="whileDrag"></Box>*/}
      <Box variants={boxVariants} drag dragConstraints={biggerBox} whileDrag="whileDrag"></Box>
    </BiggerBox>
  );
};

// drag 속성에 x, y를 주면 해당 방향으로만 움직인다.
// dragConstraints - 제약이 있는 box로 드레깅이 허용될 수 있는 영역
// dragSnapToOrigin 원래 자리로
// elastic - 제가 당기는 것과 또 다른 힘이 있어 덜 간다. 이게 0이면 바깥 박스에 머무른다.

export default Drag;
