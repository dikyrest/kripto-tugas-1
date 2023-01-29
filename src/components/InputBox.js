const InputBox = ({ input, setInput }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return <input onChange={handleChange} type="text" />;
};

export default InputBox;
