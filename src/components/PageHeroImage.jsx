/**
 * PageHeroImage
 * -------------
 * Images hero SVG uniques pour chaque page du site.
 * Inspiré de numeriquepourtous.fr et gdc-sense.com :
 * formes géométriques, dégradés riches, icons thématiques, animations légères.
 *
 * Usage :
 *   <PageHeroImage page="services" className="..." />
 *   <PageHeroImage page="investment" />
 *   <PageHeroImage page="about" />
 *
 * Pages disponibles : home | services | investment | sectors | contact |
 *                     jobs | faq | about | simulator | submit
 */

export const PageHeroImage = ({ page = 'home', className = '', style = {} }) => {
  const heroes = {
    /* ── Accueil ─────────────────────────────────────────────────── */
    home: (
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-home" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e4a7a" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
          <radialGradient id="hg-home-glow" cx="60%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill="url(#hg-home)" rx="24" />
        <rect width="800" height="500" fill="url(#hg-home-glow)" rx="24" />
        {/* Globe africain stylisé */}
        <circle cx="580" cy="250" r="160" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.2" />
        <circle cx="580" cy="250" r="120" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.15" />
        <circle cx="580" cy="250" r="80"  fill="#0e4a7a" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />
        {/* Continents stylisés */}
        <path d="M560,200 Q580,190 600,210 L610,240 Q590,260 565,255 Q545,240 540,220 Z" fill="#22d3ee" opacity="0.5" />
        <path d="M555,255 Q570,265 575,290 L555,295 Q540,280 542,260 Z" fill="#22d3ee" opacity="0.4" />
        {/* Lignes réseau */}
        <line x1="100" y1="80"  x2="580" y2="250" stroke="#22d3ee" strokeWidth="0.6" opacity="0.2" />
        <line x1="100" y1="200" x2="580" y2="250" stroke="#22d3ee" strokeWidth="0.6" opacity="0.2" />
        <line x1="100" y1="350" x2="580" y2="250" stroke="#22d3ee" strokeWidth="0.6" opacity="0.2" />
        <circle cx="100" cy="80"  r="4" fill="#22d3ee" opacity="0.7" />
        <circle cx="100" cy="200" r="4" fill="#22d3ee" opacity="0.7" />
        <circle cx="100" cy="350" r="4" fill="#22d3ee" opacity="0.7" />
        {/* Texte décoratif */}
        <text x="80" y="420" fontFamily="monospace" fontSize="10" fill="#22d3ee" opacity="0.25">Taoman Group Investissement · INVEST · GROW · TOGO</text>
      </svg>
    ),

    /* ── Services ────────────────────────────────────────────────── */
    services: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-svc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#164e63" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-svc)" rx="20" />
        {/* Icônes service : camion, clé, bureau, voiture */}
        {/* Camion */}
        <g transform="translate(80,140)" fill="none" stroke="#67e8f9" strokeWidth="2.5" strokeLinecap="round">
          <rect x="0" y="20" width="100" height="60" rx="6" />
          <path d="M100,40 L130,40 L145,65 L145,80 L100,80 Z" />
          <circle cx="20" cy="88" r="12" fill="#0c1a2e" stroke="#67e8f9" strokeWidth="2.5" />
          <circle cx="115" cy="88" r="12" fill="#0c1a2e" stroke="#67e8f9" strokeWidth="2.5" />
          <line x1="30" y1="50" x2="70" y2="50" />
          <line x1="30" y1="62" x2="60" y2="62" />
        </g>
        {/* Clé à molette */}
        <g transform="translate(280,100)" fill="none" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="30" cy="30" r="25" />
          <circle cx="30" cy="30" r="12" />
          <line x1="42" y1="42" x2="80" y2="120" strokeWidth="8" />
          <line x1="45" y1="130" x2="90" y2="115" strokeWidth="6" />
        </g>
        {/* Immeuble bureau */}
        <g transform="translate(460,80)" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round">
          <rect x="0" y="40" width="100" height="150" />
          <rect x="15" y="0"  width="70"  height="50" />
          {[0,1,2,3].map(row =>
            [0,1,2].map(col => (
              <rect key={`${row}-${col}`} x={10+col*28} y={55+row*28} width="18" height="18" rx="2" fill="#34d399" fillOpacity="0.3" />
            ))
          )}
          <line x1="50" y1="190" x2="50" y2="200" />
        </g>
        {/* Voiture lavage */}
        <g transform="translate(640,160)" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10,60 Q30,30 80,30 Q110,30 130,60 L140,80 L0,80 Z" />
          <rect x="0" y="78" width="140" height="30" rx="4" />
          <circle cx="25"  cy="115" r="14" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="115" cy="115" r="14" fill="#0c1a2e" stroke="#fbbf24" strokeWidth="2" />
          {/* Gouttes */}
          <ellipse cx="70" cy="15" rx="4" ry="8" fill="#67e8f9" fillOpacity="0.7" />
          <ellipse cx="55" cy="5"  rx="3" ry="6" fill="#67e8f9" fillOpacity="0.5" />
          <ellipse cx="85" cy="8"  rx="3" ry="6" fill="#67e8f9" fillOpacity="0.5" />
        </g>
        {/* Connexions */}
        <line x1="230" y1="200" x2="280" y2="200" stroke="#67e8f9" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4" />
        <line x1="420" y1="200" x2="460" y2="200" stroke="#67e8f9" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4" />
        <line x1="610" y1="200" x2="640" y2="200" stroke="#67e8f9" strokeWidth="0.8" strokeDasharray="4,4" opacity="0.4" />
      </svg>
    ),

    /* ── Investissement ───────────────────────────────────────────── */
    investment: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-inv" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-inv)" rx="20" />
        {/* Graphique montée en puissance */}
        <polyline
          points="60,320 160,280 260,240 360,180 460,140 560,90 660,60 760,30"
          fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round"
        />
        <polyline
          points="60,320 160,280 260,240 360,180 460,140 560,90 660,60 760,30 760,380 60,380 Z"
          fill="#34d399" fillOpacity="0.07"
        />
        {/* Points de données */}
        {[[160,280],[260,240],[360,180],[460,140],[560,90],[660,60]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="6" fill="#34d399" stroke="#064e3b" strokeWidth="2" />
        ))}
        {/* Pièce/monnaie */}
        <circle cx="140" cy="150" r="55" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
        <circle cx="140" cy="150" r="42" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.4" />
        <text x="125" y="158" fontFamily="serif" fontSize="36" fill="#fbbf24" opacity="0.8" fontWeight="bold">₣</text>
        {/* Flèche croissance */}
        <path d="M620,180 L700,100 L700,140 M700,100 L660,100" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
        {/* Grille */}
        {[1,2,3].map(i => (
          <line key={i} x1="60" y1={60+i*80} x2="760" y2={60+i*80} stroke="#34d399" strokeWidth="0.4" strokeDasharray="6,6" opacity="0.2" />
        ))}
      </svg>
    ),

    /* ── Secteurs ─────────────────────────────────────────────────── */
    sectors: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-sec" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-sec)" rx="20" />
        {/* Hexagones sectoriels */}
        {[
          { x: 140, y: 150, color: '#fbbf24', label: 'Agro' },
          { x: 260, y: 90,  color: '#f97316', label: 'BTP' },
          { x: 380, y: 150, color: '#22d3ee', label: 'Logistique' },
          { x: 500, y: 90,  color: '#34d399', label: 'Numérique' },
          { x: 620, y: 150, color: '#a78bfa', label: 'Marketing' },
          { x: 260, y: 210, color: '#fb7185', label: 'Commerce' },
        ].map(({ x, y, color, label }) => {
          const r = 45;
          const points = [...Array(6)].map((_, i) => {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            return `${x + r * Math.cos(angle)},${y + r * Math.sin(angle)}`;
          }).join(' ');
          return (
            <g key={label}>
              <polygon points={points} fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1.5" />
              <text x={x} y={y+4} textAnchor="middle" fontSize="10" fill={color} fontWeight="bold" fontFamily="monospace">
                {label}
              </text>
            </g>
          );
        })}
        {/* Connexions */}
        {[[140,150,260,90],[260,90,380,150],[380,150,500,90],[500,90,620,150],[260,90,260,210],[380,150,260,210]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#67e8f9" strokeWidth="0.7" opacity="0.25" strokeDasharray="4,4" />
        ))}
        {/* Carte Togo stylisée */}
        <path
          d="M700,80 Q720,100 715,160 Q710,220 700,280 Q690,320 680,280 Q670,220 675,160 Q680,100 700,80 Z"
          fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.4"
        />
      </svg>
    ),

    /* ── Contact ──────────────────────────────────────────────────── */
    contact: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-con" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c4a6e" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-con)" rx="20" />
        {/* Enveloppe */}
        <g transform="translate(80,100)">
          <rect x="0" y="0" width="220" height="160" rx="12" fill="none" stroke="#67e8f9" strokeWidth="2.5" />
          <polyline points="0,0 110,90 220,0" fill="none" stroke="#67e8f9" strokeWidth="2" />
          <line x1="0" y1="160" x2="80" y2="90"  stroke="#67e8f9" strokeWidth="1.5" opacity="0.5" />
          <line x1="220" y1="160" x2="140" y2="90" stroke="#67e8f9" strokeWidth="1.5" opacity="0.5" />
        </g>
        {/* Pin localisation */}
        <g transform="translate(540,80)">
          <circle cx="60" cy="60" r="45" fill="none" stroke="#f97316" strokeWidth="2.5" />
          <circle cx="60" cy="60" r="18" fill="#f97316" fillOpacity="0.8" />
          <line x1="60" y1="105" x2="60" y2="150" stroke="#f97316" strokeWidth="2.5" />
          <polygon points="60,165 48,150 72,150" fill="#f97316" />
        </g>
        {/* Téléphone */}
        <g transform="translate(380,140)" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round">
          <rect x="0" y="0" width="70" height="120" rx="10" />
          <line x1="25" y1="10" x2="45" y2="10" />
          <circle cx="35" cy="110" r="6" />
          <rect x="10" y="22" width="50" height="74" rx="4" />
        </g>
        {/* Signal wifi */}
        {[20,35,50].map((r,i)=>(
          <path key={i} d={`M 390,80 A ${r},${r} 0 0 1 ${390+r*2},80`}
            fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity={0.3+i*0.2} />
        ))}
        {/* Lignes de liaison */}
        <line x1="300" y1="185" x2="380" y2="200" stroke="#67e8f9" strokeWidth="0.8" strokeDasharray="5,5" opacity="0.4" />
        <line x1="450" y1="200" x2="540" y2="180" stroke="#67e8f9" strokeWidth="0.8" strokeDasharray="5,5" opacity="0.4" />
      </svg>
    ),

    /* ── À propos ─────────────────────────────────────────────────── */
    about: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-abt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0a1628" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-abt)" rx="20" />
        {/* Équipe stylisée : 3 silhouettes */}
        {[200,400,600].map((x, i) => (
          <g key={i} transform={`translate(${x},100)`}>
            <circle cx="0" cy="40" r="30" fill="#22d3ee" fillOpacity={0.15 + i * 0.1} stroke="#22d3ee" strokeWidth="1.5" />
            <ellipse cx="0" cy="130" rx="40" ry="50" fill="#22d3ee" fillOpacity={0.1 + i * 0.05} stroke="#22d3ee" strokeWidth="1" />
          </g>
        ))}
        {/* Étoile / award */}
        <path
          d="M700,60 L715,100 L758,100 L724,124 L737,168 L700,145 L663,168 L676,124 L642,100 L685,100 Z"
          fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1.5"
        />
        {/* Valeurs: 4 piliers */}
        {['Excellence','Transparence','Innovation','Pro'].map((v, i) => (
          <g key={v} transform={`translate(${60 + i * 160}, 290)`}>
            <rect x="0" y="0" width="130" height="60" rx="8" fill="#22d3ee" fillOpacity="0.08" stroke="#22d3ee" strokeWidth="1" />
            <text x="65" y="36" textAnchor="middle" fontSize="10" fill="#22d3ee" fontWeight="bold" fontFamily="monospace">{v}</text>
          </g>
        ))}
      </svg>
    ),

    /* ── Jobs ─────────────────────────────────────────────────────── */
    jobs: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-job" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-job)" rx="20" />
        {/* Briefcase */}
        <g transform="translate(280,80)" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
          <rect x="0" y="40" width="240" height="180" rx="16" />
          <path d="M80,40 L80,20 Q80,0 100,0 L140,0 Q160,0 160,20 L160,40" />
          <line x1="0" y1="130" x2="240" y2="130" />
          <line x1="110" y1="110" x2="130" y2="150" />
        </g>
        {/* Croissance carrière */}
        <polyline points="60,340 120,300 180,280 240,240 300,200" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5" />
        <polyline points="500,300 580,260 660,230 740,190" fill="none" stroke="#34d399" strokeWidth="2" opacity="0.5" />
        {/* Points réseau personnes */}
        {[[100,320],[200,240],[600,280],[700,200]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="10" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5" />
            <circle cx={cx} cy={cy-18} r="7" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
          </g>
        ))}
      </svg>
    ),

    /* ── FAQ ──────────────────────────────────────────────────────── */
    faq: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-faq" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-faq)" rx="20" />
        {/* Bulles de dialogue */}
        {[
          { x: 80,  y: 60,  w: 220, h: 90,  color: '#a78bfa', align: 'left'  },
          { x: 500, y: 140, w: 240, h: 90,  color: '#67e8f9', align: 'right' },
          { x: 100, y: 200, w: 200, h: 80,  color: '#a78bfa', align: 'left'  },
          { x: 480, y: 290, w: 260, h: 80,  color: '#67e8f9', align: 'right' },
        ].map(({ x, y, w, h, color, align }, i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx="16" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.5" />
            {align === 'left'
              ? <polygon points={`${x+20},${y+h} ${x+10},${y+h+20} ${x+40},${y+h}`} fill={color} fillOpacity="0.15" />
              : <polygon points={`${x+w-20},${y+h} ${x+w-10},${y+h+20} ${x+w-40},${y+h}`} fill={color} fillOpacity="0.15" />
            }
            <text x={x+w/2} y={y+h/2+4} textAnchor="middle" fontSize="24" fill={color} fontWeight="bold" opacity="0.5">?</text>
          </g>
        ))}
        {/* Grand ? central */}
        <text x="400" y="230" textAnchor="middle" fontSize="120" fill="#a78bfa" opacity="0.06" fontWeight="black">?</text>
      </svg>
    ),

    /* ── Simulateur ───────────────────────────────────────────────── */
    simulator: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-sim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-sim)" rx="20" />
        {/* Calculatrice / Dashboard */}
        <rect x="200" y="60" width="400" height="280" rx="20" fill="none" stroke="#34d399" strokeWidth="2" />
        <rect x="220" y="80" width="360" height="80" rx="8" fill="#34d399" fillOpacity="0.1" stroke="#34d399" strokeWidth="1" />
        <text x="400" y="128" textAnchor="middle" fontSize="28" fill="#34d399" fontWeight="black" fontFamily="monospace">2 450 000 ₣</text>
        {/* Slider */}
        <rect x="240" y="190" width="320" height="8" rx="4" fill="#34d399" fillOpacity="0.2" />
        <rect x="240" y="190" width="200" height="8" rx="4" fill="#34d399" fillOpacity="0.7" />
        <circle cx="440" cy="194" r="12" fill="#34d399" stroke="#064e3b" strokeWidth="2" />
        {/* Boutons */}
        {[0,1,2].map(i => (
          <rect key={i} x={240+i*110} y="220" width="90" height="36" rx="8" fill="#34d399" fillOpacity={0.1+i*0.08} stroke="#34d399" strokeWidth="1" />
        ))}
        {/* Mini graphique ROI */}
        <polyline points="240,310 300,295 360,280 420,260 480,240 540,220 560,215" fill="none" stroke="#34d399" strokeWidth="2" />
        <polyline points="240,310 300,295 360,280 420,260 480,240 540,220 560,215 560,320 240,320 Z" fill="#34d399" fillOpacity="0.05" />
      </svg>
    ),

    /* ── Soumettre projet ─────────────────────────────────────────── */
    submit: (
      <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
        <defs>
          <linearGradient id="hg-sub" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hg-sub)" rx="20" />
        {/* Fusée / rocket */}
        <g transform="translate(580,50)">
          <path d="M60,180 Q60,20 0,0 Q-60,20 -60,180 Z" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="2" />
          <ellipse cx="0" cy="170" rx="30" ry="15" fill="#f97316" fillOpacity="0.5" />
          <ellipse cx="0" cy="190" rx="20" ry="10" fill="#f97316" fillOpacity="0.7" />
          <circle cx="0" cy="60" r="15" fill="none" stroke="#67e8f9" strokeWidth="2" />
          <path d="M-60,140 L-90,170 L-60,160" fill="#a78bfa" fillOpacity="0.5" />
          <path d="M60,140 L90,170 L60,160"  fill="#a78bfa" fillOpacity="0.5" />
        </g>
        {/* Formulaire stylisé */}
        <rect x="80" y="60" width="350" height="280" rx="16" fill="none" stroke="#67e8f9" strokeWidth="1.5" />
        {[80,130,180,230,280,320].map((y,i) => (
          <rect key={i} x="110" y={y} width={200+i*10} height="28" rx="6" fill="#67e8f9" fillOpacity={0.05+i*0.01} stroke="#67e8f9" strokeWidth="0.8" />
        ))}
        {/* Bouton submit */}
        <rect x="110" y="298" width="200" height="42" rx="10" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="2" />
        <text x="210" y="324" textAnchor="middle" fontSize="13" fill="#a78bfa" fontWeight="bold" fontFamily="monospace">SOUMETTRE →</text>
        {/* Étoiles */}
        {[[500,80],[540,200],[490,300]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r={3+i*2} fill="#fbbf24" fillOpacity="0.5" />
        ))}
      </svg>
    ),
  };

  return heroes[page] || heroes.home;
};

export default PageHeroImage;