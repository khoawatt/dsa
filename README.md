# DSA Learning Repository

Kho tri thức DSA theo hướng **nhận diện pattern** — không phải chỉ là đống lời giải LeetCode.

- **JavaScript** = ngôn ngữ implement chính (~80%)
- **Python** = ngôn ngữ khám phá thuật (~20%), tận dụng built-in (`deque`, `heapq`, `Counter`, `bisect`)
- **Markdown** = ngôn ngữ của tri thức (nhận diện, invariant, sai lầm)

## Mental model

```
                   DSA REPOSITORY
                         │
             ┌───────────┼───────────┐
             │           │           │
         Knowledge    Patterns    Templates
             │           │           │
           "What?"     "When?"      "How?"
             │           │           │
             └───────────┼───────────┘
                         │
                      Problems
                         │
                    Experience
                         │
             ┌───────────┴───────────┐
             │                       │
          Mistakes                Reviews
```

## Workflow khi gặp bài mới

```text
Gặp bài mới → nhận diện pattern → mở pattern note
→ xem dấu hiệu / invariant / template → giải
```

1. Đọc đề, phân loại: cấu trúc dữ liệu + pattern khả dĩ (xem `CHEATSHEET.md`).
2. Tự giải (Easy ~15-20p, Medium ~25-40p).
3. Kẹt → mở pattern note, xem template; đừng đọc lời giải ngay.
4. Implement bằng JavaScript.
5. Thêm Python chỉ khi pattern mới hoặc Python cho insight thật.
6. Sau khi AC → điền note: Recognition / Key Insight / Invariant / Mistakes.

## Các file chính

| File | Vai trò |
|---|---|
| `CHEATSHEET.md` | Bản đồ nhận diện nhanh — vào đây đầu tiên khi bí |
| `INDEX.md` | Bảng tra pattern → template → bài (sinh tự động) |
| `ROADMAP.md` | Lộ trình học 7 phase |
| `PROGRESS.md` | Mastery theo pattern (0-5) |
| `PRACTICE-CATALOG.md` | 40 bài Codeforces được nhóm theo pattern |
| `PRACTICE-CATALOG-OTHER-SITES.md` | 39 bài từ OJ khác + 20 bài bổ sung; giữ cả bài trùng dạng |

## Cấu trúc thư mục

| Thư mục | Nội dung |
|---|---|
| `00-foundations/` | Complexity, recursion, bit, math |
| `01-data-structures/` | Kiến thức cấu trúc ("what?") |
| `02-patterns/` | Thẻ dạng bài ("when?") — trái tim của repo |
| `03-templates/` | Code dùng lại ("how?") — single source of truth |
| `04-problems/` | Kho bài giải, cất theo **pattern chính** |
| `05-review/` | Sai lầm, bài khó, lịch ôn |
| `06-language-notes/` | Mẹo riêng JS & Python |
| `scripts/` | Tool tự sinh index, review-due, scaffold |

## Cách thêm một bài mới

```bash
npm run new-problem -- lc-0001-two-sum --pattern two-pointers --lang js,py
```

Quy ước bắt buộc:

1. Bài cất dưới `04-problems/<pattern-chính>/<source>-<id>-<title>/`.
2. Mỗi bài **đúng 1 pattern chính**; pattern phụ ghi trong front matter `tags`.
3. `README.md` có YAML front matter (xem `scripts/new-problem.js` để biết mẫu).
4. `solution.js` luôn có; `solution.py` tùy chọn.
5. Luôn chạy `npm run index` sau khi thêm bài để cập nhật `INDEX.md`.

## Lệnh hữu ích

```bash
npm test                    # chạy test toàn bộ bài JS
npm run index               # sinh lại INDEX.md
npm run review-due          # liệt kê bài tới hạn ôn tập
npm run validate            # kiểm tra front matter / link hỏng
```

## Quy tắc vàng

- **Nhận diện pattern > số bài đã giải.** Mục tiêu: nói được *"đây là sliding-window vì A, B, C"*, chứ không phải *"tôi nhớ đã giải cái gì đó giống vậy"*.
- Mỗi pattern phải có **ladder** (Level 1→2→3) trong `problems.md`.
- Ghi nhớ **invariant** đáng tin hơn học thuộc code.
