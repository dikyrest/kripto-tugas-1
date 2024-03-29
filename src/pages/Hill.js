import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import ResultBox from "../components/ResultBox";
import MatrixInputSize from "../components/MatrixInputSize";
import InputMatrix from "../components/InputMatrix";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const Hill = () => {
  const [matrixSizeEncrypt, setMatrixSizeEncrypt] = useState(2);
  const [matrixSizeDecrypt, setMatrixSizeDecrypt] = useState(2);
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [plainTextFile, setPlainTextFile] = useState(null);
  const [cipherTextFile, setCipherTextFile] = useState(null);
  const [matrixDecrypt, setMatrixDecrypt] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [matrixEncrypt, setMatrixEncrypt] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (plainTextFile) {
      const reader = new FileReader();
      reader.readAsText(plainTextFile);
      reader.onload = () => {
          setPlainText(reader.result);
      };
    }
  }, [plainTextFile]);

  useEffect(() => {
    if (cipherTextFile) {
      const reader = new FileReader();
      reader.readAsText(cipherTextFile);
      reader.onload = () => {
          setCipherText(reader.result);
      };
    }
  }, [cipherTextFile]);

  return (
    <div className="App">
      <Sidebar />
      <div className="content-container">
        <div className="content-title">
          <h1>Hill Cipher</h1>
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Encipher</h2>
          </div>
          <div className="section-content">
            <TextBox id="code" text={plainText} setText={setPlainText} />
            <FileUploader
              id="file"
              handleChange={(file) => {
                  // console.log(file);
                  setPlainTextFile(file);
              }}
            />
            <span className="key-section">Matrix Size</span>
            <MatrixInputSize
              setMatrixSize={setMatrixSizeEncrypt}
              setMatrix={setMatrixEncrypt}
              matrix={matrixEncrypt}
            />
            <InputMatrix
              size={matrixSizeEncrypt}
              setMatrix={setMatrixEncrypt}
              maxLength={3}
            />
          </div>
          <Button
            className="button-solid"
            endpoint={"/hill/encrypt"}
            text={plainText}
            kunci={matrixEncrypt}
            setResult={setResult}
            children={"Encrypt"}
          />
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Decipher</h2>
          </div>
          <div className="section-content">
            <TextBox id="code" text={cipherText} setText={setCipherText} />
            <FileUploader
              id="file"
              handleChange={(file) => {
                  // console.log(file);
                  setCipherTextFile(file);
              }}
            />
            <span className="key-section">Matrix Size</span>
            <MatrixInputSize
              setMatrixSize={setMatrixSizeDecrypt}
              setMatrix={setMatrixDecrypt}
              matrix={matrixDecrypt}
            />
            <InputMatrix
              size={matrixSizeDecrypt}
              setMatrix={setMatrixDecrypt}
              maxLength={3}
            />
          </div>
          <Button
            className="button-solid"
            endpoint={"/hill/decrypt"}
            text={cipherText}
            kunci={matrixDecrypt}
            setResult={setResult}
            children={"Decrypt"}
          />
        </div>
      </div>
      <ResultBox result={result} type={"text/plain"} />
    </div>
  );
};

export default Hill;
