# Common Mistakes — personal log

> Log lỗi **của bản thân** (không phải lý thuyết chung). Thêm mỗi khi mắc lỗi mới.

## Binary Search

- Off-by-one: nhầm `while (left < right)` với `<=`.
- Nhầm `right = mid` với `right = mid - 1`.
- Quên `left = mid + 1` → vòng lặp vô hạn khi còn 2 phần tử.

## Sliding Window

- Shrink `left` quá muộn / quên cập nhật state khi `left++`.
- Quên xóa ký tự khỏi frequency map khi co window.
- Nhầm substring (liên tiếp) với subsequence.

## Two Pointers

- Di chuyển nhầm con trỏ (cạnh cao thay vì cạnh thấp).

## Graph

- Quên `visited` → vòng lặp vô hạn.
- Đánh dấu visited quá muộn → đẩy trùng node vào queue.

## JavaScript

- `Array.shift()` là O(n).
- `sort()` mặc định lexicographical.
- Object key bị ép string → dùng Map.

## Python

- `list.pop(0)` là O(n) → dùng deque.
- `heapq` là min-heap.
