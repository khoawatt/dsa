# Array

## Cơ bản

- Truy cập theo index: **O(1)**.
- Tìm kiếm tuyến tính: O(n).
- Chèn/xóa giữa mảng: O(n) (phải dịch chuyển).

## Pattern hay đi kèm

- Two Pointers, Sliding Window, Prefix Sum, Binary Search, Kadane.

## Lưu ý JS vs Python

| Thao tác | JS | Python |
|---|---|---|
| Độ dài | `arr.length` | `len(arr)` |
| Thêm cuối | `arr.push(x)` | `arr.append(x)` |
| Xóa cuối | `arr.pop()` | `arr.pop()` |
| Thêm/xóa đầu | `unshift`/`shift` = O(n) | `list` cũng O(n), dùng `deque` cho O(1) |
| Slice | `arr.slice(i, j)` | `arr[i:j]` |
| Chứa? | `arr.includes(x)` O(n) | `x in arr` O(n) |

## Mẹo

- Muốn O(1) kiểm tra tồn tại → dùng Set/Map, không dùng array.
- Sắp xếp mảng số JS phải truyền `(a,b) => a-b`.
