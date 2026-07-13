export function localizePath(_locale: unknown, path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
