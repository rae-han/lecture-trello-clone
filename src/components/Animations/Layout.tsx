import React, { useState } from 'react';

import { Circle, LayoutBox } from './styles.tsx';

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <button onClick={onClick}>clicked!</button>
      <LayoutBox
        style={{ justifyContent: clicked ? 'flex-start' : 'center', alignItems: clicked ? 'flex-start' : 'center' }}
      >
        <Circle layout />
      </LayoutBox>
      <LayoutBox>{clicked ? <Circle layoutId="circle" style={{ borderRadius: 50 }} /> : null}</LayoutBox>
      <LayoutBox>{!clicked ? <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} /> : null}</LayoutBox>
    </>
  );
};

export default Layout;
