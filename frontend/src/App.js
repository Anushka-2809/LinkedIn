import React, { useState } from "react";
import { PipelineToolbar } from "./toolbar"; // Named import from toolbar.js
import Node from "./Node"; // Default import from Node.js (must exist in src/)

function App() {
  const [nodes, setNodes] = useState([]);

  // Add a new node when toolbar button is clicked
  const addNode = (type) => {
    const newNode = {
      id: Date.now(),
      type,
      title: `${type} Node`,
      value: ""
    };
    setNodes([...nodes, newNode]);
  };

  // Update node input value
  const handleChange = (id, value) => {
    setNodes(
      nodes.map((node) => (node.id === id ? { ...node, value } : node))
    );
  };

  // Submit nodes
  const handleSubmit = () => {
    console.log("Nodes submitted:", nodes);
    alert("Check console for submitted node data!");
  };

  return (
    <div>
      {/* Toolbar */}
      <PipelineToolbar addNode={addNode} />

      {/* Node cards */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {nodes.map((node) => (
          <Node key={node.id} title={node.title}>
            <input
              type="text"
              value={node.value}
              placeholder="Enter value"
              onChange={(e) => handleChange(node.id, e.target.value)}
            />
          </Node>
        ))}
      </div>

      {/* Submit Button */}
      {nodes.length > 0 && (
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
}

export default App;
