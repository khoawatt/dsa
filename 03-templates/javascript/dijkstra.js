// Dijkstra — shortest path, non-negative weights
// Uses a min-heap priority queue.
// Time O((V + E) log V), Space O(V + E)

const { MinHeap } = require("./heap");

// `adj` is a Map<node, [[next, weight], ...]>. Returns distances from start.
function dijkstra(adj, start, n) {
  const dist = new Array(n).fill(Infinity);
  dist[start] = 0;
  const heap = new MinHeap((a, b) => a[1] - b[1]);
  heap.push([start, 0]);

  while (heap.size() > 0) {
    const [node, d] = heap.pop();
    if (d > dist[node]) continue; // stale entry
    for (const [next, w] of adj.get(node) ?? []) {
      const nd = d + w;
      if (nd < dist[next]) {
        dist[next] = nd;
        heap.push([next, nd]);
      }
    }
  }
  return dist;
}

module.exports = { dijkstra };

if (require.main === module) {
  const adj = new Map([
    [0, [[1, 4], [2, 1]]],
    [1, [[3, 1]]],
    [2, [[1, 2], [3, 5]]],
    [3, []],
  ]);
  const dist = dijkstra(adj, 0, 4);
  console.assert(dist[3] === 4, "dijkstra");
  console.log("dijkstra: ok");
}
