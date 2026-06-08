import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  resolveContactCoordinates,
  googleMapsUrl,
  googleMapsEmbedUrl,
} from '../constants/contactLocation';

/**
 * ContactLocationMap — carte Google Maps intégrée + lien externe.
 */
export const ContactLocationMap = ({ contactInfo = {}, labels = {} }) => {
  const { translations: t } = useLanguage();
  const mapT = t?.contact?.map || {};

  const { lat, lng, coordinatesLabel, address } = resolveContactCoordinates(contactInfo);
  const mapsUrl = googleMapsUrl(lat, lng);

  const eyebrow = labels.eyebrow || mapT.eyebrow || 'Localisation';
  const title   = labels.title   || mapT.title   || 'Où nous trouver';
  const hint    = labels.hint    || mapT.hint    || 'Agoè Cacaveli, en face de Toganim';
  const openBtn = labels.openMaps || mapT.openMaps || 'Ouvrir dans Google Maps';
  const mapTitle = labels.mapTitle || 'Carte Google Maps — TAOMAN GROUP INVESTMENTS';

  return (
    <section className="py-16 px-6 bg-surface" aria-labelledby="contact-location-title">
      <div className="max-w-[1100px] mx-auto">

        {/* En-tête */}
        <div className="text-center mb-8">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            <MapPin className="h-4 w-4" strokeWidth={2.4} />
            {eyebrow}
          </p>
          <h2
            id="contact-location-title"
            className="mt-3 text-3xl md:text-4xl font-black text-on-surface"
          >
            {title}
          </h2>
          <p className="mt-2 text-on-surface-variant text-base">{address}</p>
          <p className="mt-1 text-xs font-semibold text-primary tabular-nums">
            {coordinatesLabel}
          </p>
        </div>

        {/* Carte + infos */}
        <div className="rounded-3xl overflow-hidden border border-outline-variant/40 shadow-2xl bg-white">
          {/* Bannière supérieure */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-cyan-500/10 border-b border-outline-variant/20">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Navigation className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-sm font-black text-on-surface">TAOMAN GROUP INVESTMENTS</p>
                <p className="text-xs text-on-surface-variant">{hint}</p>
              </div>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 transition-opacity shrink-0"
            >
              {openBtn}
              <ExternalLink className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>

          {/* Carte Google Maps */}
          <iframe
            title={mapTitle}
            src={googleMapsEmbedUrl(lat, lng)}
            className="w-full border-0"
            style={{ height: 'clamp(320px, 45vw, 520px)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};