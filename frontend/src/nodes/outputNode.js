import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(
    data?.outputName || "output"
  );

  const handleChange = (e) => {
    setOutputName(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={["input"]}      // one left handle
      outputs={[]}            // no right handles
    >
      <label>
        Name:
        <input
          type="text"
          value={outputName}
          onChange={handleChange}
        />
      </label>
    </BaseNode>
  );
};
