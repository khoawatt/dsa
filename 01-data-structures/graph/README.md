# Graph

## Biểu diễn

- **Adjacency list** (phổ biến nhất): `Map<node, neighbors[]>`.
- **Adjacency matrix**: `matrix[i][j]`, tốn O(V²), dùng khi đồ thị dày.

```js
const graph = new Map();
graph.set(u, [v1, v2]);
```

## Duyệt

- BFS → shortest path (unweighted), level order.
- DFS → connected components, cycle, topological sort (biến thể).

## Pattern liên quan

- `02-patterns/bfs`, `02-patterns/dfs`
- `02-patterns/topological-sort` (dependency)
- `02-patterns/union-find` (connectivity)
- `02-patterns/shortest-path` (Dijkstra)

## Lỗi hay mắc

- Quên `visited` → vòng lặp vô hạn.
- Đánh dấu visited quá muộn → đẩy trùng node vào queue.
- Nhầm directed/undirected khi build adjacency.
