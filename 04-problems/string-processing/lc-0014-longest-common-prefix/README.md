---
title: Longest Common Prefix
source: lc-14
difficulty: easy
pattern: string-processing
tags: [string, prefix, vertical-scanning]
languages: [js]
time: O(N * L)
space: O(1)
mastery: 1
next_review: 2026-11-10
done_at: 2026-11-10
---

# Longest Common Prefix

Source: LeetCode 14 | Difficulty: Easy

## Data Structure

Array of Strings

## Pattern

**String Processing — Vertical Scanning.**

Chọn chuỗi đầu tiên làm chuỗi chuẩn. Duyệt từng vị trí ký tự của chuỗi này, rồi so sánh ký tự tại cùng vị trí với tất cả chuỗi còn lại. Khi gặp ký tự khác nhau hoặc một chuỗi đã kết thúc, phần trước vị trí đó chính là longest common prefix.

## Recognition

- Đề yêu cầu tìm tiền tố chung dài nhất của nhiều chuỗi.
- Tiền tố phải bắt đầu từ index 0; không phải chuỗi con xuất hiện ở vị trí bất kỳ.
- Có thể so sánh các chuỗi theo từng cột ký tự: cùng index, khác chuỗi.

## Key Insight

1. Nếu mảng rỗng, trả về chuỗi rỗng.
2. Lấy `strs[0]` làm chuỗi chuẩn.
3. Duyệt từng index `i` của chuỗi chuẩn.
4. Với mỗi index, duyệt các chuỗi còn lại:
   - Nếu `i >= strs[j].length`, chuỗi hiện tại đã kết thúc.
   - Nếu `str[i] !== strs[j][i]`, ký tự tại vị trí này không còn là tiền tố chung.
5. Trả về `str.substring(0, i)`, tức các ký tự đã khớp trước vị trí mismatch.
6. Nếu duyệt hết chuỗi chuẩn mà không mismatch, trả về toàn bộ chuỗi chuẩn.

## Invariant

> Trước khi xử lý vị trí `i`, đoạn `str.substring(0, i)` đã được xác nhận là tiền tố chung của tất cả chuỗi. Vì vậy, khi có mismatch tại `i`, chỉ cần trả về đoạn đã xác nhận này.

## Complexity

Gọi:

- `N` là số lượng chuỗi.
- `L` là độ dài của chuỗi ngắn nhất.

- Time: O(N * L) — ở mỗi vị trí, có thể phải so sánh với tất cả N chuỗi; tối đa L vị trí được kiểm tra.
- Auxiliary space: O(1) — chỉ dùng một vài biến index và tham chiếu tới chuỗi đầu tiên. Chuỗi được trả về là output.

## Solution — JavaScript

Giữ nguyên thuật toán người học gửi; chỉ thêm `module.exports` để chạy test trong repository.

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    const str = strs[0];

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (
                i >= strs[j].length ||
                str[i] !== strs[j][i]
            ) {
                return str.substring(0, i);
            }
        }
    }

    return str;
};

module.exports = { longestCommonPrefix };
```

## Mistakes I Made

- Cần kiểm tra `i >= strs[j].length` trước khi đọc `strs[j][i]`, vì một chuỗi có thể ngắn hơn chuỗi chuẩn.
- Chỉ trả về prefix trước vị trí mismatch; không đưa ký tự mismatch vào kết quả.
- Không cần chọn chuỗi dài nhất làm chuẩn. Chọn chuỗi đầu tiên là đủ vì thuật toán sẽ dừng khi chạm cuối một chuỗi ngắn hơn.

## Related Problems

- Implement strStr() (lc-28)
- Longest Happy Prefix (lc-1392)
