/** Siège TAOMAN — Agoè Cacaveli, Lomé (en face de Toganim) */
export const DEFAULT_CONTACT_LOCATION = {
  lat: 6.2388696,
  lng: 1.2097291,
  coordinatesLabel: '6°14\'20"N 1°12\'35"E',
  address: 'Agoè Cacaveli, en face de Toganim — Lomé, Togo',
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
