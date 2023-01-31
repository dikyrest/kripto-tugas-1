import "../styles/Button.css";
import axios from "axios";

const ActionButton = ({ children, endpoint, text, kunci, setResult }) => {
  console.log(text);
  const handleClick = () => {
    axios.post(endpoint, { key: kunci, text }).then((res) => {
      setResult(res.data.result);
    });
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default ActionButton;
