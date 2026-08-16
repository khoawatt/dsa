# Trie

## Cơ bản

- Cây tiền tố, mỗi node là 1 ký tự.
- Insert / search / prefix check: O(L) với L = độ dài từ.

## Khi nào dùng?

- Autocomplete, từ điển, tìm tiền tố chung.
- "Tất cả từ có prefix X".
- XOR trie (advanced).

## Node

```js
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}
```

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
```

## Template

- Xem `03-templates/javascript/trie.js`.

## Lỗi hay mắc

- Quên đánh dấu `isEnd` → nhầm "prefix" với "từ đầy đủ".
- Dùng object thay Map trong JS khi key là ký tự (thực ra ok, nhưng Map an toàn hơn).
