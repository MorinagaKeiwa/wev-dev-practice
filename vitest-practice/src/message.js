export function buildWelcomeMessage(name, plan) {
  return `${name}さん、${plan}プランへようこそ！`;
}

export function filterByTag(posts, tag) {
  return posts.filter((post) => post.tags.includes(tag));
}

export function getTagList(posts) {
  const tags = posts.flatMap((post) => post.tags);
  return [...new Set(tags)];
}
