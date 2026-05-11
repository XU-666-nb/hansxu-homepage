# Hans Xu 个人主页

这是一个给 `https://hansxu.ccwu.cc` 准备的静态个人主页模板，可以直接用浏览器打开，也可以部署到 Cloudflare Pages。

## 文件说明

- `index.html`：主页结构
- `styles.css`：页面样式
- `config.js`：个人资料、生活卡片、文章、项目、外部接口配置
- `script.js`：把配置渲染到页面，并读取外部 API
- `_headers`：Cloudflare Pages 安全头配置
- `_redirects`：Cloudflare Pages 单页回退配置
- `workers/api-worker.js`：给 `api.hansxu.ccwu.cc` 用的 Worker 接口示例

## 修改内容

大部分内容都在 `config.js` 里改：

```js
profile.todayTitle
life
posts
projects
liveCards
links
```

## 接入外部接口

建议用 Cloudflare Workers 做中转接口。主页现在默认会尝试读取：

```text
https://api.hansxu.ccwu.cc/weather
https://api.hansxu.ccwu.cc/github
https://api.hansxu.ccwu.cc/status
```

接口返回 JSON 即可：

```json
{
  "value": "上海 22°C"
}
```

如果你暂时还没有 Worker，把 `config.js` 里对应卡片的 `endpoint` 改成空字符串即可：

```js
{
  title: "天气",
  value: "待接入",
  endpoint: ""
}
```

## 部署到 Cloudflare Pages

1. 把这个文件夹上传到 GitHub 仓库。
2. Cloudflare Pages 选择该仓库。
3. 构建命令留空。
4. 输出目录填 `/`。
5. 在 Pages 的 Custom domains 里绑定 `hansxu.ccwu.cc`。

## 部署 Worker API

1. Cloudflare 里新建一个 Worker。
2. 把 `workers/api-worker.js` 的内容粘进去。
3. 给 Worker 绑定自定义域名 `api.hansxu.ccwu.cc`。
4. 回到主页，刷新后实时数据片区会读取：
   - `/weather`
   - `/github`
   - `/status`

这个 Worker 目前返回的是演示数据。之后你可以在里面接天气、GitHub、B 站、服务器监控等真实接口。
