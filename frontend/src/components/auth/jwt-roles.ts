export function getRolesFromToken(token: string | null): string[] {
  if (!token) return [];
  try {
    const payload = token.split(".")[1];
    if (!payload) return [];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "="
    );
    const json = atob(padded);
    const data = JSON.parse(json);
    return Array.isArray(data.roles) ? data.roles : [];
  } catch {
    return [];
  }
}
