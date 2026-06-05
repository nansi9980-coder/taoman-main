import { useEffect, useState } from 'react';
import { useSiteContent } from '../../context/SiteContentContext';
import { DEFAULT_QUICK_ACCESS, DEFAULT_HERO } from '../../data/home-defaults';
import { saveContentOverride, clearContentOverride, loadContentOverrides } from '../../utils/siteContentOverrides';
import { API_URL, apiAuthFetch } from '../../config';
import { DEFAULT_SECTORS as SECTORS_SEED } from '../../data/sectors-defaults';
import { DEFAULT_MEDIA_SETTINGS } from '../../hooks/useMediaSettings';

const DEFAULT_SECTORS = SECTORS_SEED.map((s) => ({
  slug: s.slug,
  title: s.title,
  tag: s.tag,
  short: s.short,
  range: s.range,
  risk: s.risk,
  imageUrl: '',
}));

function mergeQuickAccess(api = {}) {
  const links = api.links?.length ? api.links : DEFAULT_QUICK_ACCESS.links;
  return {
    eyebrow: api.eyebrow || DEFAULT_QUICK_ACCESS.eyebrow,
    title: api.title || DEFAULT_QUICK_ACCESS.title,
    ctaLabel: api.ctaLabel || DEFAULT_QUICK_ACCESS.ctaLabel,
    links,
  };
}

