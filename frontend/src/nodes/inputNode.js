import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [inputName, setInputName] = useState(data?.inputName || "input");

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  return (
    <baseNode
      id={id}
      title="Input"
      inputs={[]}              // no left handle
      outputs={["output"]}     // one right handle
    >
      <label>
        Name:
        <input
          type="text"
          value={inputName}
          onChange={handleChange}
        />
      </label>
    </baseNode>
  );
};
