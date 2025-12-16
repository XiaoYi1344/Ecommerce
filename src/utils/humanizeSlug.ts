export function humanizeSlug(slug?: string) {
  if (!slug) return '';

  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
