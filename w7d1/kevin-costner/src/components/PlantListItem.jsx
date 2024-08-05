import { checkIfWellWatered } from "../helpers/plantHelpers";
import Fancify from "./Fancify";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval);

  const plantStyle = { borderColor: isWellWatered ? "green" : "red" };

  return (
    <li className="PlantListItem" style={plantStyle}>
      {/* <Fancify> */}
      <h1>{name}</h1>
      {/* </Fancify> */}
      <p>{type}</p>
      <p>Last watered on: {lastWatered}</p>
    </li>
  );
}
