# Zheng Personal Website

詹政的个人数字档案网站。项目当前处于 Phase 1，仅包含可运行的工程基础、全局样式和基础 SEO 配置。

## 技术栈

- Next.js（App Router）
- TypeScript
- Tailwind CSS
- pnpm

## 本地运行

环境要求：Node.js 20.9 或更高版本，并启用 pnpm。

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 常用命令

```bash
pnpm dev       # 启动本地开发环境
pnpm build     # 创建生产构建
pnpm start     # 启动生产服务
pnpm lint      # 运行代码检查
```

## 环境变量

正式部署时设置 `NEXT_PUBLIC_SITE_URL` 为网站完整地址，用于生成正确的 SEO 链接。未设置时默认使用 `http://localhost:3000`。

## 当前范围

本阶段不包含具体内容页面、数据库、CMS、登录、API 或第三方服务。原始照片和文字素材仍保存在 `assets/`，等待后续阶段整理。
