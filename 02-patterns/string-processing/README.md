# String Processing

## When should I think about this pattern?

- Bài toán yêu cầu so sánh, quét, biến đổi hoặc tìm cấu trúc chung trong một hay nhiều chuỗi.
- Cần xử lý ký tự theo vị trí hoặc theo thứ tự xuất hiện.
- Có thể giải bằng một hoặc nhiều vòng lặp tuyến tính trên chuỗi.

## Recognition clues

- "longest common prefix"
- "compare strings"
- "first mismatch"
- "scan characters"
- "substring", "prefix", "suffix"

## Core idea

Xác định cấu trúc cần tìm trong chuỗi, sau đó chọn cách duyệt phù hợp. Với **vertical scanning**, duyệt từng index của một chuỗi chuẩn và so sánh ký tự cùng index ở các chuỗi còn lại. Dừng ngay khi gặp mismatch hoặc một chuỗi kết thúc.

## Invariant

> Phần prefix đã được xác nhận luôn thỏa điều kiện của tất cả chuỗi đã xét. Chỉ mở rộng kết quả khi mọi chuỗi đều khớp tại vị trí hiện tại.

## Complexity

- Time: Phụ thuộc số chuỗi và số ký tự được quét; vertical scanning cho bài Longest Common Prefix là O(N * L).
- Space: O(1) auxiliary space nếu chỉ dùng các biến index và không tạo cấu trúc phụ thuộc kích thước đầu vào.

## Variants

1. **Vertical scanning** — so sánh cùng vị trí ký tự giữa nhiều chuỗi.
2. **Horizontal scanning** — lần lượt cập nhật prefix chung giữa từng cặp chuỗi.
3. **Trie** — hữu ích khi cần lưu trữ và truy vấn prefix cho nhiều chuỗi.

## Representative problems

- [Longest Common Prefix](../../04-problems/string-processing/lc-0014-longest-common-prefix/README.md) (lc-14)

## Common confusions

- **Prefix vs Substring**: prefix luôn bắt đầu ở index 0; substring có thể bắt đầu ở bất kỳ vị trí nào.
- **String Processing vs Trie**: vertical scanning phù hợp khi cần so sánh một tập chuỗi; Trie hữu ích khi có nhiều thao tác truy vấn prefix trên một tập từ.
- **String Processing vs Sliding Window**: sliding window duy trì một đoạn liên tiếp biến đổi theo điều kiện; vertical scanning so sánh các vị trí tương ứng giữa nhiều chuỗi.
