---
title: Two Sum
source: lc-1
difficulty: easy
pattern: two-pointers
tags: [array, hash-table]
languages: [js, py]
time: O(n)
space: O(n)
mastery: 1
next_review: 2026-08-20
done_at: 2026-08-17
---

# Two Sum

Source: LeetCode 1 | Difficulty: Easy

## Data Structure

Array / Hash Map

## Pattern

Two Pointers (biến thể — bản gốc dùng hash map; bản two-pointers thực sự là lc-167 khi mảng đã sắp xếp).

## Recognition

Tìm 2 phần tử có tổng bằng target. Không yêu cầu sắp xếp, không yêu cầu liên tiếp → hash map O(n), hoặc sort + two pointers.

## Naive Approach

Lồng 2 vòng for: O(n²).

## Key Insight

Thay vì tìm cặp, ta tìm `complement = target - x`. Với mỗi `x`, kiểm tra `complement` đã gặp chưa trong 1 lượt → O(n).

## Invariant

> Map lưu mọi phần tử đã duyệt trước index hiện tại; mỗi phần tử được kiểm tra đúng 1 lần.

## Complexity

- Time: O(n)
- Space: O(n)

## Mistakes I Made

- Trả về `[i, j]` theo index gốc nhưng lại sort trước rồi mới tìm → sai index.
- Dùng object làm map trong JS khi key là số → key bị ép string (thực ra vẫn chạy, nhưng nên dùng Map).

## Related Problems

- Two Sum II (lc-167) — mảng sorted → two pointers thực sự.
- 3Sum (lc-15).
