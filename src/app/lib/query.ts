import { AdvocateSearchFilter } from "../types/advocate";

/**
 * Formats filter parameters into a URL query string
 * @param filters Filter parameters to format
 * @returns Formatted query string starting with '?' if there are parameters, empty string if no valid parameters
 */
export function formatQueryString(
  searchTerm: string,
  filters: Partial<AdvocateSearchFilter>
): string {
  const validParams = Object.entries(filters)
    .filter(([_, value]) => value && value.trim() !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    );

  return validParams.length > 0
    ? `?term=${searchTerm}&${validParams.join("&")}`
    : `?term=${searchTerm}`;
}
