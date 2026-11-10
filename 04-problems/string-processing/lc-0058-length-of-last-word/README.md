---
title: Length of Last Word
source: lc-58
difficulty: easy
pattern: string-processing
tags: [string, traversal, reverse-scan]
languages: [js]
time: O(n)
space: O(1)
mastery: 1
next_review: 2026-11-10
done_at: 2026-11-10
---

# Length of Last Word

Source: LeetCode 58 | Difficulty: Easy

## Data Structure

String

## Pattern

**String Processing — Reverse Traversal.**

Duyệt chuỗi từ phải sang trái. Trước tiên bỏ qua khoảng trắng ở cuối chuỗi, sau đó đếm các ký tự liên tiếp cho đến khi gặp khoảng trắng hoặc chạm đầu chuỗi.

## Recognition

- Đề yêu cầu lấy thông tin từ từ cuối cùng trong chuỗi.
- Chuỗi có thể chứa nhiều khoảng trắng ở cuối.
- Có thể bắt đầu duyệt từ cuối để tránh phải tách toàn bộ chuỗi.
- Chỉ cần đếm độ dài, không cần tạo chuỗi chứa từ cuối.

## User's First Attempt

Người học tự triển khai hướng duyệt ngược, dùng RegExp để nhận diện chữ cái:

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length;
  let rs = "";
  let cnt = 0;

  while (i > 0) {
      if (s[i - 1] === " ") i--;

      if (/^[A-Za-z]+$/.test(s[i - 1])) {
          while (i > 0 && s[i - 1] !== " ") {
              cnt++;
              i--;
          }
          return cnt;
      }
  }
};
```

### Review

- Ý tưởng duyệt từ phải sang trái là đúng.
- RegExp `/^[A-Za-z]+$/` không cần thiết vì đề đảm bảo từ chỉ chứa chữ cái tiếng Anh; chỉ cần phân biệt dấu cách và ký tự thuộc từ.
- Biến `rs` chưa được sử dụng.
- Theo constraints của đề, chuỗi luôn có ít nhất một từ. Nếu mở rộng ngoài constraints và đầu vào chỉ có khoảng trắng, hàm gốc có thể kết thúc mà không trả về số.

## Optimized Solution — Reverse Scan

### Key Insight

Tách quá trình thành hai vòng lặp có nhiệm vụ riêng:

1. Bỏ qua toàn bộ khoảng trắng ở cuối chuỗi.
2. Đếm ký tự của từ cuối cùng cho đến khi gặp khoảng trắng hoặc hết chuỗi.

Không cần RegExp, `split()`, `trim()` hay tạo chuỗi mới.

### Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length;
    let cnt = 0;

    // STEP 1: Skip trailing spaces
    while (i > 0 && s[i - 1] === " ") {
        i--;
    }

    // STEP 2: Count characters in the last word
    while (i > 0 && s[i - 1] !== " ") {
        cnt++;
        i--;
    }

    return cnt;
};

module.exports = { lengthOfLastWord };
```

## Walkthrough

Input:

```text
"   fly me   to   the moon  "
```

- Vòng lặp thứ nhất bỏ qua hai khoảng trắng cuối chuỗi.
- Vòng lặp thứ hai đếm `moon`.
- Gặp khoảng trắng trước `moon`, dừng lại.
- Kết quả: `4`.

## Invariant

> Sau bước bỏ khoảng trắng cuối, `i` trỏ ngay sau ký tự cuối cùng của từ cuối. Trong vòng đếm, `cnt` luôn bằng số ký tự liên tiếp đã duyệt thuộc từ cuối, và `i` trỏ tới ký tự tiếp theo ở bên trái chưa được xử lý.

## Complexity

- Time: O(n) — trong trường hợp xấu nhất, hai vòng lặp duyệt qua toàn bộ chuỗi; mỗi ký tự chỉ được xử lý một lần.
- Auxiliary space: O(1) — chỉ sử dụng hai biến `i` và `cnt`, không tạo chuỗi hoặc mảng phụ.

## Related Problems

- Longest Common Prefix (lc-14)
- Reverse Words in a String (lc-151)
