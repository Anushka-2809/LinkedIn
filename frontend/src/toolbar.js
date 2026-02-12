import React from "react";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">   {/* ✅ Uses your CSS toolbar */}
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="logger" label="Logger" />
      <DraggableNode type="filter" label="Filter" />
      <DraggableNode type="delay" label="Delay" />
    </div>
  );
};
