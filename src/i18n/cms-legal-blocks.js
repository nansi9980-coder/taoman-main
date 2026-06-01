/**
 * Blocs CMS légaux traduits (hors FR) — remplace cms-v2-defaults.json en vitrine.
 */
import v2Defaults from '../data/cms-v2-defaults.json';
import { isFrenchLocale } from '../utils/pickLocale';

function getCmsV2Default(key) {
  const d = v2Defaults[key];
  return d ? JSON.parse(JSON.stringify(d)) : {};
}

const LEGAL_EN = {
  legal: {
    title: 'Legal Notice',
    subtitle: 'Legal information for TAOMAN Group Investment',
    blocks: [
      {
        title: '1. Site publisher',
        body: 'This website is published by TAOMAN Group Investment, a services company based in Agoè Cacaveli, Lomé, Togo (opposite Toganim).',
        listItems: [
          'Email: taomancontact@gmail.com',
          'Phone: +228 90 42 13 77',
          'Address: Agoè Cacaveli, opposite Toganim — Lomé, Togo',
        ],
      },
      {
        title: '2. Hosting',
        body: 'The site is hosted by a third-party provider. For any hosting-related question, contact us at the address above.',
      },
      {
        title: '3. Intellectual property',
        body: 'All content on this site (text, images, logos, graphics) is the exclusive property of TAOMAN Group Investment and protected by applicable intellectual property laws. Any reproduction without prior authorization is prohibited.',
      },
      {
        title: '4. Limitation of liability',
        body: 'TAOMAN Group Investment strives to keep information accurate and up to date but cannot guarantee completeness. We decline liability for any inaccuracy or omission on this site.',
      },
      {
        title: '5. Contact',
        body: 'For any question or complaint about this site, contact us via our contact page (/contact).',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we protect your personal data',
    blocks: [
      {
        title: '1. Data collection',
        body: 'We collect personal data when you use our contact, quote or registration forms (name, email, phone and information you voluntarily provide).',
      },
      {
        title: '2. Use of data',
        body: 'Data is used only to:',
        listItems: [
          'Process your service or quote requests',
          'Manage your customer account',
          'Send information about our services (with your consent)',
          'Improve our site and services',
        ],
      },
      {
        title: '3. Data retention',
        body: 'Personal data is kept only as long as necessary for the purposes collected, in compliance with applicable law.',
      },
      {
        title: '4. Data sharing',
        body: 'We do not sell or rent your data. Data is shared only with providers strictly necessary to deliver our services.',
      },
      {
        title: '5. Your rights',
        body: 'You have the right to access, rectify, erase, object and port your data.',
        listItems: [
          'Right of access',
          'Right to rectification',
          'Right to erasure',
          'Right to object',
          'Right to data portability',
        ],
        footer: 'To exercise these rights, contact taomancontact@gmail.com.',
      },
      {
        title: '6. Cookies',
        body: 'Our site may use cookies to improve browsing. You can disable cookies in your browser settings.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Terms of use of our services',
    footerNote: 'Last updated: May 11, 2026 | Copyright © 2026 TAOMAN Group Investment. All rights reserved.',
    blocks: [
      {
        title: '1. Purpose',
        body: 'These terms govern use of the TAOMAN Group Investment website and related services.',
      },
      {
        title: '2. Services',
        body: 'Information on the site is provided for guidance. Specific conditions apply to each service and investment program.',
      },
      {
        title: '3. Investor obligations',
        body: 'Investors must provide accurate KYC information and comply with applicable regulations.',
      },
      {
        title: '4. Liability',
        body: 'Investments carry risk. Past performance does not guarantee future results.',
      },
      {
        title: '5. Applicable law',
        body: 'These terms are governed by Togolese law. Disputes shall be submitted to the competent courts of Lomé.',
      },
    ],
  },
  jobs: {
    title: 'Careers',
    subtitle: 'Join TAOMAN teams',
    categories: [
      { id: 'all', label: 'All' },
      { id: 'operations', label: 'Operations' },
      { id: 'finance', label: 'Finance' },
      { id: 'tech', label: 'Digital' },
    ],
  },
};

const I18N_PACKS = {
  EN: LEGAL_EN,
  ES: LEGAL_EN,
  PT: LEGAL_EN,
  DE: LEGAL_EN,
  AR: LEGAL_EN,
  ZH: LEGAL_EN,
};

export function getLocalizedCmsV2Default(key, language) {
  if (isFrenchLocale(language)) {
    return getCmsV2Default(key);
  }
  const pack = I18N_PACKS[language] || LEGAL_EN;
  if (pack[key]) {
    return JSON.parse(JSON.stringify(pack[key]));
  }
  return getCmsV2Default(key);
}
