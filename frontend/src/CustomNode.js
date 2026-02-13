import React, { useState } from "react";

const CustomNode = ({ data }) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <div className="base-node" style={{ width: 200 }}>
      <div className="node-title">
        {data.label}
        <div>
          <button onClick={() => setMinimized(!minimized)}>
            {minimized ? "Max" : "Min"}
          </button>
          <button>⚙</button>
          <button>❌</button>
        </div>
      </div>
      {!minimized && <input placeholder="Value" />}
    </div>
  );
};

export default CustomNode;
