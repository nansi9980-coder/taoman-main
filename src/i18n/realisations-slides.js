import { buildLangPacks, pickLangPack } from './localePack';
import { REALISATION_SLIDE_TEMPLATES } from '../data/realisations-defaults';

const FR = Object.fromEntries(
  REALISATION_SLIDE_TEMPLATES.map(({ id, title, category }) => [id, { title, category }]),
);

const EN = {
  'conducteur-01': { title: 'TAOMAN GROUP INVESTMENTS Driver 01', category: 'Logistics' },
  'transport-02': { title: 'Transport Team 02', category: 'Transport' },
  'lavage-03': { title: 'Car Wash Center 03', category: 'Car Wash' },
  'terrain-04': { title: 'Field Operation 04', category: 'Field Team' },
  'flotte-05': { title: 'Operational Fleet 05', category: 'Logistics' },
  'agro-06': { title: 'Agro Trade 06', category: 'Agro & Trade' },
  'btp-07': { title: 'Construction Project 07', category: 'Construction & Infrastructure' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: 'Transport Network 09', category: 'Logistics' },
  'digital-10': { title: 'Digital Solution 10', category: 'Digital' },
};

const ES = {
  'conducteur-01': { title: 'Conductor TAOMAN GROUP INVESTMENTS 01', category: 'Logística' },
  'transport-02': { title: 'Equipo de transporte 02', category: 'Transporte' },
  'lavage-03': { title: 'Centro de lavado 03', category: 'Lavado de autos' },
  'terrain-04': { title: 'Intervención en campo 04', category: 'Equipo de campo' },
  'flotte-05': { title: 'Flota operativa 05', category: 'Logística' },
  'agro-06': { title: 'Comercio agro 06', category: 'Agro y comercio' },
  'btp-07': { title: 'Proyecto de construcción 07', category: 'Construcción e infraestructura' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: 'Red de transporte 09', category: 'Logística' },
  'digital-10': { title: 'Solución digital 10', category: 'Digital' },
};

const PT = {
  'conducteur-01': { title: 'Motorista TAOMAN GROUP INVESTMENTS 01', category: 'Logística' },
  'transport-02': { title: 'Equipa de transporte 02', category: 'Transporte' },
  'lavage-03': { title: 'Centro de lavagem 03', category: 'Lavagem automóvel' },
  'terrain-04': { title: 'Intervenção de campo 04', category: 'Equipa de campo' },
  'flotte-05': { title: 'Frota operacional 05', category: 'Logística' },
  'agro-06': { title: 'Comércio agro 06', category: 'Agro e comércio' },
  'btp-07': { title: 'Projeto de construção 07', category: 'Construção e infraestrutura' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: 'Rede de transporte 09', category: 'Logística' },
  'digital-10': { title: 'Solução digital 10', category: 'Digital' },
};

const DE = {
  'conducteur-01': { title: 'TAOMAN GROUP INVESTMENTS Fahrer 01', category: 'Logistik' },
  'transport-02': { title: 'Transportteam 02', category: 'Transport' },
  'lavage-03': { title: 'Waschcenter 03', category: 'Autowäsche' },
  'terrain-04': { title: 'Feldeinsatz 04', category: 'Feldpersonal' },
  'flotte-05': { title: 'Betriebsflotte 05', category: 'Logistik' },
  'agro-06': { title: 'Agro-Handel 06', category: 'Agro & Handel' },
  'btp-07': { title: 'Bauprojekt 07', category: 'Bau & Infrastruktur' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: 'Transportnetz 09', category: 'Logistik' },
  'digital-10': { title: 'Digitale Lösung 10', category: 'Digital' },
};

const AR = {
  'conducteur-01': { title: 'سائق TAOMAN GROUP INVESTMENTS 01', category: 'اللوجستيات' },
  'transport-02': { title: 'فريق النقل 02', category: 'النقل' },
  'lavage-03': { title: 'مركز غسيل 03', category: 'غسيل السيارات' },
  'terrain-04': { title: 'تدخل ميداني 04', category: 'فريق ميداني' },
  'flotte-05': { title: 'أسطول تشغيلي 05', category: 'اللوجستيات' },
  'agro-06': { title: 'تجارة زراعية 06', category: 'الزراعة والتجارة' },
  'btp-07': { title: 'مشروع بناء 07', category: 'البناء والبنية التحتية' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: 'شبكة نقل 09', category: 'اللوجستيات' },
  'digital-10': { title: 'حل رقمي 10', category: 'رقمي' },
};

const ZH = {
  'conducteur-01': { title: 'TAOMAN GROUP INVESTMENTS 司机 01', category: '物流' },
  'transport-02': { title: '运输团队 02', category: '运输' },
  'lavage-03': { title: '洗车中心 03', category: '汽车清洗' },
  'terrain-04': { title: '现场作业 04', category: '现场团队' },
  'flotte-05': { title: '运营车队 05', category: '物流' },
  'agro-06': { title: '农业贸易 06', category: '农业与贸易' },
  'btp-07': { title: '建筑项目 07', category: '建筑与基础设施' },
  'agro-08': { title: 'Agro Business 08', category: 'Agro Business' },
  'reseau-09': { title: '运输网络 09', category: '物流' },
  'digital-10': { title: '数字化方案 10', category: '数字化' },
};

const PACKS = buildLangPacks({ FR, EN, ES, PT, DE, AR, ZH });

export function getRealisationSlideCopy(language, slideId) {
  const pack = pickLangPack(PACKS, language);
  return pack[slideId] || FR[slideId] || { title: '', category: '' };
}

export function buildRealisationSlidesById(language) {
  const pack = pickLangPack(PACKS, language);
  return REALISATION_SLIDE_TEMPLATES.reduce((acc, { id }) => {
    acc[id] = pack[id] || FR[id] || { title: '', category: '' };
    return acc;
  }, {});
}
