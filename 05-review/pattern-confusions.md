# Pattern Confusions

> Những cặp pattern dễ nhầm — ghi rõ điểm khác biệt để nhận diện nhanh.

## Two Pointers vs Sliding Window

- Two Pointers: so sánh 2 phần tử **rời rạc** (2 đầu, hoặc slow/fast).
- Sliding Window: duy trì **khoảng** `[left, right]` thỏa điều kiện.

## Sliding Window vs Prefix Sum

- Window: điều kiện monotonic (thêm phần tử chỉ làm "tệ hơn").
- Prefix Sum + hash map: "đếm subarray có sum = K" (điều kiện không monotonic).

## Binary Search vs Two Pointers

- Binary Search: bỏ **nửa** không gian mỗi bước → O(log n).
- Two Pointers: bỏ 1 phần tử mỗi bước → O(n).

## BFS vs DFS

- BFS: shortest path (unweighted), level order → dùng queue.
- DFS: path/subtree, connected components, cycle, backtracking → đệ quy/stack.

## Backtracking vs DP

- Backtracking: đếm/liệt kê **mọi** tổ hợp (overlapping nhiều → chậm).
- DP: tối ưu / đếm khi có **overlapping subproblems + optimal substructure**.
