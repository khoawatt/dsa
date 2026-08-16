# Python — Pitfalls

## List

- `list.pop(0)` và `insert(0, x)` là **O(n)** → dùng `deque`.
- `arr[-1]` trả phần tử cuối (khác JS).
- `arr.sort()` mutate tại chỗ, trả `None`; `sorted(arr)` trả bản copy.

## Chia & modulo

- `//` là **floor division**; `%` luôn cùng dấu mẫu.
- `int / int` trả float trong Python 3 (dùng `//` cho chia nguyên).
- `round()` dùng banker's rounding.

## Mutable default argument

```python
def f(arr=[]):   # BUG: dùng chung list giữa các lần gọi
```

Dùng `arr=None` + khởi tạo bên trong.

## String

- Immutable → nối chuỗi lặp bằng `+=` là O(n²), dùng `"".join`.

## Recursion limit

- Mặc định `sys.getrecursionlimit()` ~1000 → có thể `sys.setrecursionlimit(10**6)` khi cần.

## Chia nhớ

- `Counter`, `defaultdict`, `deque`, `heapq`, `bisect` — tận dụng thay vì tự viết.
