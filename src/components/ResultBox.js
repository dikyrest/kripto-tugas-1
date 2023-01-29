const ResultBox = ({result}) => {
  return (
    <div className="result-container">
      <h1 className="result-title">Result</h1>
      <div className="result-content" id="result">
        {result}
      </div>
    </div>
  );
};

export default ResultBox;
