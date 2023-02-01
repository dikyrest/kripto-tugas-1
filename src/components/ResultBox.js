import DownloadButton from "./DownloadButton";
import CheckBox from "./CheckBox";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const ResultBox = ({ result }) => {
  const [isGrouped, setIsGrouped] = useState(false);
  let finalResult = "";
  if (!isGrouped) {
    finalResult = result;
  } else if (isGrouped && result) {
    let list = String(result).match(/.{1,5}/g);
    console.log(list);
    list.forEach((element) => {
      finalResult += element + " "
    });
    console.log(finalResult);
  }

  return (
    <div className="result-container">
      <h1 className="result-title">Result</h1>
      <CheckBox setIsGrouped={setIsGrouped} />
      <div className="result-content" id="code">
        {finalResult}
      </div>
      <div className="action-container">
        <DownloadButton result={finalResult} />
        <CopyToClipboard
          text={finalResult}
          onCopy={() => {
            alert("Result copied to clipboard");
          }}
        >
          <button className="copy-button">
            <AiOutlineCopy />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ResultBox;
