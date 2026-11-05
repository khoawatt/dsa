# Two Pointers

## When should I think about this pattern?

- Mảng **đã sắp xếp** cần tìm cặp/thỏa điều kiện.
- Cần so sánh 2 phần tử ở 2 đầu (opposite direction).
- Cần đếm/loại bỏ trong mảng đã sắp xếp (same direction).

## Recognition clues

- "sorted array"
- "pair of numbers" / "two numbers that sum to..."
- "three sum" / "four sum"
- palindrome kiểm tra 2 đầu

## Core idea

Dùng 2 con trỏ `left`, `right` (hoặc `slow`, `fast`) để duyệt mảng trong **1 lượt O(n)** thay vì 2 vòng lặp lồng O(n²).

- **Opposite**: `left` từ đầu, `right` từ cuối, di chuyển dần vào nhau.
- **Same direction**: cả 2 cùng đi từ đầu, giữ khoảng cách hoặc điều kiện.

## Invariant

> Các phần tử ngoài khoảng [left, right] đã được xử lý xong; mọi cặp khả dĩ còn lại nằm trong khoảng đó.

## Complexity

- Time: O(n) (mỗi phần tử duyệt tối đa 1 lần mỗi con trỏ)
- Space: O(1)

## Variants

1. **Opposite / colliding** — Two Sum II, palindrome, container.
2. **Fast / Slow** — tìm giữa linked list, cycle detection.
3. **Same direction** — remove duplicates, merge 2 list.

## Representative problems

- `04-problems/two-pointers/lc-0001-two-sum` (biến thể với hash map)
- `04-problems/two-pointers/lc-0011-container-with-most-water`
- `04-problems/two-pointers/lc-0125-valid-palindrome` — RegExp + Reverse và Two Pointers.

## Common confusions

- **Two Pointers vs Sliding Window**: two pointers so sánh 2 phần tử rời rạc; sliding window duy trì 1 khoảng [left, right] thỏa điều kiện.
- **Two Pointers vs Binary Search**: binary search bỏ đi **nửa** không gian mỗi bước (log); two pointers bỏ 1 phần tử (n).
