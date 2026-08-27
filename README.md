# Infinite Brand Showcase

Tôi muốn thay thế phần Infinite Marquee dạng text hiện tại trên landing page (virouter.com) bằng một component Infinite Logo Marquee (băng chuyền logo cuộn vô tận mượt mà).

### Yêu cầu chi tiết:
1. **Danh sách thương hiệu/logo cần hiển thị:**
   - Anthropic, OpenAI, Moonshot AI, DeepSeek, Z.ai, MiniMax, Seedance, X.ai, Claude Code, Codex, ChatGPT, Gemini, Qwen, OpenCode, Hermes Agent.

2. **Nguồn icon/logo:**
   - Sử dụng các icon SVG hoặc định dạng ảnh tương ứng được tham chiếu từ kho: https://icon.xiaoge.org (hoặc chuẩn bị thẻ <img> / SVG inline sắc nét, đồng bộ kích thước).

3. **Thiết kế & Hiệu ứng UI/UX:**
   - Tạo 2 hàng chạy ngược chiều nhau (hoặc 1 hàng liền mạch vô tận) dạng thẻ/pill có icon + tên thương hiệu bên cạnh, phong cách Dark Mode công nghệ hiện đại đồng bộ với giao diện virouter.
   - Hiệu ứng trượt ngang vô tận, mượt mà (sử dụng CSS `@keyframes marquee` hoặc Framer Motion nếu dùng React).
   - Thêm hiệu ứng làm mờ 2 bên mép viền (mask-image/fade gradient trái và phải) để tạo cảm giác trượt liền mạch vào không gian nền.
   - Hỗ trợ `pause-on-hover` (tạm dừng cuộn khi rê chuột vào).
   - Tối ưu hiển thị responsive hoàn hảo trên cả Mobile lẫn Desktop.

4. **Đầu ra mong muốn:**
   - Cung cấp toàn bộ mã nguồn component (HTML/CSS, Tailwind CSS hoặc React/Next.js tùy theo tech stack hiện tại của dự án).
   - Hướng dẫn vị trí chèn và cách import component vào mã nguồn landing page hiện có.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6f4685c4-92db-4e15-b2ec-6aee57e9b5c9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
