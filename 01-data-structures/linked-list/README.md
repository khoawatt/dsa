# Linked List

## Cơ bản

- Node: `val` + `next`.
- Duyệt O(n), chèn/xóa tại đầu O(1).
- Không có random access (khác array).

## Node definition

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
```

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

## Pattern hay đi kèm

- Fast/Slow Pointer (tìm giữa, phát hiện cycle).
- Two Pointers (merge 2 list, đảo list).
- Dummy node (tránh xử lý riêng head).

## Trick thường dùng

- **Dummy head**: `const dummy = new ListNode(0)` → tránh edge case head.
- **Reverse**: 3 con trỏ `prev/curr/next`.
- **Cycle**: `slow` đi 1 bước, `fast` đi 2 bước.

## Lỗi hay mắc

- Quên cập nhật `next` của node trước khi di chuyển.
- Null check thiếu (`head.next` khi `head` null).
- Python không có LinkedList built-in như Java — phải tự định nghĩa node.
