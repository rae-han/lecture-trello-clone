import React from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import { Board, Card, Cointainer, Wrapper } from './styles.tsx';
import { useRecoilState } from 'recoil';
import { dataState, toDoState } from '../../store/atoms.ts';
import DragabbleCard from './DragabbleCard.tsx';
import DroppableBoard from './DroppableBoard.tsx';

const Index = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [data, setData] = useRecoilState(dataState);

  const onDragEnd = (args: DropResult) => {
    console.log('drag end');
    console.log(args);
    // draggableId - 뭘 움직였는지.
    // destination:
    //  - droppabledId - 어느 보드로 갔는지.
    //  - index - 어느 카드쪽으로 갔는지
    // source - 어디에서 출발했는지
    //  - droppableId - 어느 보드에서 출발 했는지.
    //  - index - 어느 카드에서 시작했는지

    const { draggableId, destination, source } = args;
    if (!destination) {
      return;
    }

    if (destination?.droppableId === source.droppableId) {
      setData((old) => {
        const copy = [...old[source.droppableId]];
        const item = copy.splice(source.index, 1);
        copy.splice(destination.index, 0, ...item);
        return {
          ...old,
          [source.droppableId]: copy,
        };
      });
    } else {
      setData((old) => {
        const s = [...old[source.droppableId]];
        const d = [...old[destination.droppableId]];
        const item = s.splice(source.index, 1);
        d.splice(destination.index, 0, ...item);
        return {
          ...old,
          [source.droppableId]: s,
          [destination.droppableId]: d,
        };
      });
    }

    // setToDos((cur) => {
    //   const copy = [...cur]; // copy
    //   console.log('delete item on', source.index);
    //   console.log(copy);
    //   const target = copy.splice(source.index, 1);
    //   console.log(target);
    //   console.log('delete item');
    //   console.log(copy);
    //   // copy.splice(destination?.index, 0, draggableId);
    //   console.log('put back', draggableId, 'on ', destination.index);
    //   copy.splice(destination?.index, 0, ...target);
    //   console.log(copy);
    //   return copy;
    // });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* 2 */}
      <Cointainer>
        <Wrapper>
          {/* 3 */}
          {/*<Droppable droppableId={'one'}>*/}
          {/*  {(provided) => (*/}
          {/*    <Board {...provided.droppableProps} ref={provided.innerRef}>*/}
          {/*      {toDos.map((toDo, index) => (*/}
          {/*        <DragabbleCard key={toDo} toDo={toDo} index={index} />*/}
          {/*      ))}*/}
          {/*      {provided.placeholder}*/}
          {/*    </Board>*/}
          {/*  )}*/}
          {/*</Droppable>*/}
          {/* 4 */}
          {/*{Object.entries(data).map(([key, value]) => (*/}
          {/*  <DroppableBoard toDos={value} boardId={key} key={key} />*/}
          {/*))}*/}
          {Object.keys(data).map((boardId) => (
            <DroppableBoard toDos={data[boardId]} boardId={boardId} key={boardId} />
          ))}
        </Wrapper>
      </Cointainer>
      {/* 1 */}
      {/*<Wrapper>*/}
      {/*  <Droppable droppableId={'one'}>*/}
      {/*    {(provided) => (*/}
      {/*      <Board {...provided.droppableProps} ref={provided.innerRef}>*/}
      {/*        {toDos.map((toDo, index) => (*/}
      {/*          <Draggable draggableId={toDo} key={toDo} index={index}>*/}
      {/*            {(provided) => (*/}
      {/*              <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>*/}
      {/*                {toDo}*/}
      {/*              </Card>*/}
      {/*            )}*/}
      {/*          </Draggable>*/}
      {/*        ))}*/}
      {/*        /!*<Draggable draggableId={'targetTest'} index={100}>*!/*/}
      {/*        /!*  {(provided) => (*!/*/}
      {/*        /!*    <Card ref={provided.innerRef} {...provided.draggableProps}>*!/*/}
      {/*        /!*      bye*!/*/}
      {/*        /!*      <span {...provided.dragHandleProps}>움직</span>*!/*/}
      {/*        /!*    </Card>*!/*/}
      {/*        /!*  )}*!/*/}
      {/*        /!*</Draggable>*!/*/}
      {/*        {provided.placeholder}*/}
      {/*      </Board>*/}
      {/*    )}*/}
      {/*  </Droppable>*/}
      {/*</Wrapper>*/}
    </DragDropContext>
  );
};

// # Droppable
// - arg[0] - provided = (innerRef, placeholdder?, droppableProps)를 가지고 있음.

// # Draggable
// - arg[0] - provided = (innerRef, dragHandleProps?, draggableProps)를 가지고 있음.
// 요소가 드래그 되기를 원한다면 draggableProps
// dragHandleProps - 전체가 드래그 되는게 아닌 특정 요소를 이용해서 드래그를 할수 있게 함.
// dragHandleProps - li가 핸들링하는데 trigger가 된다는걸 의미
// draggableProps -

export default Index;
