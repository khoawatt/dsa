# JavaScript — Map / Set

## Map (ưu tiên hơn object cho hash map)

```js
const m = new Map();
m.set(key, value);
m.get(key);          // undefined nếu không có
m.has(key);
m.delete(key);
m.size;
```

- Key có thể là **bất kỳ** (số, object...), không bị ép string.
- `m.get(k) ?? 0` để đếm tần suất.

## Set

```js
const s = new Set();
s.add(x);
s.has(x);
s.delete(x);
```

## Object vs Map

- Object key luôn bị ép thành string → `obj[1]` và `obj["1"]` là một.
- Object dễ bị kế thừa prototype (dùng `Object.create(null)` nếu cần).
- **Quy tắc:** cần hash map → dùng `Map`.

## Đếm tần suất

```js
const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x) ?? 0) + 1);
```
