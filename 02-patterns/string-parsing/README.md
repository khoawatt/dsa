# String Parsing

## When should I think about this pattern?

- Chuỗi đầu vào có nhiều quy tắc phải xử lý theo đúng thứ tự.
- Cần bỏ qua prefix, nhận diện dấu hoặc token, rồi đọc một đoạn ký tự liên tiếp.
- Phải dừng ngay khi gặp ký tự không hợp lệ theo grammar của đề.
- Cần kiểm soát overflow hoặc giới hạn giá trị trong lúc đọc.

## Recognition clues

- "convert string to integer"
- "parse", "atoi", "valid number"
- "read consecutive digits"
- "ignore leading spaces"
- "stop at the first non-digit"

## Core idea

Dùng một index duyệt chuỗi từ trái sang phải và mô phỏng từng quy tắc của đề. Giữ trạng thái cần thiết (ví dụ sign, current number), chỉ xử lý ký tự hợp lệ và dừng đúng thời điểm. Nếu có giới hạn số học, kiểm tra trước phép cập nhật có nguy cơ overflow.

## Invariant

> Trước mỗi bước, trạng thái hiện tại phản ánh chính xác phần prefix đã xử lý; index trỏ tới ký tự tiếp theo chưa được xử lý và mọi giới hạn đã được duy trì.

## Complexity

- Time: O(n) nếu mỗi ký tự được duyệt tối đa một số lần hằng.
- Space: O(1) nếu chỉ giữ một số biến trạng thái cố định.

## Variants

1. **Numeric parsing** — đọc dấu và chữ số, kiểm soát overflow.
2. **Token parsing** — nhận diện token theo grammar.
3. **Validation parsing** — kiểm tra chuỗi có tuân thủ cấu trúc yêu cầu hay không.

## Representative problems

- [String to Integer (atoi)](../../04-problems/string-parsing/lc-0008-string-to-integer-atoi/README.md) (lc-8)

## Common confusions

- **String Parsing vs RegExp**: RegExp phù hợp để nhận diện mẫu ký tự; parsing phù hợp khi thứ tự xử lý, trạng thái, điều kiện dừng hoặc giới hạn số học ảnh hưởng đến kết quả.
- **String Parsing vs Two Pointers**: parsing thường dùng một index tuần tự; two pointers duy trì hai vị trí để xử lý hai đầu hoặc hai vùng của dữ liệu.
