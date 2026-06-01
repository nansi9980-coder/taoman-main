/**
 * Traductions pour ServiceDetailPage (page de détail d'un service spécifique).
 */

const SERVICE_DETAIL = {
  FR: {
    requestQuote: 'Demander un devis',
    detailsTitle: 'Détails du service',
    keyInfoTitle: 'Informations clés',
    locationLabel: 'Localisation',
    availabilityLabel: 'Disponibilité',
    availabilityValue: 'Disponible 24/7',
    featuresTitle: 'Caractéristiques',
    contactTitle: 'Contact rapide',
    contactDesc: 'Pour toute question directe sur ce service, contactez notre équipe dès maintenant.',
    contactCta: 'Contactez-nous',
    loading: 'Chargement…',
  },
  EN: {
    requestQuote: 'Request a quote',
    detailsTitle: 'Service details',
    keyInfoTitle: 'Key information',
    locationLabel: 'Location',
    availabilityLabel: 'Availability',
    availabilityValue: 'Available 24/7',
    featuresTitle: 'Features',
    contactTitle: 'Quick contact',
    contactDesc: 'For any direct question about this service, contact our team now.',
    contactCta: 'Contact us',
    loading: 'Loading…',
  },
  ES: {
    requestQuote: 'Solicitar un presupuesto',
    detailsTitle: 'Detalles del servicio',
    keyInfoTitle: 'Información clave',
    locationLabel: 'Ubicación',
    availabilityLabel: 'Disponibilidad',
    availabilityValue: 'Disponible 24/7',
    featuresTitle: 'Características',
    contactTitle: 'Contacto rápido',
    contactDesc: 'Para cualquier pregunta directa sobre este servicio, contacte con nuestro equipo ahora.',
    contactCta: 'Contáctenos',
    loading: 'Cargando…',
  },
  PT: {
    requestQuote: 'Pedir um orçamento',
    detailsTitle: 'Detalhes do serviço',
    keyInfoTitle: 'Informações-chave',
    locationLabel: 'Localização',
    availabilityLabel: 'Disponibilidade',
    availabilityValue: 'Disponível 24/7',
    featuresTitle: 'Características',
    contactTitle: 'Contacto rápido',
    contactDesc: 'Para qualquer pergunta direta sobre este serviço, contacte a nossa equipa agora.',
    contactCta: 'Contacte-nos',
    loading: 'A carregar…',
  },
  DE: {
    requestQuote: 'Angebot anfordern',
    detailsTitle: 'Service-Details',
    keyInfoTitle: 'Wichtige Informationen',
    locationLabel: 'Standort',
    availabilityLabel: 'Verfügbarkeit',
    availabilityValue: 'Rund um die Uhr verfügbar',
    featuresTitle: 'Merkmale',
    contactTitle: 'Schnellkontakt',
    contactDesc: 'Bei direkten Fragen zu diesem Service kontaktieren Sie unser Team jetzt.',
    contactCta: 'Kontakt aufnehmen',
    loading: 'Wird geladen…',
  },
  AR: {
    requestQuote: 'طلب عرض سعر',
    detailsTitle: 'تفاصيل الخدمة',
    keyInfoTitle: 'معلومات أساسية',
    locationLabel: 'الموقع',
    availabilityLabel: 'التوفّر',
    availabilityValue: 'متاح على مدار الساعة',
    featuresTitle: 'الميزات',
    contactTitle: 'تواصل سريع',
    contactDesc: 'لأي سؤال مباشر حول هذه الخدمة، تواصل مع فريقنا الآن.',
    contactCta: 'تواصل معنا',
    loading: 'جارٍ التحميل…',
  },
  ZH: {
    requestQuote: '申请报价',
    detailsTitle: '服务详情',
    keyInfoTitle: '关键信息',
    locationLabel: '位置',
    availabilityLabel: '可用性',
    availabilityValue: '全天候 24/7 可用',
    featuresTitle: '特性',
    contactTitle: '快速联系',
    contactDesc: '如对本服务有任何直接问题，请立即联系我们的团队。',
    contactCta: '联系我们',
    loading: '加载中…',
  },
};

export const getServiceDetailTranslations = (language) => SERVICE_DETAIL[language] || SERVICE_DETAIL.FR;

const STATIC_SERVICES = {
  FR: {
    'taoman-groupe-3240165193': {
      title: 'Aménagement & déménagement',
      location: 'Adewi Lomé',
      description: 'Service complet de déménagement et aménagement pour particuliers et professionnels.',
      features: ['Équipe professionnelle', 'Manutention sécurisée', 'Transport national et international', 'Assurance incluse'],
      details: [
        'Des camions modernes et bien équipés pour tous types de déménagements.',
        'Service personnalisé selon vos besoins logistiques.',
        'Personnel formé pour emballage, chargement et déchargement.',
      ],
    },
    'taoman-groupe-8918912275': {
      title: 'Aménagement & déménagement',
      location: 'Agoè Zongo',
      description: 'Service de déménagement professionnel avec véhicules adaptés et personnel dédié.',
      features: ['Disponibilité rapide', 'Équipe de manutention qualifiée', 'Véhicules sécurisés', 'Suivi client régulier'],
      details: [
        'Planification de déménagement sur mesure.',
        'Emballage et protection des biens.',
        'Livraison en toute sécurité jusqu’à destination.',
      ],
    },
  },
  EN: {
    'taoman-groupe-3240165193': {
      title: 'Moving & fit-out',
      location: 'Adewi, Lomé',
      description: 'Full moving and fit-out service for individuals and businesses.',
      features: ['Professional team', 'Secure handling', 'National and international transport', 'Insurance included'],
      details: [
        'Modern well-equipped trucks for all move types.',
        'Personalized service for your logistics needs.',
        'Trained staff for packing, loading and unloading.',
      ],
    },
    'taoman-groupe-8918912275': {
      title: 'Moving & fit-out',
      location: 'Agoè Zongo',
      description: 'Professional moving with adapted vehicles and dedicated staff.',
      features: ['Fast availability', 'Qualified handling team', 'Secure vehicles', 'Regular client follow-up'],
      details: [
        'Tailored move planning.',
        'Packing and goods protection.',
        'Safe delivery to destination.',
      ],
    },
  },
};

const STATIC_PACKS = { FR: STATIC_SERVICES.FR, EN: STATIC_SERVICES.EN, ES: STATIC_SERVICES.EN, PT: STATIC_SERVICES.EN, DE: STATIC_SERVICES.EN, AR: STATIC_SERVICES.EN, ZH: STATIC_SERVICES.EN };

export function getStaticServiceDetail(serviceId, language) {
  const pack = STATIC_PACKS[language] || STATIC_SERVICES.EN;
  return pack[serviceId] || null;
}

export default SERVICE_DETAIL;
