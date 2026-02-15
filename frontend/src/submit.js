export const submitPipeline = async (nodes, edges) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes: nodes,
        edges: edges,
      }),
    });

    const data = await response.json();

    alert(
      `Pipeline Info:
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
    );

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};
