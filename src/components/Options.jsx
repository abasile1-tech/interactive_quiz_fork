import { useState } from "react";

function Options({ options, handleAnswerSelect }) {
  const optionItems = options.map((option, index) =>
    index == 0 ? (
      <option key={index} value="">
        {option}
      </option>
    ) : (
      <option key={index}>{option}</option>
    )
  );

  const [selectedItem, setSelectedItem] = useState(0);

  const changeSelected = (selected) => {
    setSelectedItem(selected);
  };

  const handleAndRefocus = (selectedItem) => {
    handleAnswerSelect(selectedItem);
    const select = document.getElementById("select");
    select.selectedIndex = 0;
  };

  return (
    <>
      <h1>Options should go here</h1>
      <select id="select" onChange={(e) => changeSelected(e.target.value)}>
        {optionItems}
      </select>
      <button onClick={() => handleAndRefocus(selectedItem)}>Next</button>
    </>
  );
}

export default Options;
