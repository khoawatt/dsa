# Python — heapq

## Min-heap (mặc định)

```python
import heapq
h = []
heapq.heappush(h, x)
top = heapq.heappop(h)   # MIN
heapq.heapify(arr)       # build O(n)
```

## Max-heap (trick)

```python
heapq.heappush(h, -x)
top = -heapq.heappop(h)
```

## Top K

```python
heapq.nlargest(k, arr)   # K lớn nhất
heapq.nsmallest(k, arr)  # K nhỏ nhất
```

## Heap kích thước K

```python
heap = []
for x in arr:
    heapq.heappush(heap, x)
    if len(heap) > k:
        heapq.heappop(heap)
# heap giữ K phần tử lớn nhất (min-heap)
```

## Tuple comparator

Heap so sánh tuple từ phần tử đầu → đẩy `(priority, data)`.
