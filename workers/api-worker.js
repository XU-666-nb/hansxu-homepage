const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "https://hansxu.ccwu.cc",
      "cache-control": "public, max-age=300"
    }
  });

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/weather") {
      return json({
        value: "待接入天气",
        text: "把这里替换成真实天气 API 的结果。"
      });
    }

    if (url.pathname === "/github") {
      return json({
        value: "待接入 GitHub",
        text: "可以展示仓库、Star 或最近提交。"
      });
    }

    if (url.pathname === "/status") {
      return json({
        value: "Online",
        text: "主页接口服务正常。"
      });
    }

    return json({ error: "Not found" }, 404);
  }
};
