import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsArr, plantsObj } from "./data/mockPlantData";
import { checkIfAllPlantsAreWellWatered } from "./helpers/plantHelpers";

// Props => Properties

function App() {
  const amountOfPlants = plantsArr.length;
  const isWellWatered = checkIfAllPlantsAreWellWatered(plantsArr);

  return (
    <div className="App">
      <Header isSad={!isWellWatered} amount={amountOfPlants} />
      {/* The Header props object will look like: {amount:5, isSad:false} */}
      <main>
        <PlantList 
        plants={[]}
        // plants={plantsArr}
        />
      </main>
    </div>
  );
}

export default App;
