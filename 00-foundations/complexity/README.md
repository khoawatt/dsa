# Complexity

## Big-O thường gặp

| Độ phức tạp | Ví dụ |
|---|---|
| O(1) | hash map lookup, array index |
| O(log n) | binary search, heap push/pop |
| O(n) | duyệt mảng 1 lần |
| O(n log n) | merge sort, heap sort, sort |
| O(n²) | lồng 2 vòng for |
| O(2^n) | backtracking tổ hợp |
| O(n!) | permutations |

## Thời gian & không gian

- **Time**: số phép toán theo kích thước input.
- **Space**: bộ nhớ phụ (không tính input) + call stack đệ quy.

## Ghi nhớ nhanh

- `n ≤ 10^6` → cần O(n) hoặc O(n log n).
- `n ≤ 10^5` → O(n log n) an toàn.
- `n ≤ 100` → O(n³) ok.
- `n ≤ 20` → O(2^n) / backtracking ok.

## Mẹo

- Đệ quy có **depth** → tính cả space của stack.
- Hàm JS `Array.shift()` là O(n), không phải O(1) như deque trong Python.
