const TextBox = ({id, text, setText}) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return <textarea id={id} onChange={handleChange} rows={7} value={text} />;
};

export default TextBox;
