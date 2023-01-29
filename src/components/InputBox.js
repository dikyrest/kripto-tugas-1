const InputBox = ({ id, input, setInput }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return <input id={id} onChange={handleChange} type="text" />;
};

export default InputBox;
