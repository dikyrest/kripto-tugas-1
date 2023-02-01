import DownloadButton from "./DownloadButton";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ResultBox = ({result}) => {
  return (
    <div className="result-container">
      <h1 className="result-title">Result</h1>
      <div className="result-content" id="code">
        {result}
      </div>
      <div className="action-container">
        <DownloadButton result={result} />
        <CopyToClipboard text={result} onCopy={() => {alert("Result copied to clipboard")}}>
          <button className="copy-button"><AiOutlineCopy /></button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ResultBox;