export function SiteContentEditor() {
  const { section, reload } = useSiteContent();
  const apiQuick = section('quickAccess');
  const apiHero = section('hero') || section('heroBanner') || {};
  const apiSectors = section('sectors');
  const apiMedia = section('mediaSettings') || {};

  const [quickAccess, setQuickAccess] = useState(() => mergeQuickAccess(apiQuick));
  const [hero, setHero] = useState(() => ({ ...DEFAULT_HERO, ...apiHero }));
  const [sectors, setSectors] = useState(() =>
    apiSectors?.items?.length ? apiSectors.items : DEFAULT_SECTORS,
  );
  const [mediaSettings, setMediaSettings] = useState(() => ({ ...DEFAULT_MEDIA_SETTINGS, ...apiMedia }));
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const overrides = loadContentOverrides();
    setQuickAccess(mergeQuickAccess({ ...apiQuick, ...overrides.quickAccess }));
    setHero({ ...DEFAULT_HERO, ...apiHero, ...overrides.hero });
    const ovSectors = overrides.sectors?.items?.length ? overrides.sectors.items : null;
    if (ovSectors) setSectors(ovSectors);
    else if (apiSectors?.items?.length) setSectors(apiSectors.items);
    setMediaSettings({ ...DEFAULT_MEDIA_SETTINGS, ...apiMedia, ...(overrides.mediaSettings || {}) });
  }, [apiQuick, apiHero, apiSectors, apiMedia]);

  const persist = async (sectionKey, data) => {
    setSaving(true);
    setStatus('');
    try {
      await apiAuthFetch('/content/texts', {
        method: 'POST',
        body: JSON.stringify({ section: sectionKey, content: JSON.stringify(data) }),
      });
      clearContentOverride(sectionKey);
      setStatus('Enregistré sur le serveur et appliqué au site.');
      reload();
    } catch {
      saveContentOverride(sectionKey, data);
      setStatus('Enregistré localement (visible sur ce navigateur). Synchronisation serveur indisponible.');
    } finally {
      setSaving(false);
    }
  };

  const updateLink = (index, field, value) => {
    setQuickAccess((prev) => {
      const links = [...prev.links];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, links };
    });
  };

  const addLink = () => {
    setQuickAccess((prev) => ({
      ...prev,
      links: [...prev.links, { label: 'Nouvelle page', href: '/' }],
    }));
  };

  const removeLink = (index) => {
    setQuickAccess((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }));
  };

  return (
    <section className="px-6 py-16 bg-surface-container-low">
      <div className="mx-auto max-w-[1500px] space-y-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Contenu du site</p>
          <h2 className="mt-2 text-3xl font-black text-on-surface">Modifier les blocs publics</h2>
          <p className="mt-2 text-on-surface-variant">
            Accès rapide (accueil), textes d’accroche et liens — sans climatisation ni aperçu dashboard.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg border border-outline-variant/30">
          <h3 className="text-xl font-black text-on-surface mb-6">Section Accès rapide (page d’accueil)</h3>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <label className="block">
              <span className="text-xs font-bold uppercase text-on-surface-variant">Surtitre</span>
              <input
                className="mt-1 w-full rounded-xl border border-outline-variant px-4 py-3"
                value={quickAccess.eyebrow}
                onChange={(e) => setQuickAccess((p) => ({ ...p, eyebrow: e.target.value }))}
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase text-on-surface-variant">Titre</span>
              <input
                className="mt-1 w-full rounded-xl border border-outline-variant px-4 py-3"
                value={quickAccess.title}
                onChange={(e) => setQuickAccess((p) => ({ ...p, title: e.target.value }))}
              />
            </label>
          </div>

          <div className="space-y-3">
            {quickAccess.links.map((link, index) => (
              <div key={index} className="grid gap-3 md:grid-cols-[1fr_1fr_auto] items-end rounded-2xl border border-outline-variant/40 p-4">
                <label className="block">
                  <span className="text-xs font-bold text-on-surface-variant">Libellé</span>
                  <input
                    className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                    value={link.label}
                    onChange={(e) => updateLink(index, 'label', e.target.value)}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-on-surface-variant">URL</span>
                  <input
                    className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                    value={link.href}
                    onChange={(e) => updateLink(index, 'href', e.target.value)}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => removeLink(index)}
                  className="rounded-xl border border-error/40 px-4 py-2 text-sm font-bold text-error hover:bg-error/10"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={addLink} className="rounded-xl border border-primary px-4 py-2 font-bold text-primary">
              + Ajouter un lien
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => persist('quickAccess', quickAccess)}
              className="rounded-xl bg-primary px-6 py-2 font-bold text-white disabled:opacity-60"
            >
              {saving ? 'Enregistrement…' : 'Enregistrer accès rapide'}
            </button>
            <button
              type="button"
              onClick={() => {
                clearContentOverride('quickAccess');
                setQuickAccess(mergeQuickAccess(apiQuick));
                setStatus('Accès rapide réinitialisé.');
              }}
              className="rounded-xl border border-outline-variant px-4 py-2 font-bold text-on-surface"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg border border-outline-variant/30">
          <h3 className="text-xl font-black text-on-surface mb-6">Bannière d’accueil (textes)</h3>
          <div className="grid gap-4">
            {[
              ['badgeMain', 'Badge principal'],
              ['title', 'Titre'],
              ['subtitle', 'Sous-titre'],
              ['description', 'Description'],
              ['btn1', 'Bouton principal'],
              ['btn2', 'Bouton secondaire'],
            ].map(([key, label]) => (
              <label key={key} className="block">
                <span className="text-xs font-bold uppercase text-on-surface-variant">{label}</span>
                {key === 'description' ? (
                  <textarea
                    className="mt-1 w-full rounded-xl border border-outline-variant px-4 py-3 min-h-[100px]"
                    value={hero[key] || ''}
                    onChange={(e) => setHero((p) => ({ ...p, [key]: e.target.value }))}
                  />
                ) : (
                  <input
                    className="mt-1 w-full rounded-xl border border-outline-variant px-4 py-3"
                    value={hero[key] || ''}
                    onChange={(e) => setHero((p) => ({ ...p, [key]: e.target.value }))}
                  />
                )}
              </label>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={saving}
              onClick={() => persist('hero', hero)}
              className="rounded-xl bg-primary px-6 py-2 font-bold text-white disabled:opacity-60"
            >
              {saving ? 'Enregistrement…' : 'Enregistrer bannière'}
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg border border-outline-variant/30">
          <h3 className="text-xl font-black text-on-surface mb-6">Secteurs d’investissement (page d’accueil)</h3>
          <p className="text-sm text-on-surface-variant mb-4">
            Titre, étiquette, description et URL d’image. Laissez l’URL vide pour conserver l’image par défaut.
          </p>

          <div className="space-y-3">
            {sectors.map((sector, index) => {
              const update = (key, value) =>
                setSectors((prev) => prev.map((s, i) => (i === index ? { ...s, [key]: value } : s)));
              return (
                <div key={sector.slug || index} className="grid gap-3 md:grid-cols-2 rounded-2xl border border-outline-variant/40 p-4">
                  <label className="block md:col-span-2">
                    <span className="text-xs font-bold text-on-surface-variant">Identifiant URL (slug)</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2 font-mono text-sm"
                      value={sector.slug || ''}
                      onChange={(e) => update('slug', e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-on-surface-variant">Titre</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                      value={sector.title || ''}
                      onChange={(e) => update('title', e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-on-surface-variant">Étiquette</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                      value={sector.tag || ''}
                      onChange={(e) => update('tag', e.target.value)}
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="text-xs font-bold text-on-surface-variant">Pitch court (1 phrase)</span>
                    <textarea
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2 min-h-[60px]"
                      value={sector.short || ''}
                      onChange={(e) => update('short', e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-on-surface-variant">Rendement cible</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                      value={sector.range || ''}
                      onChange={(e) => update('range', e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-on-surface-variant">Profil de risque</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                      value={sector.risk || ''}
                      onChange={(e) => update('risk', e.target.value)}
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="text-xs font-bold text-on-surface-variant">URL image (optionnel)</span>
                    <input
                      className="mt-1 w-full rounded-xl border border-outline-variant px-3 py-2"
                      value={sector.imageUrl || ''}
                      onChange={(e) => update('imageUrl', e.target.value)}
                    />
                  </label>
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setSectors((prev) => prev.filter((_, i) => i !== index))}
                      className="rounded-xl border border-error/40 px-4 py-2 text-sm font-bold text-error hover:bg-error/10"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                setSectors((prev) => [
                  ...prev,
                  { slug: `secteur-${prev.length + 1}`, title: 'Nouveau secteur', tag: '', short: '', range: '', risk: '', imageUrl: '' },
                ])
              }
              className="rounded-xl border border-primary px-4 py-2 font-bold text-primary"
            >
              + Ajouter un secteur
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => persist('sectors', { items: sectors })}
              className="rounded-xl bg-primary px-6 py-2 font-bold text-white disabled:opacity-60"
            >
              {saving ? 'Enregistrement…' : 'Enregistrer secteurs'}
            </button>
            <button
              type="button"
              onClick={() => {
                clearContentOverride('sectors');
                setSectors(DEFAULT_SECTORS);
                setStatus('Secteurs réinitialisés.');
              }}
              className="rounded-xl border border-outline-variant px-4 py-2 font-bold text-on-surface"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* ============ PARAMÈTRES MÉDIAS ============ */}
        <div className="rounded-3xl bg-white p-8 shadow-lg border border-outline-variant/30">
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <h3 className="text-xl font-black text-on-surface">Paramètres médias & diaporamas</h3>
              <p className="mt-1 text-sm text-on-surface-variant">
                Contrôlez la vitesse de défilement des photos, l'autoplay et les animations sur tout le site.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
              Carrousels
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block rounded-2xl border border-outline-variant/40 p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Intervalle entre photos (en secondes)
              </span>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={Math.round(mediaSettings.autoplayInterval / 1000)}
                  onChange={(e) =>
                    setMediaSettings((p) => ({ ...p, autoplayInterval: Number(e.target.value) * 1000 }))
                  }
                  className="flex-1 accent-primary"
                />
                <input
                  type="number"
                  min="2"
                  max="60"
                  value={Math.round(mediaSettings.autoplayInterval / 1000)}
                  onChange={(e) =>
                    setMediaSettings((p) => ({
                      ...p,
                      autoplayInterval: Math.max(1, Number(e.target.value)) * 1000,
                    }))
                  }
                  className="w-20 rounded-lg border border-outline-variant px-3 py-2 text-center font-black text-on-surface"
                />
                <span className="font-bold text-on-surface-variant">s</span>
              </div>
              <p className="mt-2 text-xs text-on-surface-variant">Par défaut : 6 secondes.</p>
            </label>

            <label className="block rounded-2xl border border-outline-variant/40 p-4">
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Durée de transition (millisecondes)
              </span>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="100"
                  value={mediaSettings.transitionMs}
                  onChange={(e) => setMediaSettings((p) => ({ ...p, transitionMs: Number(e.target.value) }))}
                  className="flex-1 accent-primary"
                />
                <input
                  type="number"
                  min="100"
                  max="5000"
                  value={mediaSettings.transitionMs}
                  onChange={(e) => setMediaSettings((p) => ({ ...p, transitionMs: Number(e.target.value) }))}
                  className="w-24 rounded-lg border border-outline-variant px-3 py-2 text-center font-black text-on-surface"
                />
                <span className="font-bold text-on-surface-variant">ms</span>
              </div>
              <p className="mt-2 text-xs text-on-surface-variant">Fondu entre deux photos. Par défaut : 800 ms.</p>
            </label>

            {[
              ['autoplayEnabled', 'Défilement automatique', 'Active l’autoplay sur tous les carrousels.'],
              ['pauseOnHover', 'Pause au survol', 'Met en pause le défilement quand la souris est sur le carrousel.'],
              ['showIndicators', 'Afficher les points d’indication', 'Petits points cliquables sous le carrousel.'],
              ['showArrows', 'Afficher les flèches', 'Boutons précédent / suivant sur les côtés.'],
              ['kenBurns', 'Effet Ken Burns (zoom doux)', 'Zoom progressif élégant sur la photo affichée.'],
            ].map(([key, label, hint]) => (
              <label
                key={key}
                className="flex items-start gap-3 rounded-2xl border border-outline-variant/40 p-4 cursor-pointer hover:border-primary/40 transition"
              >
                <input
                  type="checkbox"
                  checked={Boolean(mediaSettings[key])}
                  onChange={(e) => setMediaSettings((p) => ({ ...p, [key]: e.target.checked }))}
                  className="mt-1 h-5 w-5 accent-primary cursor-pointer"
                />
                <span>
                  <span className="block font-bold text-on-surface">{label}</span>
                  <span className="block text-xs text-on-surface-variant mt-0.5">{hint}</span>
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={saving}
              onClick={() => persist('mediaSettings', mediaSettings)}
              className="rounded-xl bg-primary px-6 py-2 font-bold text-white disabled:opacity-60"
            >
              {saving ? 'Enregistrement…' : 'Enregistrer les paramètres médias'}
            </button>
            <button
              type="button"
              onClick={() => {
                clearContentOverride('mediaSettings');
                setMediaSettings({ ...DEFAULT_MEDIA_SETTINGS });
                setStatus('Paramètres médias réinitialisés.');
              }}
              className="rounded-xl border border-outline-variant px-4 py-2 font-bold text-on-surface"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {status && (
          <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">{status}</p>
        )}
        <p className="text-xs text-on-surface-variant">
          API : {API_URL}/content/texts — les modifications locales s’appliquent immédiatement via le stockage navigateur.
        </p>
      </div>
    </section>
  );
}
