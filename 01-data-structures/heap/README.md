# Heap / Priority Queue

## Cơ bản

- Lấy min/max: O(1); push/pop: O(log n).
- Dùng cho: Top K, merge K sorted, Dijkstra, median.

## JS

- Không có heap built-in. Tự implement min-heap (xem `03-templates/javascript/heap.js`), hoặc viết lại khi cần.

## Python

- `heapq` — min-heap mặc định. Muốn max-heap → đẩy số âm hoặc bọc tuple.

```python
import heapq
h = []
heapq.heappush(h, x)
top = heapq.heappop(h)      # min
heapq.heappush(h, (-x, x))  # max-heap trick
```

## Khi nào nghĩ tới heap?

- "Top K lớn/nhỏ nhất".
- "K-th largest/smallest" (heap kích thước K).
- Median (Two Heaps: min-heap + max-heap).
- Merge K sorted lists.

## Lỗi hay mắc

- Python `heapq` là **min**-heap — nhầm với max.
- Quên JS không có heap → dùng sort lại mỗi lần sẽ chậm.
