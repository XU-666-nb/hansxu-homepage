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
    body.append(createElement("span", "project-arrow", "查看 →"));
    card.append(body);
    grid.append(card);
  });
};

const fetchLiveValue = async (item, valueNode) => {
  if (!item.endpoint) return;

  try {
    const response = await fetch(item.endpoint);
    const data = await response.json();
    valueNode.textContent = data.value || data.text || item.value;
  } catch {
    valueNode.textContent = item.value || "待接入";
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

    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.description));
    body.append(value);
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

setText("today-title", config.profile?.todayTitle || "欢迎来到个人空间");
setText("today-note", config.profile?.todayNote || "这里会继续补充生活、文章和项目。");
setText("year", String(new Date().getFullYear()));

renderStats();
renderLife();
renderPosts();
renderProjects();
renderLive();
renderLinks();
