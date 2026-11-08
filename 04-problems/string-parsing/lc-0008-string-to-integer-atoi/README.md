---
title: String to Integer (atoi)
source: lc-8
difficulty: medium
pattern: string-parsing
tags: [string, parsing, simulation, overflow]
languages: [js]
time: O(n)
space: O(1)
mastery: 1
next_review: 2026-11-10
done_at: 2026-11-09
---

# String to Integer (atoi)

Source: LeetCode 8 | Difficulty: Medium

## Data Structure

String

## Pattern

**String Parsing — single-pass simulation.**

Duyệt chuỗi từ trái sang phải bằng một index. Mỗi giai đoạn xử lý một quy tắc của đề: khoảng trắng đầu, dấu, chữ số liên tiếp và giới hạn số nguyên 32-bit.

## Recognition

- Đề yêu cầu chuyển chuỗi thành số theo nhiều quy tắc tuần tự.
- Chỉ đọc phần chữ số liên tiếp đầu tiên sau khoảng trắng và dấu tùy chọn.
- Phải dừng khi gặp ký tự không phải chữ số.
- Có giới hạn giá trị đầu ra và phải xử lý overflow.

## Key Insight

Không chuyển toàn bộ chuỗi bằng `Number()` hoặc `parseInt()`. Tự duyệt từng ký tự để kiểm soát chính xác quy tắc dừng và overflow.

1. Bỏ qua khoảng trắng ASCII ở đầu.
2. Đọc dấu `+` hoặc `-` nếu có.
3. Tính giới hạn trị tuyệt đối: số dương dùng `2147483647`, số âm dùng `2147483648`.
4. Đọc từng chữ số liên tiếp.
5. Trước khi cập nhật `num`, kiểm tra xem thêm chữ số mới có vượt giới hạn hay không.
6. Trả về `sign * num`; nếu overflow thì trả về MAX hoặc MIN tương ứng.

## Overflow Check

Ta muốn thêm chữ số `digit` vào `num` mà vẫn thỏa:

```text
num * 10 + digit <= limit
```

Đặt:

- `threshold = floor(limit / 10)`
- `lastDigit = limit % 10`

Overflow xảy ra khi:

```javascript
num > threshold ||
(num === threshold && digit > lastDigit)
```

Cần kiểm tra **trước** phép cập nhật `num = num * 10 + digit` để tránh tạo ra giá trị vượt giới hạn.

## Invariant

> Trước mỗi lần đọc chữ số mới, `num` là giá trị của toàn bộ chữ số hợp lệ đã đọc trước đó, không âm và chưa vượt quá giới hạn trị tuyệt đối tương ứng. Index `i` luôn trỏ tới ký tự tiếp theo chưa được xử lý.

## Complexity

- Time: O(n) — index chỉ đi từ trái sang phải, mỗi ký tự được xét tối đa một lần.
- Space: O(1) — chỉ dùng một số biến cố định, không tạo chuỗi hoặc mảng phụ thuộc đầu vào.

## Solution — JavaScript

Code do người học tự triển khai. Chỉ bổ sung khai báo `const` cho biến `digit` để tránh tạo biến global ngoài ý muốn.

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;
    let num = 0;
    let sign = 1;

    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);

    // STEP 1: Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // STEP 2: Determine sign
    if (i < s.length && (s[i] === "-" || s[i] === "+")) {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    // STEP 3: Prepare overflow checking
    const limit = sign > 0 ? MAX : -MIN;
    const threshold = Math.floor(limit / 10);
    const lastDigit = limit % 10;

    // STEP 4: Read consecutive digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        const digit = Number(s[i]);

        // Check overflow BEFORE updating num
        if (num > threshold || (num === threshold && digit > lastDigit)) {
            return sign > 0 ? MAX : MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    // STEP 5: Return result
    return sign * num;
};

module.exports = { myAtoi };
```

## Mistakes I Made

- Biến `digit` được gán nhưng chưa khai báo. Đã sửa thành `const digit`.
- Luôn kiểm tra overflow trước khi nhân `num` với 10 và cộng chữ số mới.

## Test Cases

Các nhóm test bao gồm số dương/âm, khoảng trắng, dấu, ký tự dừng, chuỗi không có chữ số, số 0 đầu chuỗi và hai biên 32-bit.

## Related Problems

- Valid Number (lc-65)
- String to Integer (atoi) là bài luyện parsing và boundary checking.
