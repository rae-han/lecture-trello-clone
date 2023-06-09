import styled from 'styled-components';

export const Cointainer = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const Boards = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px 10px 20px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface BoardProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

export const Board = styled.div<BoardProps>`
  flex: 1 0;
  padding: 30px 10px 20px;
  //background-color: ${(props) => props.theme.boardColor};
  background-color: ${(props) => (props.isDraggingOver ? 'pink' : props.isDraggingFromThis ? 'red' : 'blue')};
  border-radius: 5px;
`;

interface CardProps {
  isDragging: boolean;
}

export const Card = styled.div<CardProps>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => (props.isDragging ? 'tomato' : props.theme.cardColor)};
  box-shadow: ${(props) => (props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 1)' : 'none')};
`;

export const Form = styled.form`
  input {
    width: 100%;
  }
`;
