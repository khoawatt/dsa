---
title: Longest Substring Without Repeating Characters
source: lc-3
difficulty: medium
pattern: sliding-window
tags: [string, hash-map]
languages: [js, py]
time: O(n)
space: O(min(n, k))
mastery: 2
next_review: 2026-08-20
done_at: 2026-08-17
---

# Longest Substring Without Repeating Characters

Source: LeetCode 3 | Difficulty: Medium

## Data Structure

String / Hash Map

## Pattern

Sliding Window (variable size)

## Recognition

"longest substring" → liên tiếp. Điều kiện: không trùng ký tự → variable-size sliding window với frequency/position map.

## Naive Approach

Xuất phát từ mỗi index, mở rộng đến khi trùng: O(n²).

## Key Insight

Khi gặp ký tự trùng, không cần bắt đầu lại từ đầu — chỉ cần nhảy `left` qua vị trí trùng **trước đó** (nếu nó còn nằm trong window hiện tại).

## Invariant

> Window `[left, right]` luôn chứa các ký tự đôi một khác nhau.

## Complexity

- Time: O(n)
- Space: O(min(n, k)) với k = bảng chữ cái

## Mistakes I Made

- Reset cả map khi gặp trùng (mất thông tin vị trí cũ).
- Quên kiểm tra `seen.get(ch) >= left` — ký tự trùng cũ có thể đã nằm **ngoài** window.
- Nhầm substring (liên tiếp) với subsequence.

## Related Problems

- Longest Repeating Character Replacement (lc-424)
- Minimum Window Substring (lc-76)
