export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
export const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || "http://localhost:5174";

export function mediaUrl(url) {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("data:")) return url;
  const baseUrl = `${API_URL}${url.startsWith("/") ? "" : "/"}${url}`;
  // Add cache-busting parameter to prevent image caching (bust cache every minute)
  const cacheKey = Math.floor(Date.now() / 60000);
  return `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}_cb=${cacheKey}`;
}

export async function apiAuthFetch(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    cache: "no-store",
    headers: {
      ...headers,
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || "Erreur API");
  }
  return data;
}
