import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(
    data?.inputName || "input"
  );

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      inputs={[]}               // No left handles
      outputs={["output"]}      // One right handle
    >
      <label>
        Name:
        <input
          type="text"
          value={inputName}
          onChange={handleChange}
        />
      </label>
    </BaseNode>
  );
};
