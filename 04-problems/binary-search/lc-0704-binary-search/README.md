---
title: Binary Search
source: lc-704
difficulty: easy
pattern: binary-search
tags: [array]
languages: [js, py]
time: O(log n)
space: O(1)
mastery: 2
next_review: 2026-08-20
done_at: 2026-08-17
---

# Binary Search

Source: LeetCode 704 | Difficulty: Easy

## Data Structure

Array (sorted)

## Pattern

Binary Search

## Recognition

Mảng **đã sắp xếp**, tìm target → binary search.

## Key Insight

Mỗi bước bỏ đi nửa không gian tìm kiếm bằng cách so sánh `nums[mid]` với target.

## Invariant

> target nằm trong `[left, right]`. Vòng lặp `while (left <= right)`. Bỏ nửa bằng `left = mid + 1` / `right = mid - 1`.

## Complexity

- Time: O(log n)
- Space: O(1)

## Mistakes I Made

- `while (left <= right)` với `mid = (left + right) >> 1` — nhầm `>>` thành `>>>` khi số âm (không cần cho bài này).
- Quên `left = mid + 1` mà viết `left = mid` → vòng lặp vô hạn khi còn 2 phần tử.

## Related Problems

- Search Insert Position (lc-35)
- Find Minimum in Rotated Sorted Array (lc-153)
