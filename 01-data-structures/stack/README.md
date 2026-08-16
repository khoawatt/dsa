# Stack

## Cơ bản

- LIFO: push O(1), pop O(1), peek O(1).
- Dùng khi cần xử lý theo thứ tự ngược, hoặc match cặp.

## JS

- Dùng mảng: `push` / `pop` (cả hai O(1) amortized).

```js
const stack = [];
stack.push(x);
const top = stack.pop();
```

## Python

- `list` dùng `append` / `pop`.

```python
stack = []
stack.append(x)
top = stack.pop()
```

## Khi nào nghĩ tới stack?

- Parentheses matching.
- Next Greater/Smaller Element → **Monotonic Stack**.
- Đảo thứ tự, evaluate expression (postfix).
- DFS (explicit stack).

## Pattern liên quan

- `02-patterns/monotonic-stack`
- `02-patterns/dfs`
