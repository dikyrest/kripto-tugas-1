const TextBox = ({text, setText}) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return <textarea onChange={handleChange} rows={7} />;
};

export default TextBox;
