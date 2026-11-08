# DSA Cheatsheet — Bản đồ nhận diện nhanh

Vào đây đầu tiên khi bí. Map từ **triệu chứng** của đề bài → pattern.

## Subarray / Substring

```
contiguous (liên tiếp)
→ Sliding Window
→ Prefix Sum
→ Kadane (max subarray)
```

## Sorted Array

```
→ Binary Search
→ Two Pointers
```

## Top K / K-th

```
Top K lớn/nhỏ nhất → Heap
K-th smallest/largest → Heap | Quickselect | Binary Search on Answer
```

## Parentheses / Next Greater

```
→ Stack
→ Monotonic Stack
```

## Tree

```
level-based → BFS
path / subtree → DFS
```

## Graph

```
shortest unweighted path → BFS
shortest positive weighted → Dijkstra
dependency ordering → Topological Sort
connectivity → DFS / BFS / Union Find
```

## "All possible" / "tất cả tổ hợp"

```
→ Backtracking
```

## Overlapping subproblems / "optimal"

```
→ Dynamic Programming
```

## Hai danh sách đã sắp xếp / tìm cặp

```
→ Two Pointers
```

## Chuỗi ký tự / tiền tố

```
→ Trie
```

## Parsing / chuyển đổi chuỗi theo quy tắc

```
leading spaces + optional sign + consecutive digits + overflow
→ String Parsing / single-pass simulation
```

## Ví dụ map nhanh

```
minimum edges + unweighted graph → BFS
longest substring + điều kiện → Sliding Window
"at most K" / "exactly K" → Sliding Window | Prefix Sum
sum của subarray bằng K → Prefix Sum + Hash Map
```

> Chi tiết từng pattern nằm trong `02-patterns/`; template trong `03-templates/`.
