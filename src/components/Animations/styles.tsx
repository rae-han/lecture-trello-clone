import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  overflow-x: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 100px 20px;
  align-items: center;
  gap: 100px;
`;

export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const VariantsBox = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const Circle = styled(motion.div)`
  place-self: center;
  background-color: white;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const GesturesBox = styled(Box)`
  background-color: white;
`;

export const BiggerBox = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 480px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
`;

export const ScrollBox = styled(Box)`
  overflow-y: scroll;
`;

export const Svg = styled.svg`
  width: 200px;
  height: 200px;
  color: white;

  path {
    stroke: white;
    stroke-width: 2;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SliderBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 200px;
  font-size: 28px;
`;

export const LayoutBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:nth-child(1),
  div:nth-child(4) {
    grid-column: span 2;
  }
`;

export const GridBox = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
