// DFS — recursive + iterative
// Time O(V + E), Space O(V)

// Recursive DFS. `graph` is a Map<node, neighbors[]>.
function dfsRecursive(graph, node, visited = new Set(), order = []) {
  visited.add(node);
  order.push(node);
  for (const next of graph.get(node) ?? []) {
    if (!visited.has(next)) dfsRecursive(graph, next, visited, order);
  }
  return order;
}

// Iterative DFS using explicit stack.
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const order = [];
  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    order.push(node);
    for (const next of graph.get(node) ?? []) stack.push(next);
  }
  return order;
}

module.exports = { dfsRecursive, dfsIterative };

if (require.main === module) {
  const g = new Map([
    [0, [1, 2]],
    [1, [3]],
    [2, []],
    [3, []],
  ]);
  console.assert(JSON.stringify(dfsRecursive(g, 0)) === "[0,1,3,2]", "dfsRecursive");
  console.log("dfs: ok");
}
