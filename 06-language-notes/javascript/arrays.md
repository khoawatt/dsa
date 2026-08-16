# JavaScript — Arrays

## Ops nhanh

| Thao tác | Độ phức tạp |
|---|---|
| `arr[i]`, `arr.length` | O(1) |
| `push`, `pop` | O(1) amortized |
| `shift`, `unshift` | **O(n)** |
| `slice(i, j)` | O(j - i) |
| `splice` | O(n) |
| `includes`, `indexOf` | O(n) |

## Mẹo

- Tránh `shift()` trong vòng lặp → dùng index head như queue (xem `01-data-structures/queue`).
- `arr.sort()` mặc định **lexicographical** — luôn truyền comparator số: `arr.sort((a, b) => a - b)`.
- Copy mảng: `[...arr]` hoặc `arr.slice()`.
- `Array(n).fill(0)` cho mảng khởi tạo.
- 2D array: `Array.from({ length: m }, () => Array(n).fill(0))`.
