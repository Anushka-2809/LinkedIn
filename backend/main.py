from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import networkx as nx

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(data: dict = Body(...)):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    # Create directed graph
    G = nx.DiGraph()

    # Add nodes
    for node in nodes:
        G.add_node(node["id"])

    # Add edges
    for edge in edges:
        G.add_edge(edge["source"], edge["target"])

    num_nodes = len(G.nodes)
    num_edges = len(G.edges)
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
