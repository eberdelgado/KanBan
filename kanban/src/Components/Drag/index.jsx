import React, { useRef, useState } from 'react';

const DraggableComponent = () => {
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event) => {
    setIsDragging(true);
    // Configura o estilo de arraste (opcional)
    event.dataTransfer.effectAllowed = 'move';
    // Define os dados a serem transferidos durante o arraste
    event.dataTransfer.setData('text/plain', event.target.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={draggableRef}
      id="draggable-element"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: "red",
      }}
    >
      {/* Conteúdo do componente */}
      Arraste-me!
    </div>
  );
};

export default DraggableComponent;