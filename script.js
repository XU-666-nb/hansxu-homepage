const config = window.HOME_CONFIG || {};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createLink = (href, className, text) => {
  const link = createElement("a", className, text);
  link.href = href || "#";
  if (link.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const weatherTextByCode = {
  0: "\u6674",
  1: "\u5927\u90e8\u6674\u6717",
  2: "\u5c40\u90e8\u591a\u4e91",
  3: "\u9634",
  45: "\u6709\u96fe",
  48: "\u96fe\u51c7",
  51: "\u5c0f\u6bdb\u6bdb\u96e8",
  53: "\u4e2d\u7b49\u6bdb\u6bdb\u96e8",
  55: "\u5927\u6bdb\u6bdb\u96e8",
  61: "\u5c0f\u96e8",
  63: "\u4e2d\u96e8",
  65: "\u5927\u96e8",
  71: "\u5c0f\u96ea",
  73: "\u4e2d\u96ea",
  75: "\u5927\u96ea",
  80: "\u5c0f\u9635\u96e8",
  81: "\u4e2d\u7b49\u9635\u96e8",
  82: "\u5f3a\u9635\u96e8",
  95: "\u96f7\u66b4",
  96: "\u96f7\u66b4\u4f34\u5c0f\u51b0\u96f9",
  99: "\u96f7\u66b4\u4f34\u5927\u51b0\u96f9"
};

const formatWeather = (data) => {
  const current = data.current || {};
  const temperature = Math.round(current.temperature_2m);
  const apparent = Math.round(current.apparent_temperature);
  const humidity = Math.round(current.relative_humidity_2m);
  const wind = Math.round(current.wind_speed_10m);
  const weather = weatherTextByCode[current.weather_code] || "\u5929\u6c14\u6570\u636e";

  return {
    value: `${temperature}\u00b0C`,
    detail: `${weather} · \u4f53\u611f ${apparent}\u00b0C · \u6e7f\u5ea6 ${humidity}% · \u98ce\u901f ${wind} km/h`
  };
};

const renderStats = () => {
  const list = document.getElementById("status-list");
  if (!list || !config.profile?.stats) return;
  list.textContent = "";

  config.profile.stats.forEach((item) => {
    const stat = createElement("div", "status-item");
    stat.append(createElement("span", "", item.label));
    stat.append(createElement("strong", "", item.value));
    list.append(stat);
  });
};

const renderLife = () => {
  const grid = document.getElementById("life-grid");
  if (!grid || !config.life) return;
  grid.textContent = "";

  config.life.forEach((item) => {
    const card = createElement("article", "card life-card");
    const image = createElement("img");
    image.src = item.image;
    image.alt = item.title;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      card.classList.add("image-missing");
      image.remove();
    });

    const body = createElement("div", "card-body");
    body.append(createElement("span", "meta", item.tag || "Life"));
    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.text));
    card.append(image, body);
    grid.append(card);
  });
};

const renderPosts = () => {
  const list = document.getElementById("post-list");
  if (!list || !config.posts) return;
  list.textContent = "";

  config.posts.forEach((item) => {
    const post = createLink(item.url, "post-item", "");
    post.append(createElement("span", "meta", item.date));
    post.append(createElement("h3", "", item.title));
    post.append(createElement("p", "", item.text));

    const tags = createElement("div", "tag-row");
    (item.tags || []).forEach((tag) => tags.append(createElement("span", "tag", tag)));
    post.append(tags);
    list.append(post);
  });
};

const renderProjects = () => {
  const grid = document.getElementById("project-grid");
  if (!grid || !config.projects) return;
  grid.textContent = "";

  config.projects.forEach((item) => {
    const card = createLink(item.url, "card project-card", "");
    const body = createElement("div", "card-body");
    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.text));
    body.append(createElement("span", "project-arrow", "\u67e5\u770b \u2192"));
    card.append(body);
    grid.append(card);
  });
};

const fetchLiveValue = async (item, valueNode) => {
  if (!item.endpoint) return;

  try {
    const response = await fetch(item.endpoint);
    const data = await response.json();
    if (item.type === "weather") {
      const weather = formatWeather(data);
      valueNode.textContent = weather.value;
      valueNode.nextElementSibling.textContent = weather.detail;
      return;
    }

    valueNode.textContent = data.value || data.text || item.value;
  } catch {
    valueNode.textContent = item.value || "\u5f85\u63a5\u5165";
    if (valueNode.nextElementSibling) {
      valueNode.nextElementSibling.textContent = "\u6682\u65f6\u65e0\u6cd5\u8bfb\u53d6\u5b9e\u65f6\u5929\u6c14";
    }
  }
};

const renderLive = () => {
  const grid = document.getElementById("live-grid");
  if (!grid || !config.liveCards) return;
  grid.textContent = "";

  config.liveCards.forEach((item) => {
    const card = createElement("article", "card live-card");
    const body = createElement("div", "card-body");
    const value = createElement("div", "live-value", item.value);
    const detail = createElement("p", "live-detail", "\u6b63\u5728\u8bfb\u53d6\u5b9e\u65f6\u5929\u6c14...");

    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.description));
    body.append(value);
    body.append(detail);
    card.append(body);
    grid.append(card);

    fetchLiveValue(item, value);
  });
};

const renderLinks = () => {
  const links = document.getElementById("contact-links");
  if (!links || !config.links) return;
  links.textContent = "";

  config.links.forEach((item) => {
    links.append(createLink(item.url, "button", item.label));
  });
};

setText("today-title", config.profile?.todayTitle || "\u6b22\u8fce\u6765\u5230\u4e2a\u4eba\u7a7a\u95f4");
setText("today-note", config.profile?.todayNote || "\u8fd9\u91cc\u4f1a\u7ee7\u7eed\u8865\u5145\u751f\u6d3b\u3001\u6587\u7ae0\u548c\u9879\u76ee\u3002");
setText("year", String(new Date().getFullYear()));

renderStats();
renderLife();
renderPosts();
renderProjects();
renderLive();
renderLinks();
