import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={["input"]}
      outputs={["delayed"]}
    >
      <div>
        Adds delay to data
      </div>
    </BaseNode>
  );
};
