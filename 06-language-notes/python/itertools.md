# Python — itertools

## Tổ hợp / hoán vị

```python
from itertools import combinations, permutations
combinations([1, 2, 3], 2)     # [(1,2),(1,3),(2,3)]
permutations([1, 2, 3], 2)     # có thứ tự
```

## Tích Descartes

```python
from itertools import product
product([0, 1], repeat=3)      # 000..111
```

## accumulate (prefix sum)

```python
from itertools import accumulate
list(accumulate([1, 2, 3]))    # [1, 3, 6]
```

## groupby

```python
from itertools import groupby
for k, g in groupby("aaabb"):  # nhóm liên tiếp
    ...
```

> Lưu ý: `groupby` chỉ nhóm **liên tiếp** → sort trước nếu cần nhóm toàn bộ.
