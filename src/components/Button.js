import "../styles/Button.css";
import axios from "axios";

const ActionButton = ({ children, endpoint, text, kunci, setResult, ...props }) => {
  console.log(text);
  const handleClick = () => {
    axios.post(endpoint, { key: kunci, text }).then((res) => {
      setResult(res.data.result);
    });
  };

  return <button onClick={handleClick} {...props}>{children}</button>;
};

export default ActionButton;
