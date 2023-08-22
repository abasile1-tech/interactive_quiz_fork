function Options({ options, handleAnswerSelect }) {
  const optionItems = options.map((option, index) => <option>{option}</option>);
  return (
    <>
      <h1>Options should go here</h1>
      <select>{optionItems}</select>
    </>
  );
}

export default Options;
