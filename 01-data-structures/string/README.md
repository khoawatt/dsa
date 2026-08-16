# String

## Cơ bản

- Immutable trong cả JS và Python → mọi phép biến đổi tạo chuỗi mới.
- Nối chuỗi lặp O(n²) nếu dùng `+` trong vòng lặp → dùng array + `join`.

## Pattern hay đi kèm

- Sliding Window (substring liên tiếp), Two Pointers (palindrome), Trie (tiền tố), Hash Map (đếm ký tự).

## Thao tác thường dùng

| Thao tác | JS | Python |
|---|---|---|
| Ký tự tại i | `s[i]` | `s[i]` |
| Độ dài | `s.length` | `len(s)` |
| Slice | `s.slice(i, j)` | `s[i:j]` |
| Chứa | `s.includes(t)` | `t in s` |
| Tách | `s.split(sep)` | `s.split(sep)` |
| Nối | `arr.join(sep)` | `sep.join(arr)` |
| Đếm ký tự | map | `s.count(ch)` / `Counter(s)` |

## Lỗi hay mắc

- Nhầm **substring** (liên tiếp) với **subsequence** (không cần liên tiếp).
- Quên cập nhật window khi `left++` (xóa ký tự khỏi frequency map).
- `charCodeAt` vs `codePointAt` với Unicode ngoài BMP.
