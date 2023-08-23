import { useState } from "react";

function Options({ options, handleAnswerSelect }) {
  const optionItems = options.map((option, index) => (
    <option key={index}>{option}</option>
  ));

  const [selectedItem, setSelectedItem] = useState(0);

  const changeSelected = (selected) => {
    setSelectedItem(selected);
  };

  return (
    <>
      <h1>Options should go here</h1>
      <select onChange={(e) => changeSelected(e.target.value)}>
        {optionItems}
      </select>
      <button onClick={() => handleAnswerSelect(selectedItem)}>Next</button>
    </>
  );
}

export default Options;
