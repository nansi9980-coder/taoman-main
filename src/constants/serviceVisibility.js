/** Réactiver « Personnel & flotte » : passer à true */
export const MOVING_PERSONNEL_FLEET_ENABLED = false;

/** Réactiver sur /services : passer à true */
export const CLIMATISATION_SERVICE_ENABLED = false;
export const CONCIERGERIE_SERVICE_ENABLED = false;

const OPERATIONAL_VISIBILITY = {
  climatisation: CLIMATISATION_SERVICE_ENABLED,
  conciergerie: CONCIERGERIE_SERVICE_ENABLED,
};

export function isOperationalServiceVisible(id) {
  if (Object.prototype.hasOwnProperty.call(OPERATIONAL_VISIBILITY, id)) {
    return OPERATIONAL_VISIBILITY[id] === true;
  }
  return true;
}
