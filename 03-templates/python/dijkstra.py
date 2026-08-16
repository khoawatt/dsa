"""Dijkstra — shortest path, non-negative weights.
Uses heapq. Time O((V + E) log V), Space O(V + E).
"""
import heapq


def dijkstra(adj: dict, start: int, n: int) -> list:
    """adj is {node: [(next, weight), ...]}. Returns distances from start."""
    dist = [float("inf")] * n
    dist[start] = 0
    heap = [(0, start)]  # (distance, node)
    while heap:
        d, node = heapq.heappop(heap)
        if d > dist[node]:  # stale entry
            continue
        for nxt, w in adj.get(node, []):
            nd = d + w
            if nd < dist[nxt]:
                dist[nxt] = nd
                heapq.heappush(heap, (nd, nxt))
    return dist


if __name__ == "__main__":
    adj = {
        0: [(1, 4), (2, 1)],
        1: [(3, 1)],
        2: [(1, 2), (3, 5)],
        3: [],
    }
    dist = dijkstra(adj, 0, 4)
    assert dist[3] == 4
    print("dijkstra: ok")
