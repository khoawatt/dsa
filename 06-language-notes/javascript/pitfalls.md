# JavaScript — Pitfalls

## Array

- `shift()` / `unshift()` là **O(n)** — đừng dùng làm queue.
- `sort()` mặc định lexicographical.
- `arr[-1]` không trả phần tử cuối (khác Python) → dùng `arr[arr.length - 1]`.

## Object / Map

- Object key bị ép string → dùng `Map` cho hash map.

## Bitwise & number

- JS number là float, an toàn tới `2^53 - 1` (dùng `BigInt` nếu vượt).
- Bitwise (`&`, `|`, `^`, `<<`, `>>`) ép về **32-bit signed integer**.
- `^` là XOR, **không** phải lũy thừa → dùng `**` hoặc `Math.pow`.

## String

- Nối chuỗi trong vòng lặp bằng `+` → O(n²), dùng array + `join`.

## Đệ quy

- Không có tail-call optimization tin cậy → đệ quy sâu dễ stack overflow (dùng vòng lặp hoặc tăng `--stack-size`).

## Khác

- `===` vs `==`: luôn dùng `===`.
- `const mid = (left + right) >> 1` an toàn với mảng ≤ 2^31 phần tử; nếu lo tràn dùng `left + ((right - left) >> 1)`.
