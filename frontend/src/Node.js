import React from "react";

const Node = ({ title, children }) => (
  <div className="base-node">
    <div className="node-title">{title}</div>
    {children}
  </div>
);

export default Node;
