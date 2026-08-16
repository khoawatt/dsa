# JavaScript — Priority Queue

JavaScript **không có** priority queue built-in.

## Lựa chọn

1. Tự implement min-heap → xem `03-templates/javascript/heap.js`.
2. Sort lại mỗi lần (chỉ khi n nhỏ) — không tối ưu.
3. Dùng array làm stack các giá trị (chỉ khi muốn min/max đơn giản).

## Mẹo

- Heap kích thước K cho bài Top K (O(n log k) thay vì O(n log n) sort).
- Dijkstra cần heap → copy `heap.js` với comparator tuple `[node, dist]`.
