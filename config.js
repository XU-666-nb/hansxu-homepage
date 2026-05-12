window.HOME_CONFIG = {
  profile: {
    name: "Hans Xu",
    domain: "hansxu.ccwu.cc",
    todayTitle: "欢迎来到 Hans Xu 的个人空间",
    todayNote: "这里会慢慢整理生活照片、文章笔记、项目和一些有用的小工具。",
    stats: [
      { label: "相册", value: "4 组" },
      { label: "文章", value: "1 篇" },
      { label: "项目", value: "3 个" }
    ]
  },
  life: [
    {
      title: "小城古桥",
      tag: "家乡",
      text: "老家的桥、树影和水面，适合放在首页做一个安静的开场。",
      image: "./assets/life/old-bridge.png"
    },
    {
      title: "傍晚的桥",
      tag: "散步",
      text: "河面、石桥和慢慢暗下来的天空，像一天快要收尾时的停顿。",
      image: "./assets/life/evening-bridge.png"
    },
    {
      title: "最近生活",
      tag: "日常",
      text: "放几张日常照片，或者写一句今天发生的小事。",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "旅行记录",
      tag: "路上",
      text: "把去过的城市、拍过的照片和路线整理在这里。",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  posts: [
    {
      title: "自己创建个人博客的详细步骤",
      date: "2026-05-12",
      text: "一篇 Word 文档，记录从准备素材、搭建静态页面、放入照片文章，到用 GitHub 和 Cloudflare Pages 发布个人博客的完整流程。",
      url: "./assets/article/create-personal-blog.docx",
      tags: ["个人博客", "教程", "Word"]
    }
  ],
  projects: [
    {
      title: "个人主页",
      text: "当前这个站点，适合部署到 Cloudflare Pages，也方便继续扩展成博客。",
      url: "https://hansxu.ccwu.cc"
    },
    {
      title: "网盘入口",
      text: "可以放 AList、123 云盘分享页或常用文件导航。",
      url: "#"
    },
    {
      title: "接口中转",
      text: "通过 Cloudflare Workers 隐藏密钥，并缓存第三方 API。",
      url: "#"
    }
  ],
  liveCards: [
    {
      title: "天气",
      description: "建议用 Cloudflare Worker 请求天气 API。",
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
