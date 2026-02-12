import { Handle, Position } from "reactflow";

export const baseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div
      style={{
        width: 200,
        minHeight: 80,
        border: "1px solid black",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "white",
        position: "relative"
      }}
    >
      {/* Node Title */}
      <div style={{ marginBottom: 10, fontWeight: "bold" }}>
        {title}
      </div>

      {/* Left Handles (Inputs) */}
      {inputs.map((inputName, index) => (
        <Handle
          key={inputName}
          type="target"
          position={Position.Left}
          id={`${id}-${inputName}`}
          style={{ top: 40 + index * 25 }}
        />
      ))}

      {/* Right Handles (Outputs) */}
      {outputs.map((outputName, index) => (
        <Handle
          key={outputName}
          type="source"
          position={Position.Right}
          id={`${id}-${outputName}`}
          style={{ top: 40 + index * 25 }}
        />
      ))}

      {/* Node Content */}
      <div>{children}</div>
    </div>
  );
};
