import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const AutoKey = () => {
  const [encryptKey, setEncryptKey] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [plainTextFile, setPlainTextFile] = useState(null);
  const [cipherTextFile, setCipherTextFile] = useState(null);
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
          <h1>Auto-Key Vigenere Cipher</h1>
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
            <InputBox
              id={"key"}
              setInput={setEncryptKey}
              placeholder={"Key"}
            />
          </div>
          <Button
            className="button-solid"
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
            <FileUploader
              id="file"
              handleChange={(file) => {
                  // console.log(file);
                  setCipherTextFile(file);
              }}
            />
            <InputBox
              id={"key"}
              setInput={setDecryptKey}
              placeholder={"Key"}
            />
          </div>
          <Button
            className="button-solid"
            endpoint={"/autokey/decrypt"}
            kunci={decryptKey}
            text={cipherText}
            setResult={setResult}
            children={"Decrypt"}
          />
        </div>
      </div>
      <ResultBox result={result} type={"text/plain"} />
    </div>
  );
};

export default AutoKey;
