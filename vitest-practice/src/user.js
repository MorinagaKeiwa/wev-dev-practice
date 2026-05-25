let nextId = 1;

export function createUser(name, email) {
  return {
    id: nextId++,
    name,
    email,
    createdAt: new Date().toISOString(),
  };
}

export function formatUserLabel(user) {
  return `[${user.id}] ${user.name} <${user.email}>`;
}
