import { useState, useEffect, useMemo, useRef } from "react";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const textareaRef = useRef(null);

  // ✅ Extract variables from {{ variable }}
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }

    // Remove duplicates
    return [...new Set(matches)];
  }, [text]);

  // ✅ Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.length > 0 ? variables : ["input"]}
      outputs={["output"]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        placeholder="Enter text... Use {{variable}}"
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden",
          minHeight: "40px",
        }}
      />
    </BaseNode>
  );
};
