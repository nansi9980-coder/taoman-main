/** Siège TAOMAN — Vakpossito, Lomé (6°13'07.1"N 1°12'19.0"E) */
export const DEFAULT_CONTACT_LOCATION = {
  lat: 6.2186389,
  lng: 1.2052778,
  coordinatesLabel: '6°13\'07.1"N 1°12\'19.0"E',
  address: 'Vakpossito, Lomé — Togo',
};

export function resolveContactCoordinates(contact = {}) {
  const lat = Number(contact.lat);
  const lng = Number(contact.lng);
  return {
    lat: Number.isFinite(lat) ? lat : DEFAULT_CONTACT_LOCATION.lat,
    lng: Number.isFinite(lng) ? lng : DEFAULT_CONTACT_LOCATION.lng,
    coordinatesLabel: contact.coordinatesLabel || DEFAULT_CONTACT_LOCATION.coordinatesLabel,
    address: contact.address || DEFAULT_CONTACT_LOCATION.address,
  };
}

export function googleMapsUrl(lat, lng) {
  return `https://www.google.com/maps?q=${lat},${lng}`;
}

/** Intégration Google Maps (sans clé API — output=embed). */
export function googleMapsEmbedUrl(lat, lng, zoom = 16) {
  const q = `${lat},${lng}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&hl=fr&z=${zoom}&output=embed`;
}
