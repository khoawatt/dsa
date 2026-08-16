# Tree

## Cơ bản

- Node có `val` + `left` + `right`.
- Binary tree, BST, Trie là các biến thể.

## Duyệt cây

| Kiểu | Thứ tự |
|---|---|
| Pre-order | root → left → right |
| In-order | left → root → right (BST cho dãy tăng) |
| Post-order | left → right → root |

## Pattern hay đi kèm

- BFS (level), DFS (path/subtree), Backtracking (mọi đường đi).
- BST → binary search trên cây.

## Đệ quy vs lặp

- Đệ quy: gọn, nhưng tốn call stack (depth = height).
- Lặp: dùng explicit stack/queue.

## Lỗi hay mắc

- Quên xử lý node null.
- Nhầm thứ tự pre/in/post-order.
- BST nhưng quên dùng tính chất "left < root < right".

## Liên quan

- `02-patterns/dfs`, `02-patterns/bfs`, `01-data-structures/trie`
