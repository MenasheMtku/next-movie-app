// lib/helpers.ts

/**
 * Truncates a string with ellipsis if it exceeds maxLength
 * Preserves whole words by default
 */
export function truncateTitle(
  title: string,
  maxLength: number = 25,
  preserveWords: boolean = true,
): string {
  if (title.length <= maxLength) return title;

  if (preserveWords) {
    // Cut at last space before maxLength
    const truncated = title.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    if (lastSpace > 0) {
      return truncated.substring(0, lastSpace) + "...";
    }
  }

  // Simple truncate if no word boundary or preserveWords is false
  return title.substring(0, maxLength) + "...";
}

/**
 * Smart title shortener that handles special cases
 * Removes articles, year suffixes, etc.
 */
export function smartTitleShorten(
  title: string,
  maxLength: number = 25,
): string {
  // Remove year in parentheses at end if present
  title = title.replace(/\s*\(\d{4}\)\s*$/, "");

  // Remove common articles from start
  title = title.replace(/^(The|A|An)\s+/i, "");

  // If still too long, truncate
  if (title.length > maxLength) {
    return truncateTitle(title, maxLength);
  }

  return title;
}
