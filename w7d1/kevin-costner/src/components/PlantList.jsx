import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;

  // const parsedPlants = plants.map((plant) => (
  //   <PlantListItem
  //     key={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     lastWatered={plant.lastWatered}
  //     wateringInterval={plant.wateringInterval}
  //   />
  // ));

  // if(user && user.name){

  // }

  const isPlantsValid = Array.isArray(plants) && plants.length > 0;
  const parsedPlants =
    isPlantsValid && plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return (
    <>
      {!isPlantsValid &&  <h1>PUT SOME PLANTS IN YOU DUM DUM!</h1>}
      {isPlantsValid && <ul className="PlantList">{parsedPlants}</ul>}
    </>
  );
}
