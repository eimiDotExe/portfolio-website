import { useState } from "react";

function Autocomplete({ bugPokemon, onChangeVal }) {
  const [focused, setFocused] = useState(false);
  const [renderedBugs, setRenderedBugs] = useState(bugPokemon);
  const [val, setVal] = useState('');

  const handleFocus = () => setFocused(true)

  const handleChange = (event) => {
    setVal(event.target.value);
    setRenderedBugs(
      bugPokemon.filter(bug =>
        bug.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
      )
    );
  }

  const onClose = () => {
    setFocused(false)
  }

  const handleClick = (event) => {
    console.log(event.target.id)
    setFocused(false);
    setVal(event.target.id)
    onChangeVal(event.target.id)
  }

  return <div>
    <div onClick={onClose} className={focused ? "fixed inset-0" : ""}> </div>
    <div className="bug-all">
      <div>
        <input className="bug-choose-field"
          type="text"
          placeholder="Choose a Bug"
          value={val}
          onFocus={handleFocus}
          onChange={handleChange} />
      </div>
      <div className={focused ? "bug-name-list" : ""}>{focused ? renderedBugs.map((pokemon) => {
        return (
          <div className="bug-name-field" key={pokemon.id} id={pokemon.name} onClick={handleClick}>
            {pokemon.name}
          </div>
        );
      }) : null}</div>
    </div>

  </div>
}

export default Autocomplete;