import { useState } from 'react';
import { baseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <baseNode
      id={id}
      title="Text"
      inputs={[]}          // no left handles for now
      outputs={["output"]} // one right handle
    >
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={handleTextChange}
        />
      </label>
    </baseNode>
  );
};
