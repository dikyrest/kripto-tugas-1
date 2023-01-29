import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import { useState } from "react";

const AutoKey = () => {
  const [encryptKey, setEncryptKey] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Sidebar />
      <div className="content-container">
        <div className="content-title">
          <h1>Auto-Key Vigenere Cipher</h1>
        </div>
        <div className="section">
          <div className="section-title">
            <h2>Encipher</h2>
          </div>
          <div className="section-content">
            <TextBox text={plainText} setText={setPlainText} />
            <InputBox
              input={encryptKey}
              setInput={setEncryptKey}
              placeholder={"key"}
            />
          </div>
          <Button
            endpoint={"/autokey/encrypt"}
            kunci={encryptKey}
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
            <InputBox
              input={decryptKey}
              setInput={setDecryptKey}
              placeholder={"key"}
            />
          </div>
          <Button
            endpoint={"/autokey/decrypt"}
            kunci={decryptKey}
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

export default AutoKey;
