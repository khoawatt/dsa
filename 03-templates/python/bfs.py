"""BFS — level order.
Invariant: mark visited when enqueuing to avoid duplicates.
Time O(V + E), Space O(V).
"""
from collections import deque


def bfs(graph: dict, start) -> list:
    """graph is {node: [neighbors]}. Returns traversal order."""
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for nxt in graph.get(node, []):
            if nxt not in visited:
                visited.add(nxt)
                queue.append(nxt)
    return order


if __name__ == "__main__":
    g = {0: [1, 2], 1: [3], 2: [], 3: []}
    assert bfs(g, 0) == [0, 1, 2, 3]
    print("bfs: ok")
