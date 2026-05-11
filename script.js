const config = window.HOME_CONFIG;

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
  link.href = href;
  if (href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const renderLife = () => {
  const grid = document.getElementById("life-grid");
  config.life.forEach((item) => {
    const card = createElement("article", "card life-card");
    const image = createElement("img");
    image.src = item.image;
    image.alt = item.title;

    const body = createElement("div", "card-body");
    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.text));
    card.append(image, body);
    grid.append(card);
  });
};

const renderPosts = () => {
  const list = document.getElementById("post-list");
  config.posts.forEach((item) => {
    const post = createLink(item.url, "post-item", "");
    post.append(createElement("span", "meta", item.date));
    post.append(createElement("h3", "", item.title));
    post.append(createElement("p", "", item.text));
    list.append(post);
  });
};

const renderProjects = () => {
  const grid = document.getElementById("project-grid");
  config.projects.forEach((item) => {
    const card = createLink(item.url, "card", "");
    const body = createElement("div", "card-body");
    body.append(createElement("h3", "", item.title));
    body.append(createElement("p", "", item.text));
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
    valueNode.textContent = "读取失败";
  }
};

const renderLive = () => {
  const grid = document.getElementById("live-grid");
  config.liveCards.forEach((item) => {
    const card = createElement("article", "card");
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
  config.links.forEach((item) => {
    links.append(createLink(item.url, "button", item.label));
  });
};

setText("today-title", config.profile.todayTitle);
setText("today-note", config.profile.todayNote);
setText("year", String(new Date().getFullYear()));

renderLife();
renderPosts();
renderProjects();
renderLive();
renderLinks();
