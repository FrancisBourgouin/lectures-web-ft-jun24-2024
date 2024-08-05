// Header props => Propertie given to the Header component

import Fancify from "./Fancify";

export default function Header(props) {
  const { isSad, amount } = props;
  return (
    <header className="Header">
      <h1>Kevin's {isSad ? "sad" : ""} watering world</h1>
      <Fancify>
        <h2>Currently managing {amount} plants</h2>
      </Fancify>
    </header>
  );
}
