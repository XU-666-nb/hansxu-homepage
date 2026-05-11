# Cloudflare Pages 绑定 hansxu.ccwu.cc

## Pages 部署

1. 新建一个 GitHub 仓库，例如 `hansxu-homepage`。
2. 上传本目录下的文件。
3. 打开 Cloudflare Dashboard。
4. 进入 `Workers & Pages`。
5. 选择 `Create application`。
6. 选择 `Pages`，连接 GitHub 仓库。
7. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
8. 部署完成后，进入 `Custom domains`。
9. 添加 `hansxu.ccwu.cc`。

## DNS

Cloudflare Pages 通常会自动创建 CNAME。最终效果类似：

```text
hansxu.ccwu.cc CNAME your-project.pages.dev
```

## Worker API

如果要让实时数据片区能用：

1. 新建 Worker。
2. 粘贴 `workers/api-worker.js`。
3. 在 Worker 的自定义域名里绑定：

```text
api.hansxu.ccwu.cc
```

## 后续可接入

- 天气：和风天气、高德天气、Open-Meteo
- GitHub：GitHub REST API
- B 站：粉丝数、视频列表
- 服务器状态：Uptime Kuma、Beszel、自写健康检查
- Mx Space：最新文章、说说、页面内容
