export function ensureTag(selector, createEl) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = createEl();
    document.head.appendChild(el);
  }
  return el;
}

export function setCanonical(href) {
  const link = ensureTag("link[rel=canonical]", () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  });
  link.setAttribute("href", href);
}

export function setMetaName(name, content) {
  const meta = ensureTag(`meta[name=\"${name}\"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  });
  meta.setAttribute("content", content);
}

export function setMetaProperty(property, content) {
  const meta = ensureTag(`meta[property=\"${property}\"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  });
  meta.setAttribute("content", content);
}

export function setSeoTags({ title, description, url, image }) {
  if (title) document.title = title;
  if (description) setMetaName("description", description);
  if (url) setCanonical(url);
  // Open Graph
  if (title) setMetaProperty("og:title", title);
  if (description) setMetaProperty("og:description", description);
  if (url) setMetaProperty("og:url", url);
  if (image) setMetaProperty("og:image", image);
  setMetaProperty("og:type", "website");
  // Twitter
  setMetaName("twitter:card", "summary_large_image");
  if (title) setMetaName("twitter:title", title);
  if (description) setMetaName("twitter:description", description);
  if (image) setMetaName("twitter:image", image);
}

