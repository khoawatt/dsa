# Python — bisect

## Binary search trên list

```python
import bisect
bisect.bisect_left(arr, x)   # chỉ số chèn trái (lower bound) — first >= x
bisect.bisect_right(arr, x)  # chỉ số chèn phải (upper bound) — first > x
```

## Insert giữ nguyên thứ tự

```python
bisect.insort_left(arr, x)   # O(n) do dịch chuyển
```

## Lưu ý

- Chỉ dùng khi array **đã sắp xếp**.
- `bisect_left` = lower bound = `first index where arr[i] >= x` → dùng để tìm insert position.
