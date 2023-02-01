import DownloadButton from "./DownloadButton";

const ResultBox = ({ result, type }) => {
  return (
    <div className="result-container">
      <h1 className="result-title">Result</h1>
      <DownloadButton result={result} type={type} />
      <div className="result-content" id="code">
        {result}
      </div>
    </div>
  );
};

export default ResultBox;
