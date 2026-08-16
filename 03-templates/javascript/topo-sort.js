// Topological Sort (Kahn's algorithm)
// Only valid for DAG. Uses indegree + queue.
// Time O(V + E), Space O(V)

// `edges` = [[u, v], ...] meaning u -> v. Returns a valid order or [] if cycle.
function topologicalSort(n, edges) {
  const indegree = new Array(n).fill(0);
  const adj = new Map();
  for (let i = 0; i < n; i++) adj.set(i, []);
  for (const [u, v] of edges) {
    adj.get(u).push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < n; i++) if (indegree[i] === 0) queue.push(i);

  const order = [];
  let head = 0;
  while (head < queue.length) {
    const node = queue[head++];
    order.push(node);
    for (const next of adj.get(node)) {
      if (--indegree[next] === 0) queue.push(next);
    }
  }
  return order.length === n ? order : []; // cycle if shorter than n
}

module.exports = { topologicalSort };

if (require.main === module) {
  const order = topologicalSort(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
  console.assert(order.length === 4, "topologicalSort");
  console.log("topo-sort: ok");
}
