import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(
    data?.model || "gpt-3.5"
  );

  const handleChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={["prompt"]}        // left handle
      outputs={["response"]}     // right handle
    >
      <label>
        Model:
        <select value={model} onChange={handleChange}>
          <option value="gpt-3.5">GPT-3.5</option>
          <option value="gpt-4">GPT-4</option>
        </select>
      </label>
    </BaseNode>
  );
};
