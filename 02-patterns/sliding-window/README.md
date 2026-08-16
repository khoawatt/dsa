# Sliding Window

## When should I think about this pattern?

- contiguous subarray / substring.
- longest / shortest interval thỏa điều kiện.
- maximum / minimum trên 1 khoảng liên tục.
- brute force duyệt nhiều đoạn `[L..R]` → gom về 1 lượt.

## Recognition clues

- "longest substring"
- "smallest subarray"
- "at most K"
- "exactly K"
- "consecutive" / "contiguous"

## Core idea

Duy trì 3 thứ: `left`, `right`, `state` (tần suất, tổng, ...).

- Mở rộng `right` để thêm phần tử vào cửa sổ.
- Khi cửa sổ **không còn hợp lệ** → di chuyển `left` cho tới khi hợp lệ lại.

## Invariant

> Cửa sổ `[left, right]` luôn thỏa điều kiện bài; ngay khi vi phạm thì co `left` lại.

## Complexity

- Time: O(n) — mỗi phần tử được thêm và bỏ khỏi cửa sổ tối đa 1 lần.
- Space: O(k) — kích thước state (ví dụ frequency map).

## Variants

1. Fixed-size window
2. Variable-size window
3. At most K → dùng trick `exactly(k) = atMost(k) - atMost(k-1)`
4. Window + frequency map

## Representative problems

- `04-problems/sliding-window/lc-0003-longest-substring-without-repeating-characters`
- Minimum Size Subarray Sum (lc-209)
- Minimum Window Substring (lc-76)

## Common confusions

- **Sliding Window vs Two Pointers**: window duy trì **khoảng** thỏa điều kiện; two pointers so sánh phần tử rời rạc.
- **Sliding Window vs Prefix Sum**: "đếm số subarray có sum = K" → prefix sum + hash map (không dùng window vì điều kiện không monotonic).
- **Sliding Window vs Binary Search on Answer**: khi "tìm kích thước nhỏ nhất thỏa X" mà điều kiện monotonic → binary search on answer.
