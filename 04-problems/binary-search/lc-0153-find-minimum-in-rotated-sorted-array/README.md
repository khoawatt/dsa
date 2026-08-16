---
title: Find Minimum in Rotated Sorted Array
source: lc-153
difficulty: medium
pattern: binary-search
tags: [array]
languages: [js, py]
time: O(log n)
space: O(1)
mastery: 1
next_review: 2026-08-20
done_at: 2026-08-17
---

# Find Minimum in Rotated Sorted Array

Source: LeetCode 153 | Difficulty: Medium

## Data Structure

Array (rotated sorted)

## Pattern

Binary Search (biến thể trên mảng xoay)

## Recognition

Mảng sắp xếp nhưng bị **xoay** → vẫn tìm được min trong O(log n) nhờ tính chất "một nửa luôn sorted".

## Key Insight

So sánh `nums[mid]` với `nums[right]`:
- `nums[mid] > nums[right]` → min nằm bên phải `mid`.
- Ngược lại → min nằm bên trái (hoặc chính là `mid`).

## Invariant

> `min` luôn nằm trong `[left, right]`; vòng lặp `while (left < right)`, dùng `right = mid` (không phải `mid - 1`) vì `mid` có thể chính là min.

## Complexity

- Time: O(log n)
- Space: O(1)

## Mistakes I Made

- Dùng `right = mid - 1` → bỏ sót min khi `mid` là min.
- So sánh `nums[mid]` với `nums[left]` thay vì `nums[right]` → nhầm với bài tìm target trong mảng xoay (lc-33).

## Related Problems

- Search in Rotated Sorted Array (lc-33)
- Find Minimum in Rotated Sorted Array II (lc-154, có duplicate)
