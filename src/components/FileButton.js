import "../styles/Button.css";
import axios from "axios";

const FileButton = ({ children, endpoint, text, kunci, setResult, type, setType, ...props }) => {
  // console.log(text);
  const handleClick = () => {
    axios.post(endpoint, { key: kunci, text }).then((res) => {
      setResult(res.data.result);
      setType(type);
    });
  };

  return <button onClick={handleClick} {...props}>{children}</button>;
};

export default FileButton;