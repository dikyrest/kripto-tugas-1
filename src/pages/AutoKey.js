import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import InputFile from "../components/InputFile";
import ResultBox from "../components/ResultBox";
import { useEffect, useState } from "react";

const AutoKey = () => {
  const [encryptKey, setEncryptKey] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
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
      }
      reader.readAsText(PlainTextFile);
    }
  }, [PlainTextFile]);

  useEffect(() => {
    if (CipherTextFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
          setCipherText(e.target.result);
      }
      reader.readAsText(CipherTextFile);
    }
  }, [CipherTextFile]);

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
            <TextBox id="code" text={plainText} setText={setPlainText} />
            <InputBox
              id={"key"}
              setInput={setEncryptKey}
              placeholder={"Key"}
            />
          </div>
          <InputFile setInput={setPlainTextFile} />
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
            <TextBox id="code" text={cipherText} setText={setCipherText} />
            <InputBox
              id={"key"}
              setInput={setDecryptKey}
              placeholder={"Key"}
            />
          </div>
          <InputFile setInput={setCipherTextFile} />
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
