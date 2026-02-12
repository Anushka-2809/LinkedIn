import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={["a", "b"]}
      outputs={["result"]}
    >
      <div>
        Performs basic math operation
      </div>
    </BaseNode>
  );
};
