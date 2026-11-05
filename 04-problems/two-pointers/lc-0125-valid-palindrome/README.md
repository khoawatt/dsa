---
title: Valid Palindrome
source: lc-125
difficulty: easy
pattern: two-pointers
tags: [string, regexp, reverse]
languages: [js]
time: O(n)
space: O(n)
mastery: 1
next_review: 2026-11-06
done_at: 2026-11-05
---

# Valid Palindrome

Source: LeetCode 125 | Difficulty: Easy

## Data Structure

String / Array

## Pattern

**Primary DSA pattern: Two Pointers (opposite direction).**

Bài được xếp trong nhóm Two Pointers vì cách giải pattern chính sẽ so sánh ký tự từ hai đầu chuỗi. Lời giải đang lưu là cách tiếp cận đầu tiên do người học gửi: **RegExp + Reverse**. Phần Two Pointers sẽ được bổ sung riêng khi người học gửi code.

## Recognition

- Đề yêu cầu kiểm tra chuỗi palindrome.
- Bỏ qua ký tự không phải chữ và số.
- Không phân biệt chữ hoa và chữ thường.
- Có thể chuẩn hóa chuỗi trước, hoặc dùng hai con trỏ kiểm tra trực tiếp từ hai đầu.

## Key Insight — RegExp + Reverse

1. Chuyển chuỗi về chữ thường bằng `toLowerCase()`.
2. Dùng `replace(/[^a-z0-9]/g, "")` để loại bỏ ký tự không phải chữ ASCII hoặc chữ số.
3. Đảo chuỗi đã làm sạch rồi so sánh với chuỗi ban đầu.
4. Hai chuỗi bằng nhau thì đó là palindrome.

## Invariant

Sau bước chuẩn hóa, chuỗi chỉ còn chữ thường ASCII và chữ số. Cách tiếp cận này không dùng invariant của con trỏ; điều kiện palindrome được xác định bằng phép so sánh toàn chuỗi với bản đảo ngược.

## Complexity

- Time: O(n) — chuẩn hóa, tách, đảo và ghép chuỗi đều tuyến tính.
- Space: O(n) — tạo chuỗi đã làm sạch, mảng ký tự và chuỗi đảo ngược.

## Current Solution — RegExp + Reverse

Đây là code người học đã gửi, giữ nguyên cách triển khai:

```javascript
var isPalindrome = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split('').reverse().join('');
};

module.exports = { isPalindrome };
```

## Mistakes I Made

Chưa ghi nhận.

## Pending

- [ ] Bổ sung lời giải Two Pointers khi người học gửi.
- [ ] So sánh hai cách tiếp cận về ý tưởng, độ phức tạp và bộ nhớ.
