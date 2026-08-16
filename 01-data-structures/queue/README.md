# Queue / Deque

## Cơ bản

- FIFO: enqueue O(1), dequeue O(1).
- Dùng cho BFS, sliding window, cấp phát theo thứ tự.

## JS

- Không có queue built-in. Dùng mảng + index (hoặc tự viết). `shift()` là O(n) → tránh.

```js
const q = [];
let head = 0;
q.push(x);              // enqueue
const front = q[head++]; // dequeue O(1) bằng index
```

## Python

- `collections.deque`: `append` / `popleft` đều O(1).

```python
from collections import deque
q = deque()
q.append(x)
front = q.popleft()
```

## Deque — double-ended queue

- Push/pop cả 2 đầu O(1).
- Dùng cho **Monotonic Queue** (sliding window max/min).

## Pattern liên quan

- `02-patterns/bfs`
- `02-patterns/sliding-window`
- `02-patterns/monotonic-stack` (biến thể queue)
