const ACNH_BASE_API = 'https://acnhapi.com/v1';

const ENG_NAME = 'name-USen';

export const getAllVillagers = () => fetch(`${ACNH_BASE_API}/villagers`)
  .then(resp => resp.json())
  .then(data => Object.values(data).reduce((acc, villager) => {
    const species = villager.species.toLowerCase();
    const name = villager.name[ENG_NAME];
    villager.displayName = name;

    if (!acc[species]) {
      acc[species] = {};
    }

    acc[species][name] = villager;

    return acc;
  }, {}));

const isNorth = localStorage.getItem('northernHemisphere') !== 'false';

const serializeCritter = (critter) => {
  critter.name = critter.name[ENG_NAME];
  critter.isYearRound = critter.availability.isAllYear;
  critter.availability.month = critter.availability[`month-${isNorth ? 'northern' : 'southern'}`];
  critter.price = critter.price.toLocaleString();

  if (critter.availability.isAllDay)
    critter.availability.time = 'All day';

  return critter;
};

export const getAllFish = () => fetch(`${ACNH_BASE_API}/fish`)
    .then(resp => resp.json())
    .then(data => Object.values(data).map((critter) => {
      serializeCritter(critter);
      critter.shadowSize = critter.shadow.replace(/\s\(.*\)/g, '');

      return critter;
    }));

export const getAllBugs = () => fetch(`${ACNH_BASE_API}/bugs`)
    .then(resp => resp.json())
    .then(data => Object.values(data).map((critter) => serializeCritter(critter)));
