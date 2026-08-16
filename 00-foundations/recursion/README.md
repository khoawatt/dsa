# Recursion

## Tư duy

1. Xác định **base case** (khi nào dừng).
2. Giả sử lời gọi đệ quy con đã đúng.
3. Nối kết quả con thành lời giải.

## Khuôn mẫu

```js
function solve(input) {
  if (baseCase(input)) return baseResult;
  const sub = reduce(input);
  return combine(solve(sub));
}
```

## Các dạng chính

- **Đệ quy tuyến tính**: factorial, fibonacci (xem DP).
- **Đệ quy nhánh**: backtracking, tree DFS.
- **Chia để trị**: merge sort, quickselect.

## Lỗi hay mắc

- Thiếu base case → stack overflow.
- Quên truyền state (index, mảng kết quả).
- Tham chiếu vs copy (mutate array giữa các nhánh).

## Liên quan

- Backtracking (`02-patterns/backtracking`)
- DP (`02-patterns/dp-*`)
- Tree DFS (`02-patterns/dfs`)
