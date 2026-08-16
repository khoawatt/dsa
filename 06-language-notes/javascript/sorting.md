# JavaScript — Sorting

## Mặc định là lexicographical

```js
[10, 2, 1].sort(); // [1, 10, 2] — SAI cho số
```

## Sắp xếp số

```js
arr.sort((a, b) => a - b); // tăng dần
arr.sort((a, b) => b - a); // giảm dần
```

## Sắp xếp object

```js
arr.sort((a, b) => a.score - b.score);
```

## Sắp xếp chuỗi

```js
arr.sort(); // ok cho string
```

## Lưu ý

- `sort` mutate mảng gốc. Muốn giữ nguyên → `[...arr].sort(...)`.
- Complexity: O(n log n).
