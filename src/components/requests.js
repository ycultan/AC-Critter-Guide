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

export const getAllFish = () => fetch(`${ACNH_BASE_API}/fish`)
    .then(resp => resp.json());
