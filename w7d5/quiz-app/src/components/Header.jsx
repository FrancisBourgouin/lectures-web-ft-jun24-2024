export default function Header(props) {
  const { switchMode, mode } = props;

  return (
    <header>
      <h1>Super quiz!</h1>
      <button
        onClick={() => switchMode("QUIZ")}
        style={{ backgroundColor: mode === "QUIZ" ? "#555" : "#000" }}
      >
        QUIZ MODE
      </button>
      <button
        onClick={() => switchMode("ADD")}
        style={{ backgroundColor: mode === "ADD" ? "#555" : "#000" }}
      >
        ADD MODE
      </button>
    </header>
  );
}
