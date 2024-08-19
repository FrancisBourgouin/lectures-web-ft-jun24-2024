function CityListItem(props) {
  const { city, handleButtonSearch } = props;

  return (
    <li>
      <button onClick={handleButtonSearch}>{city}</button>
    </li>
  );
}

export default function CityList(props) {
  const { cityList, handleButtonSearch } = props;

  const parsedCities =
    Array.isArray(cityList) &&
    cityList.map((city) => (
      <CityListItem
        key={city}
        city={city}
        handleButtonSearch={() => handleButtonSearch(city)}
      />
    ));

  return <ul className="CityList">{parsedCities}</ul>;
}
