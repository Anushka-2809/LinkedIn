import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="API"
      inputs={["request"]}
      outputs={["response"]}
    >
      <div>
        Simulates API call
      </div>
    </BaseNode>
  );
};
