# Hash Table

## Cơ bản

- `get/set/delete` trung bình **O(1)**, tệ nhất O(n).
- Dùng để: đếm tần suất, cache (memoization), ánh xạ, kiểm tra tồn tại.

## JS

- `Map` (key bất kỳ, giữ thứ tự chèn) — ưu tiên hơn object.
- `Set` cho tập giá trị duy nhất.
- `object` key bị ép thành string → **đừng dùng object làm hash map** khi key có thể là số/object.

```js
const freq = new Map();
freq.set(x, (freq.get(x) ?? 0) + 1);
```

## Python

- `dict` — hash map.
- `set` — tập.
- `collections.Counter` — đếm tần suất nhanh.
- `collections.defaultdict` — tự tạo giá trị mặc định.

```python
from collections import Counter
freq = Counter(arr)
```

## Pattern hay đi kèm

- Prefix Sum + Hash Map (Subarray Sum Equals K).
- Two Sum (target - x).
- Sliding Window + frequency map.

## Lỗi hay mắc

- Dùng object thay Map trong JS → key số bị thành string, thứ tự rối.
- Quên xóa key khi count về 0 trong sliding window.
