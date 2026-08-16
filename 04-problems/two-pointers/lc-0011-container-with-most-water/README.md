---
title: Container With Most Water
source: lc-11
difficulty: medium
pattern: two-pointers
tags: [array, greedy]
languages: [js, py]
time: O(n)
space: O(1)
mastery: 1
next_review: 2026-08-20
done_at: 2026-08-17
---

# Container With Most Water

Source: LeetCode 11 | Difficulty: Medium

## Data Structure

Array

## Pattern

Two Pointers (opposite direction)

## Recognition

"Maximize area between two lines" → diện tích phụ thuộc 2 cạnh → two pointers từ 2 đầu.

## Naive Approach

Thử mọi cặp (i, j): O(n²).

## Key Insight

Diện tích bị giới hạn bởi **cạnh thấp hơn**. Di chuyển con trỏ ở cạnh thấp hơn vào trong — vì giữ nó lại không bao giờ tăng diện tích (chiều rộng giảm, chiều cao tối đa vẫn bị kẹp bởi nó).

## Invariant

> `[left, right]` chứa cặp tối ưu; mỗi bước loại bỏ cạnh không thể cho diện tích lớn hơn hiện tại.

## Complexity

- Time: O(n)
- Space: O(1)

## Mistakes I Made

- Nhầm điều kiện di chuyển: di chuyển cạnh **thấp** hơn, không phải cạnh cao.
- Quên dùng `Math.min` cho chiều cao khi tính diện tích.

## Related Problems

- Trapping Rain Water (lc-42)
- Two Sum II (lc-167)
