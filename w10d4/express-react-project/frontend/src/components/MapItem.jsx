export default function MapItem(props) {
  const { mapData } = props;
  return (
    <article>
      <h1>{mapData.name}</h1>
      <p>Keywords: {mapData.keywords?.join(",")}</p>
      <p>Likes: {mapData.likes}</p>
    </article>
  );
}
