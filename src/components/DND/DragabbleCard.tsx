import React from 'react';
import { Card } from './styles.tsx';
import { Draggable } from '@hello-pangea/dnd';
import { ToDo } from '../../store/atoms.ts';

interface Props {
  toDoId?: number;
  toDoText?: string;
  // toDo: ToDo;
  index: number;
}

const DragabbleCard = ({ toDoId, toDoText, index }: Props) => {
  return (
    <Draggable draggableId={String(toDoId)} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
