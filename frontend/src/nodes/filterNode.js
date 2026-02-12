import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={["data"]}
      outputs={["filtered", "rejected"]}
    >
      <div>
        Filters data
      </div>
    </BaseNode>
  );
};
