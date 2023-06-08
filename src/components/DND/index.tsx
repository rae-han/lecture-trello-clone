import React from 'react';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';

const Index = () => {
  const onDragEnd = () => {
    console.log('drag end');
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId={'one'}>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable draggableId={'first'} index={1}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    hello
                  </li>
                )}
              </Draggable>
              <Draggable draggableId={'second'} index={2}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    bye
                    <span {...provided.dragHandleProps}>움직</span>
                  </li>
                )}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
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
