import React from 'react';
import DragabbleCard from './DragabbleCard.tsx';
import { Droppable } from '@hello-pangea/dnd';
import { Board, Boards, Form, Title } from './styles.tsx';
import { useForm } from 'react-hook-form';
import { dataState, ToDo } from '../../store/atoms.ts';
import { useRecoilState } from 'recoil';

interface Props {
  toDos: ToDo[];
  boardId: string;
}

interface IFormData {
  toDo: string;
}

const DroppableBoard = ({ toDos, boardId }: Props) => {
  const [data, setData] = useRecoilState(dataState);
  const { register, setValue, handleSubmit } = useForm<IFormData>();
  const onValid = (data: IFormData) => {
    setData((prev) => {
      const newData = {
        id: Date.now(),
        text: data.toDo,
      };

      return {
        ...prev,
        [boardId]: [newData, ...prev[boardId]],
      };
    });
    setValue('toDo', '');
  };

  return (
    <Boards>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input type="text" placeholder={`Add task on ${boardId}`} {...register('toDo', { required: true })} />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Board
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo.id} toDoId={toDo.id} toDoText={toDo.text} index={index} />
            ))}
            {provided.placeholder}
          </Board>
        )}
      </Droppable>
    </Boards>
  );
};

// 코드 챌린지
// 1. 스타일 꾸미기
// 2. 작성한 모든 투두를 localStorage에 저장 및 로드하기
// 3. 작성한 투두 삭제하기
// 4. 보드 생성하기
// 5. 보드끼리도 순서 바꾸기
//
// 추가로 구현해볼 만한 기능
// 1. 보드가 가진 투두 전체 삭제하기
// 2. 보드 삭제하기
// 3. 작성한 투두 수정하기
// 4. 보드 제목 수정하기

export default DroppableBoard;
