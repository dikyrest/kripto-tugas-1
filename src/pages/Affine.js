import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import { useState } from "react";

const Affine = () => {
  const [encryptKeyA, setEncryptKeyA] = useState("");
  const [decryptKeyA, setDecryptKeyA] = useState("");
  const [encryptKeyB, setEncryptKeyB] = useState("");
  const [decryptKeyB, setDecryptKeyB] = useState("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [result, setResult] = useState("");

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
            className="button-solid"
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
            className="button-solid"
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
