const InputBox = ({ id, setInput, ...props }) => {
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return <input id={id} onChange={handleChange} type="text" {...props} />;
};

export default InputBox;
