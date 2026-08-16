"""DFS — recursive + iterative.
Time O(V + E), Space O(V).
"""


def dfs_recursive(graph: dict, node, visited: set | None = None, order: list | None = None):
    if visited is None:
        visited = set()
    if order is None:
        order = []
    visited.add(node)
    order.append(node)
    for nxt in graph.get(node, []):
        if nxt not in visited:
            dfs_recursive(graph, nxt, visited, order)
    return order


def dfs_iterative(graph: dict, start) -> list:
    visited = set()
    stack = [start]
    order = []
    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        order.append(node)
        for nxt in graph.get(node, []):
            stack.append(nxt)
    return order


if __name__ == "__main__":
    g = {0: [1, 2], 1: [3], 2: [], 3: []}
    assert dfs_recursive(g, 0) == [0, 1, 3, 2]
    print("dfs: ok")
