export const checkIfWellWatered = (lastWatered, wateringInterval) => {
  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();

  const diffInMs = todayDate.getTime() - lastWateredDate.getTime();
  const diffInS = diffInMs / 1000;
  const diffInDays = diffInS / 86400;

  return wateringInterval > diffInDays;
};

export const checkIfAllPlantsAreWellWatered = (listOfPlants) => {
  for (const plant of listOfPlants) {
    const result = checkIfWellWatered(plant.lastWatered, plant.wateringInterval);
    if (!result) {
      return false;
    }
  }

  return true;
};
