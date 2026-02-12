import React from "react";

export const DraggableNode = ({ type, label, onClick }) => {
  const onDragStart = (event) => {
    const appData = { nodeType: type };
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="draggable-node"
      draggable
      onDragStart={onDragStart}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
