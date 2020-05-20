export const getVillagers = () => fetch('http://acnhapi.com/villagers')
  .then(resp => resp.json())
  .then(data => Object.values(data).reduce((acc, villager) => {
    const species = villager.species.toLowerCase();
    const name = villager.name['name-en'];

    if (!acc[species]) {
      acc[species] = {};
    }

    acc[species][name] = villager;

    return acc;
  }, {}));
