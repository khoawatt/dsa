---
title: Valid Palindrome
source: lc-125
difficulty: easy
pattern: two-pointers
tags: [string, regexp, reverse, opposite-direction]
languages: [js]
time: O(n)
space: O(1)
mastery: 1
next_review: 2026-11-06
done_at: 2026-11-05
---

# Valid Palindrome

Source: LeetCode 125 | Difficulty: Easy

## Data Structure

String

## Pattern

**Primary DSA pattern: Two Pointers — Opposite Direction.**

Ngoài cách dùng RegExp để chuẩn hóa rồi đảo chuỗi, bài này có thể giải trực tiếp bằng hai con trỏ đi từ hai đầu vào giữa.

## Recognition

- Đề yêu cầu kiểm tra chuỗi palindrome.
- Bỏ qua ký tự không phải chữ và số.
- Không phân biệt chữ hoa và chữ thường.
- Có thể nhận diện Two Pointers vì cần so sánh ký tự ở hai đầu chuỗi.

## Approach 1 — RegExp + Reverse

### Key Insight

1. Chuyển chuỗi về chữ thường bằng `toLowerCase()`.
2. Dùng `replace(/[^a-z0-9]/g, "")` để loại bỏ ký tự không phải chữ ASCII hoặc chữ số.
3. Đảo chuỗi đã làm sạch rồi so sánh với chuỗi ban đầu.
4. Hai chuỗi bằng nhau thì đó là palindrome.

### Code

```javascript
var isPalindromeRegex = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split('').reverse().join('');
};
```

### Complexity

- Time: O(n) — chuẩn hóa, tách, đảo và ghép chuỗi đều tuyến tính.
- Space: O(n) — tạo chuỗi đã làm sạch, mảng ký tự và chuỗi đảo ngược.

## Approach 2 — Two Pointers

### Key Insight

Không cần tạo chuỗi mới. Dùng hai con trỏ:

- `left` bắt đầu ở đầu chuỗi.
- `right` bắt đầu ở cuối chuỗi.
- Bỏ qua ký tự không phải chữ hoặc số ở mỗi đầu.
- So sánh hai ký tự sau khi chuyển về chữ thường.
- Nếu khác nhau, kết luận ngay không phải palindrome; nếu giống nhau, đưa hai con trỏ vào giữa.

### Code

```javascript
var isPalindromeTwoPointers = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNumeric = (char) => {
        return /[a-z0-9]/i.test(char);
    };

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
```

### Invariant

> Sau mỗi lần so sánh thành công, mọi cặp ký tự hợp lệ đã xử lý ở hai đầu đều bằng nhau khi không phân biệt hoa thường. Phần chưa xử lý nằm trong đoạn [left, right].

### Complexity

- Time: O(n) — mỗi con trỏ chỉ di chuyển về phía giữa; mỗi ký tự được xét tối đa một số lần hằng.
- Space: O(1) — chỉ dùng hai con trỏ và một hàm kiểm tra ký tự, không tạo chuỗi/mảng phụ thuộc kích thước đầu vào.

## Comparison

| Tiêu chí | RegExp + Reverse | Two Pointers |
|---|---|---|
| Time | O(n) | O(n) |
| Extra space | O(n) | O(1) |
| Tạo chuỗi/mảng mới | Có | Không |
| Ý tưởng chính | Chuẩn hóa rồi đảo | So sánh trực tiếp hai đầu |
| Điểm mạnh | Ngắn, dễ đọc | Tiết kiệm bộ nhớ, thể hiện pattern |

## Mistakes I Made

Chưa ghi nhận.

## Related Problems

- Two Sum II (lc-167)
- Remove Duplicates from Sorted Array (lc-26)
- Container With Most Water (lc-11)
