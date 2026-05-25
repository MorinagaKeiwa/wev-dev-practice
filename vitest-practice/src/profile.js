export function createProfile(name, age, hobbies) {
  return {
    name,
    age,
    hobbies,
    isAdult: age >= 18,
  };
}

export function getDisplayName(profile) {
  return `${profile.name}（${profile.age}歳）`;
}
