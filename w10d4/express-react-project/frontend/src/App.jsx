import { useEffect, useState } from "react";
import "./App.css";
import MapList from "./components/MapList";
import MapItem from "./components/MapItem";
import axios from "axios";

const initialMapData = {
  1: { name: "All the poutine", keywords: ["poutine", "montreal"], likes: 9001 },
  2: {
    name: "All the sad poutine",
    keywords: ["poutine", "vancouver", "not flying beaver"],
    likes: 9001,
  },
};

function App() {
  const currentPath = window.location.pathname;
  const mapId = currentPath.split("/")[2];
  console.log(mapId);

  const [mapData, setMapData] = useState({});

  useEffect(() => {
    if (!mapId) {
      axios
        .get("/api/v1/maps")
        .then((res) => res.data)
        .then((data) => setMapData(data))
        .catch(console.log);
    }

    if (mapId) {
      axios
        .get(`/api/v1/maps/${mapId}`)
        .then((res) => res.data)
        .then((data) => setMapData(data))
        .catch(console.log);
    }
  }, []);

  return (
    <>
      <header>
        <h1>MAPS OF DESTINY!</h1>
      </header>
      <main>
        {!mapId && <MapList mapData={mapData} />}
        {mapId && mapData && <MapItem mapData={mapData} />}
      </main>
    </>
  );
}

export default App;
