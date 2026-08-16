# Python — collections

## deque (double-ended queue)

```python
from collections import deque
q = deque()
q.append(x)      # phải
q.appendleft(x)  # trái
q.pop()          # phải
q.popleft()      # trái O(1)
```

Dùng cho BFS queue, sliding window max (monotonic queue).

## Counter (đếm tần suất)

```python
from collections import Counter
c = Counter("abracadabra")  # {'a': 5, 'b': 2, ...}
c["a"]                      # 5
c.most_common(2)            # top 2
```

## defaultdict (giá trị mặc định)

```python
from collections import defaultdict
d = defaultdict(int)   # 0 mặc định
d = defaultdict(list)  # [] mặc định
d["x"].append(1)       # không cần kiểm tra key tồn tại
```

## OrderedDict

`dict` trong Python 3.7+ đã giữ thứ tự chèn → hiếm khi cần `OrderedDict`.
