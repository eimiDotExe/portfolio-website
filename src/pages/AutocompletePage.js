import Autocomplete from "../components/Autocomplete";
import { useState } from "react";

function AutocompletePage() {
  const [val, setVal] = useState('')

  const bugPokemon = [
    { id: 0, name: "Accelgor" },
    { id: 1, name: "Ariados" },
    { id: 2, name: "Beautifly" },
    { id: 3, name: "Beedrill" },
    { id: 4, name: "Burmy" },
    { id: 5, name: "Butterfree" },
    { id: 6, name: "Cascoon" },
    { id: 7, name: "Caterpie" },
    { id: 8, name: "Combee" },
    { id: 9, name: "Crustle" },
    { id: 10, name: "Dustox" },
    { id: 11, name: "Dwebble" },
    { id: 12, name: "Escavalier" },
    { id: 13, name: "Forretress" },
    { id: 14, name: "Foongus" },
    { id: 15, name: "Galvantula" },
    { id: 16, name: "Heracross" },
    { id: 17, name: "Illumise" },
    { id: 18, name: "Joltik" },
    { id: 19, name: "Kakuna" },
    { id: 20, name: "Karrablast" },
    { id: 21, name: "Kricketot" },
    { id: 22, name: "Kricketune" },
    { id: 23, name: "Larvesta" },
    { id: 24, name: "Ledian" },
    { id: 25, name: "Leavanny" },
    { id: 26, name: "Ledyba" },
    { id: 27, name: "Masquerain" },
    { id: 28, name: "Metapod" },
    { id: 29, name: "Mothim" },
    { id: 30, name: "Nincada" },
    { id: 31, name: "Paras" },
    { id: 32, name: "Parasect" },
    { id: 33, name: "Pineco" },
    { id: 34, name: "Pinsir" },
    { id: 35, name: "Scizor" },
    { id: 36, name: "Scolipede" },
    { id: 37, name: "Scrafty" },
    { id: 38, name: "Scraggy" },
    { id: 39, name: "Sewaddle" },
    { id: 40, name: "Shedinja" },
    { id: 41, name: "Shelmet" },
    { id: 42, name: "Spinarak" },
    { id: 43, name: "Surskit" },
    { id: 44, name: "Swadloon" },
    { id: 45, name: "Venomoth" },
    { id: 46, name: "Venonat" },
    { id: 47, name: "Venipede" },
    { id: 48, name: "Vespiquen" },
    { id: 49, name: "Volbeat" },
    { id: 50, name: "Volcarona" },
    { id: 51, name: "Whirlipede" },
    { id: 52, name: "Wormadam" },
    { id: 53, name: "Wurmple" },
    { id: 54, name: "Yanma" },
    { id: 55, name: "Yanmega" },
  ];

  const handleValChange = (childVal) => {
    console.log(childVal)
    setVal(childVal)
  }

  return <Autocomplete bugPokemon={bugPokemon} onChangeVal={handleValChange} />
};

export default AutocompletePage;