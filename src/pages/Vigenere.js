import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";
import { useState } from "react";

const Vigenere = () => {
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
                    <h1>Vigenere Cipher</h1>
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
                    <Button 
                        className="button-solid"
                        endpoint={"/vigenere/encrypt"}
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
                    <Button
                        className="button-solid"
                        endpoint={"/vigenere/decrypt"}
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
}

export default Vigenere;