import { MapPin, ExternalLink } from 'lucide-react';
import {
  resolveContactCoordinates,
  googleMapsUrl,
  googleMapsEmbedUrl,
} from '../constants/contactLocation';

export const ContactLocationMap = ({ contactInfo = {}, labels = {} }) => {
  const { lat, lng, coordinatesLabel, address } = resolveContactCoordinates(contactInfo);
  const mapsUrl = googleMapsUrl(lat, lng);

  return (
    <section className="py-12 px-6 bg-surface" aria-labelledby="contact-location-title">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-5">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            <MapPin className="h-4 w-4" strokeWidth={2.4} />
            {labels.eyebrow || 'Localisation'}
          </p>
          <h2 id="contact-location-title" className="mt-3 text-2xl md:text-3xl font-black text-on-surface">
            {labels.title || 'Où nous trouver'}
          </h2>
          <p className="mt-2 text-on-surface-variant text-base">{address}</p>
          <p className="mt-1 text-xs font-semibold text-primary tabular-nums">{coordinatesLabel}</p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-outline-variant/40 shadow-lg bg-white">
          <iframe
            title={labels.mapTitle || 'Carte Google Maps — TAOMAN Group Investment'}
            src={googleMapsEmbedUrl(lat, lng)}
            className="w-full h-[200px] sm:h-[220px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-3 bg-surface-container-low border-t border-outline-variant/30">
            <p className="text-sm text-on-surface-variant text-center sm:text-left">
              {labels.hint || 'Vakpossito — zone industrielle et commerciale de Lomé'}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 transition"
            >
              {labels.openMaps || 'Ouvrir dans Google Maps'}
              <ExternalLink className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
