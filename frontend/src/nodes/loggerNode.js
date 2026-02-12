import { BaseNode } from "./BaseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      inputs={["input"]}
      outputs={[]}
    >
      <div>
        Logs incoming data
      </div>
    </BaseNode>
  );
};
