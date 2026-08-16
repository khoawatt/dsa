# Disjoint Set / Union-Find

## Cơ bản

- Theo dõi các tập rời nhau. Gần O(1) với path compression + union by rank/size.
- Hai thao tác: `find(x)` (tìm gốc), `union(a, b)` (gộp 2 tập).

## Khi nào dùng?

- Connected components (đồ thị động).
- Cycle detection trong undirected graph.
- Group các phần tử (account merge, similar strings).

## Template

- Xem `03-templates/javascript/union-find.js` và `03-templates/python/union_find.py`.

## Độ phức tạp

- Gần O(1) amortized (inverse Ackermann).

## Lỗi hay mắc

- Quên path compression → dễ thành O(n) mỗi lần.
- `find` viết đệ quy thiếu path compression (`parent[x] = find(parent[x])`).
