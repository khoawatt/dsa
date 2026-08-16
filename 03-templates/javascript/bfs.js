// BFS — level order
// Invariant: mark visited when enqueuing (not when dequeuing) to avoid duplicates.
// Time O(V + E), Space O(V)

// `graph` is a Map<node, neighbors[]>. Returns traversal order.
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const order = [];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);
    for (const next of graph.get(node) ?? []) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push(next);
      }
    }
  }
  return order;
}

module.exports = { bfs };

if (require.main === module) {
  const g = new Map([
    [0, [1, 2]],
    [1, [3]],
    [2, []],
    [3, []],
  ]);
  console.assert(JSON.stringify(bfs(g, 0)) === "[0,1,2,3]", "bfs");
  console.log("bfs: ok");
}
