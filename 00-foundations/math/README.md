# Math

## Số học cơ bản

| Chủ đề | Ghi chú |
|---|---|
| GCD | Euclid: `gcd(a,b) = gcd(b, a % b)` |
| LCM | `lcm(a,b) = a * b / gcd(a,b)` |
| Prime check | duyệt tới `sqrt(n)` |
| Sieve | Eratosthenes cho `n ≤ 10^7` |
| Modulo | `(a + b) % m`, cẩn thận số âm |

## Công thức hay dùng

- Tổng `1..n` = `n(n+1)/2`
- Tổng cấp số nhân, tổ hợp `C(n,k)`
- `a^b mod m` → fast exponentiation O(log b)

## Euclid GCD

```js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

## Lỗi hay mắc

- Chia số âm / modulo số âm khác nhau giữa JS và Python.
- Tràn số: JS number an toàn tới `2^53` (dùng BigInt nếu cần).
- Python `//` là floor division, `%` luôn dương với mẫu dương.
