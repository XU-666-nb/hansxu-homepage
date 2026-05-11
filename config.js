window.HOME_CONFIG = {
  profile: {
    name: "Hans Xu",
    domain: "hansxu.ccwu.cc",
    todayTitle: "欢迎来到 Hans Xu 的个人空间",
    todayNote: "这里可以慢慢接入生活照片、文章、GitHub、天气和服务器状态。"
  },
  life: [
    {
      title: "最近生活",
      text: "放几张日常照片，或者写一句今天发生的小事。",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "旅行记录",
      text: "把去过的城市、拍过的照片和路线整理在这里。",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "相册入口",
      text: "以后可以接 R2、AList、NAS 或 Mx Space 的图片内容。",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  posts: [
    {
      title: "第一篇文章",
      date: "2026-05-11",
      text: "这里可以先手动写，之后再接 Mx Space API 自动读取最新文章。",
      url: "#"
    },
    {
      title: "我的工具箱",
      date: "2026-05-11",
      text: "记录常用软件、网站、服务器、Cloudflare 配置和折腾过程。",
      url: "#"
    }
  ],
  projects: [
    {
      title: "个人主页",
      text: "当前这个站点，适合部署到 Cloudflare Pages。",
      url: "https://hansxu.ccwu.cc"
    },
    {
      title: "网盘入口",
      text: "可以放 AList、123 云盘分享页或常用文件导航。",
      url: "#"
    },
    {
      title: "接口中转",
      text: "通过 Cloudflare Workers 隐藏密钥并缓存第三方 API。",
      url: "#"
    }
  ],
  liveCards: [
    {
      title: "天气",
      description: "建议由 Cloudflare Worker 请求天气 API。",
      value: "待接入",
      endpoint: "https://api.hansxu.ccwu.cc/weather"
    },
    {
      title: "GitHub",
      description: "可展示仓库、Star、最近提交。",
      value: "待接入",
      endpoint: "https://api.hansxu.ccwu.cc/github"
    },
    {
      title: "服务器",
      description: "可展示在线状态、CPU、内存或服务健康度。",
      value: "待接入",
      endpoint: "https://api.hansxu.ccwu.cc/status"
    }
  ],
  links: [
    { label: "Email", url: "mailto:me@ccwu.cc" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "Bilibili", url: "https://www.bilibili.com/" },
    { label: "Files", url: "#" }
  ]
};
