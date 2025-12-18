export function recommend(userTags: string[], items: any[]) {
  return items.filter((i) =>
    i.tags.some((tag: string) => userTags.includes(tag))
  );
}
