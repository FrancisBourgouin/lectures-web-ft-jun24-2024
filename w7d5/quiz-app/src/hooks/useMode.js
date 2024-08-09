import { useState } from "react";
import useWow from "./useWow";

export default function useMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const { sayWow } = useWow();

  const switchMode = (newMode) => {
    const availableModes = ["QUIZ", "ADD"];

    if (availableModes.includes(newMode)) {
      sayWow();
      return setMode(newMode);
    }

    console.log("Error (╯°□°）╯︵ ┻━┻");
  };

  return [mode, switchMode];
}
