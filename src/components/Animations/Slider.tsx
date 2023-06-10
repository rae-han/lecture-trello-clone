import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { SliderBox, SliderWrapper } from './styles.tsx';

const box = {
  invisible: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({ x: back ? 500 : -500, opacity: 0, scale: 0, transition: { duration: 1 } }),
};
const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setIsBack(false);
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setIsBack(true);
  };

  return (
    <SliderWrapper>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
      <AnimatePresence custom={isBack}>
        <SliderBox custom={isBack} variants={box} initial="invisible" animate="visible" exit="exit" key={visible}>
          {visible}
        </SliderBox>

        {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>*/}
        {/*  i === visible ? (*/}
        {/*    <SliderBox variants={box} initial="invisible" animate="visible" exit="exit" key={i}>*/}
        {/*      {i}*/}
        {/*    </SliderBox>*/}
        {/*  ) : null,*/}
        {/*)}*/}
      </AnimatePresence>
    </SliderWrapper>
  );
};

export default Slider;

// next 를 누르면 보이는 exit animation이 실행되는 동안
// 다음 box의 entry가 거의 동시에 실행 된다.
// 지금은 mode="wait" 이걸 바꾸려면 exitBeforeEnter를 사용하면 된다.

// prev후 next 또는 next후 prev 버튼을 클릭할때 애니메이션이 제대로 적용되지 않는 버그가 있습니다.
// setValue() 함수는 비동기적으로 값을 바꾸기 때문에 useEffect() 함수를 사용하여 값이 back 값이 완전히 바뀐 후 setVisible()을 호출하여 Box를 재 랜더링 해야합니다.
//
//   해결 방안:
//   back을 object로 바꿉니다. object를 사용하는 이유는 같은 값의 오브젝트를 set 하더라도 값이 바뀌었다고 인지하기 때문입니다.
//   useEffect를 사용하여 back이 완전히 바뀌었을 때, setVisible() 함수를 호출하여 Box를 재 랜더링 합니다.
//
//   const [visibleIdx, setVisibleIdx] = useState(1);
// const [back, setBack] = useState({ value: false });
//
// const nextPlease = () => {
//   setBack({ value: false });
// };
// const prevPlease = () => {
//   setBack({ value: true });
// };
//
// useEffect(() => {
//   if (back.value) {
//     setVisibleIdx((cur) => (cur !== 1 ? cur - 1 : cur));
//   } else {
//     setVisibleIdx((cur) => (cur !== 10 ? cur + 1 : cur));
//   }
// }, [back]);
//
// https://github.com/jijiseong/react_animation/tree/8e624ce9f5680b2cfc03bb92c014fc9e2fe929a4
