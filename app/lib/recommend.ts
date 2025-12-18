export type Taggable = {
  tags: string[];
};

export function recommend<T extends Taggable>(
  userTags: string[],
  items: T[]
): T[] {
  const tagSet = new Set(userTags);
  return items.filter((item) => item.tags.some((t) => tagSet.has(t)));
}
