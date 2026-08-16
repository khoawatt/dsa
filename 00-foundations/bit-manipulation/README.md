# Bit Manipulation

## Toán tử cơ bản (JS & Python giống nhau)

| Toán | JS / Py | Ý nghĩa |
|---|---|---|
| AND | `&` | cả 2 bit = 1 |
| OR | `\|` | 1 trong 2 = 1 |
| XOR | `^` | khác nhau = 1 |
| NOT | `~` | đảo bit |
| Shift left | `<<` | `x << k` = `x * 2^k` |
| Shift right | `>>` | `x >> k` = `x / 2^k` (số dương) |

## Trick thường dùng

| Thao tác | Công thức |
|---|---|
| Xóa bit thấp nhất đang bật | `x & (x - 1)` |
| Lấy bit thấp nhất đang bật | `x & (-x)` |
| Kiểm tra bit thứ k | `(x >> k) & 1` |
| Bật bit thứ k | `x \| (1 << k)` |
| Tắt bit thứ k | `x & ~(1 << k)` |
| Kiểm tra lũy thừa 2 | `x && !(x & (x - 1))` |

## Lỗi hay mắc trong JS

- `^` là XOR bitwise, **không phải** lũy thừa (dùng `Math.pow` hoặc `**`).
- JS chỉ có 32-bit signed integer cho bitwise (`>>>` để shift không dấu).
- `~` với số âm dễ nhầm (two's complement).

## Python

- `bin()`, `int(x, 2)`, `0b` prefix.
- Python không giới hạn 32-bit như JS → thoải mái hơn.
