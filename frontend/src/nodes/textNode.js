import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
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
    </BaseNode>
  );
};
