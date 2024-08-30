export default function MapList(props) {
  const { mapData } = props;
  // const convertedMapData = Object.values(mapData);

  const parsedMapData =
    Array.isArray(mapData) &&
    mapData.map((map) => (
      <article>
        <h1>{map.name}</h1>
        <p>Keywords: {JSON.parse(map.keywords).join(",")}</p>
        <p>Likes: {map.likes}</p>
      </article>
    ));

  return (
    <section>
      <h1>List of maps</h1>
      {parsedMapData}
    </section>
  );
}
