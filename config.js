window.HOME_CONFIG = {
  profile: {
    name: "Hans Xu",
    domain: "hansxu.ccwu.cc",
    todayTitle: "\u6b22\u8fce\u6765\u5230 Hans Xu \u7684\u4e2a\u4eba\u7a7a\u95f4",
    todayNote: "\u8fd9\u91cc\u4f1a\u6162\u6162\u6574\u7406\u751f\u6d3b\u7167\u7247\u3001\u6587\u7ae0\u7b14\u8bb0\u3001\u9879\u76ee\u548c\u4e00\u4e9b\u6709\u7528\u7684\u5c0f\u5de5\u5177\u3002",
    stats: [
      { label: "\u76f8\u518c", value: "4 \u7ec4" },
      { label: "\u6587\u7ae0", value: "1 \u7bc7" },
      { label: "\u9879\u76ee", value: "3 \u4e2a" }
    ]
  },
  life: [
    {
      title: "\u5c0f\u57ce\u53e4\u6865",
      tag: "\u5bb6\u4e61",
      text: "\u8001\u5bb6\u7684\u6865\u3001\u6811\u5f71\u548c\u6c34\u9762\uff0c\u9002\u5408\u653e\u5728\u9996\u9875\u505a\u4e00\u4e2a\u5b89\u9759\u7684\u5f00\u573a\u3002",
      image: "./assets/life/old-bridge.png"
    },
    {
      title: "\u508d\u665a\u7684\u6865",
      tag: "\u6563\u6b65",
      text: "\u6cb3\u9762\u3001\u77f3\u6865\u548c\u6162\u6162\u6697\u4e0b\u6765\u7684\u5929\u7a7a\uff0c\u50cf\u4e00\u5929\u5feb\u8981\u6536\u5c3e\u65f6\u7684\u505c\u987f\u3002",
      image: "./assets/life/evening-bridge.png"
    },
    {
      title: "\u6700\u8fd1\u751f\u6d3b",
      tag: "\u65e5\u5e38",
      text: "\u653e\u51e0\u5f20\u65e5\u5e38\u7167\u7247\uff0c\u6216\u8005\u5199\u4e00\u53e5\u4eca\u5929\u53d1\u751f\u7684\u5c0f\u4e8b\u3002",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "\u65c5\u884c\u8bb0\u5f55",
      tag: "\u8def\u4e0a",
      text: "\u628a\u53bb\u8fc7\u7684\u57ce\u5e02\u3001\u62cd\u8fc7\u7684\u7167\u7247\u548c\u8def\u7ebf\u6574\u7406\u5728\u8fd9\u91cc\u3002",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80"
    }
  ],
  posts: [
    {
      title: "\u81ea\u5df1\u521b\u5efa\u4e2a\u4eba\u535a\u5ba2\u7684\u8be6\u7ec6\u6b65\u9aa4",
      date: "2026-05-12",
      text: "\u8bb0\u5f55\u4ece\u51c6\u5907\u7d20\u6750\u3001\u642d\u5efa\u9759\u6001\u9875\u9762\u3001\u653e\u5165\u7167\u7247\u6587\u7ae0\uff0c\u5230\u7528 GitHub \u548c Cloudflare Pages \u53d1\u5e03\u4e2a\u4eba\u535a\u5ba2\u7684\u5b8c\u6574\u6d41\u7a0b\u3002",
      url: "./assets/article/create-personal-blog.html",
      tags: ["\u4e2a\u4eba\u535a\u5ba2", "\u6559\u7a0b", "\u7ad9\u5185\u9605\u8bfb"]
    }
  ],
  projects: [
    {
      title: "\u4e2a\u4eba\u4e3b\u9875",
      text: "\u5f53\u524d\u8fd9\u4e2a\u7ad9\u70b9\uff0c\u9002\u5408\u90e8\u7f72\u5230 Cloudflare Pages\uff0c\u4e5f\u65b9\u4fbf\u7ee7\u7eed\u6269\u5c55\u6210\u535a\u5ba2\u3002",
      url: "https://hansxu.ccwu.cc"
    },
    {
      title: "\u7f51\u76d8\u5165\u53e3",
      text: "\u53ef\u4ee5\u653e AList\u3001123 \u4e91\u76d8\u5206\u4eab\u9875\u6216\u5e38\u7528\u6587\u4ef6\u5bfc\u822a\u3002",
      url: "#"
    },
    {
      title: "\u63a5\u53e3\u4e2d\u8f6c",
      text: "\u901a\u8fc7 Cloudflare Workers \u9690\u85cf\u5bc6\u94a5\uff0c\u5e76\u7f13\u5b58\u7b2c\u4e09\u65b9 API\u3002",
      url: "#"
    }
  ],
  liveCards: [
    {
      title: "\u6b66\u6c49\u5929\u6c14",
      description: "\u4e2d\u56fd\u6e56\u5317\u6b66\u6c49\u5b9e\u65f6\u5929\u6c14\u3002",
      value: "\u52a0\u8f7d\u4e2d",
      type: "weather",
      endpoint:
        "https://api.open-meteo.com/v1/forecast?latitude=30.5928&longitude=114.3055&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia%2FShanghai"
    },
    {
      title: "\u4e1c\u4eac\u5929\u6c14",
      description: "\u65e5\u672c\u4e1c\u4eac\u5b9e\u65f6\u5929\u6c14\u3002",
      value: "\u52a0\u8f7d\u4e2d",
      type: "weather",
      endpoint:
        "https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia%2FTokyo"
    },
    {
      title: "\u7ebd\u7ea6\u5929\u6c14",
      description: "\u7f8e\u56fd\u7ebd\u7ea6\u5b9e\u65f6\u5929\u6c14\u3002",
      value: "\u52a0\u8f7d\u4e2d",
      type: "weather",
      endpoint:
        "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=America%2FNew_York"
    }
  ],
  links: [
    { label: "Email", url: "mailto:me@ccwu.cc" },
    { label: "GitHub", url: "https://github.com/" },
    { label: "Bilibili", url: "https://www.bilibili.com/" },
    { label: "Files", url: "#" }
  ]
};
