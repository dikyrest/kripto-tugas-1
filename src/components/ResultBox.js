import DownloadButton from "./DownloadButton";
import CheckBox from "./CheckBox";
import { useState } from "react";

const ResultBox = ({ result, type }) => {
  const [isGrouped, setIsGrouped] = useState(false);
  let finalResult = "";
  if (!isGrouped) {
    finalResult = result;
  } else if (isGrouped && result) {
    let list = String(result).match(/.{1,5}/g);
    // console.log(list);
    list.forEach((element) => {
      finalResult += element + " "
    });
    // console.log(finalResult);
  }

  return (
    <div className="result-container">
      <h1 className="result-title">Result</h1>
      <DownloadButton result={result} type={type} />
      <CheckBox setIsGrouped={setIsGrouped} />
      <div className="result-content" id="code">
        {finalResult}
      </div>
    </div>
  );
};

export default ResultBox;
