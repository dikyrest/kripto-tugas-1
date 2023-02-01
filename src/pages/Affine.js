import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import InputFile from "../components/InputFile";
import { useState, useEffect } from "react";

const Affine = () => {
  const [encryptKeyA, setEncryptKeyA] = useState("");
  const [decryptKeyA, setDecryptKeyA] = useState("");
  const [encryptKeyB, setEncryptKeyB] = useState("");
  const [decryptKeyB, setDecryptKeyB] = useState("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [PlainTextFile, setPlainTextFile] = useState(null);
  const [CipherTextFile, setCipherTextFile] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (PlainTextFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPlainText(e.target.result);
      };
      reader.readAsText(PlainTextFile);
    }
  }, [PlainTextFile]);

  useEffect(() => {
    if (CipherTextFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCipherText(e.target.result);
      };
      reader.readAsText(CipherTextFile);
    }
  }, [CipherTextFile]);

  return (
    <div className="App">
      <Sidebar />
      <div className="content-container">
        <div className="content-title">
          <h1>Affine Cipher</h1>
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Encipher</h2>
          </div>
          <div className="section-content">
            <TextBox text={plainText} setText={setPlainText} />
            <InputFile setInput={setPlainTextFile} />
            <span className="key-section">Affine Function Ax+B</span>
            <InputBox
              setInput={setEncryptKeyA}
              placeholder={"A"}
              className={"affine-a"}
              type={"number"}
            />
            <InputBox
              setInput={setEncryptKeyB}
              placeholder={"B"}
              className={"affine-b"}
              type={"number"}
            />
          </div>
          <Button
            endpoint={"/affine/encrypt"}
            kunci={encryptKeyA + ";" + encryptKeyB}
            text={plainText}
            setResult={setResult}
            children={"Encrypt"}
          />
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Decipher</h2>
          </div>
          <div className="section-content">
            <TextBox text={cipherText} setText={setCipherText} />
            <InputFile setInput={setCipherTextFile} />
            <span className="key-section">Affine Function Ax+B</span>
            <InputBox
              setInput={setDecryptKeyA}
              placeholder={"A"}
              className={"affine-a"}
              type={"number"}
            />
            <InputBox
              setInput={setDecryptKeyB}
              placeholder={"B"}
              className={"affine-b"}
              type={"number"}
            />
          </div>
          <Button
            endpoint={"/affine/decrypt"}
            kunci={decryptKeyA + ";" + decryptKeyB}
            text={cipherText}
            setResult={setResult}
            children={"Decrypt"}
          />
        </div>
      </div>
      <ResultBox result={result} />
    </div>
  );
};

export default Affine;
