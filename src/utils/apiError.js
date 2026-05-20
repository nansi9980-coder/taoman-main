/** Extrait un message lisible depuis une réponse API NestJS. */
export async function getApiErrorMessage(response, fallback = "Une erreur est survenue.") {
  try {
    const data = await response.json();
    if (typeof data.message === "string") return data.message;
    if (Array.isArray(data.message)) return data.message.join(", ");
    if (data.error) return String(data.error);
  } catch {
    /* corps non JSON */
  }
  return fallback;
}
