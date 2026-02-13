import React, { useState } from "react";
import ReactFlow, { addEdge, Background } from "react-flow-renderer";
import { PipelineToolbar } from "./toolbar";
import CustomNode from "./CustomNode"; // new node component with minimize/maximize

let id = 0;
const getId = () => `node_${id++}`;

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const addNode = (type) => {
    const newNode = {
      id: getId(),
      type: "custom",
      data: { label: type },
      position: { x: 100 + id * 20, y: 100 + id * 20 },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <PipelineToolbar addNode={addNode} />

      <div style={{ flex: 1 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={{ custom: CustomNode }}
          fitView
        >
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
