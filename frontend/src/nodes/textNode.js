import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(
    data?.text || ""
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={["input"]}       // left handle
      outputs={["output"]}     // right handle
    >
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
};
