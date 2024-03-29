import "../styles/Button.css";
import axios from "axios";

const Button = ({ children, endpoint, text, kunci, setResult, type, ...props }) => {
  // console.log(text);
  const handleClick = () => {
    axios.post(endpoint, { key: kunci, text }).then((res) => {
      setResult(res.data.result);
    });
  };

  return <button onClick={handleClick} {...props}>{children}</button>;
};

export default Button;
