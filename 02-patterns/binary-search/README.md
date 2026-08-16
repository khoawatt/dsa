# Binary Search

## When should I think about this pattern?

- Mảng **đã sắp xếp** (hoặc search space có tính monotonic).
- Tìm phần tử, first/last occurrence.
- "minimize max" / "maximize min" / "tìm kích thước nhỏ nhất thỏa X" → **binary search on answer**.

## Recognition clues

- "sorted array"
- "search" / "find target" / "first / last position"
- "minimum possible maximum" / "maximum possible minimum"
- search space là 1 khoảng liên tục có tính đơn điệu

## Core idea

Duy trì `left`, `right` là biên của không gian tìm kiếm. Mỗi bước lấy `mid`, **bỏ đi nửa** không gian.

## Invariant

> `target` (hoặc đáp án) luôn nằm trong `[left, right]`. Vòng lặp `while (left <= right)`. Bỏ nửa bằng `left = mid + 1` / `right = mid - 1`.

## Complexity

- Time: O(log n)
- Space: O(1)

## Variants

1. Tìm đúng target.
2. **Lower bound**: chỉ số đầu tiên `>= x`.
3. **Upper bound**: chỉ số đầu tiên `> x`.
4. **Binary search on answer**: search trên miền giá trị, kiểm tra `check(mid)` thay vì `arr[mid]`.

## Representative problems

- `04-problems/binary-search/lc-0704-binary-search`
- `04-problems/binary-search/lc-0153-find-minimum-in-rotated-sorted-array`

## Common confusions

- **Binary Search vs Two Pointers**: binary search bỏ nửa không gian (log); two pointers bỏ 1 phần tử (n).
- Off-by-one: nhầm `while (left < right)` với `<=`; nhầm `right = mid` với `right = mid - 1` → nguồn lỗi số 1, ghi nhớ **invariant** thay vì học thuộc.
