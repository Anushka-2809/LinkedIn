import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, title, inputs = [], outputs = [], children }) => {
  return (
    <div
      style={{
        display: "inline-block",
        minWidth: 100,
        border: "1px solid black",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "lightblue",
        position: "relative",
      }}
    >
      {/* Node Title */}
      <div style={{ marginBottom: 10, fontWeight: "bold" }}>{title}</div>

      {/* Left Handles (Inputs) */}
      {inputs.map((inputName, index) => (
        <Handle
          key={inputName}
          type="target"
          position={Position.Left}
          id={`${id}-${inputName}`}
          style={{ top: 40 + index * 25, background: "#555" }}
        />
      ))}

      {/* Right Handles (Outputs) */}
      {outputs.map((outputName, index) => (
        <Handle
          key={outputName}
          type="source"
          position={Position.Right}
          id={`${id}-${outputName}`}
          style={{ top: 40 + index * 25, background: "#555" }}
        />
      ))}

      {/* Node Content */}
      <div>{children}</div>
    </div>
  );
};
