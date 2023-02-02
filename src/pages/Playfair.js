import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputMatrix from "../components/InputMatrix";
import ResultBox from "../components/ResultBox";
import { useState } from "react";

const Playfair = () => {
    const [plainText, setPlainText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [matrixDecrypt, setMatrixDecrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [matrixEncrypt, setMatrixEncrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [result, setResult] = useState("");

    // console.log(matrixEncrypt);

    return (
        <div className="App">
            <Sidebar />
            <div className="content-container">
                <div className="content-title">
                    <h1>Playfair Cipher</h1>
                </div>
                <div className="section">
                    <div className="section-title">
                        <h2>Encipher</h2>
                    </div>
                    <div className="section-content">
                        <TextBox id="code" text={plainText} setText={setPlainText} />
                        <span className="key-section">Playfair Square</span>
                        <InputMatrix 
                            setMatrix={setMatrixEncrypt}
                            size={5}
                            maxLength={1}
                        />
                    </div>
                    <Button
                        className="button-solid"
                        endpoint={"/playfair/encrypt"}
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
                        <TextBox id={"code"} text={cipherText} setText={setCipherText} />
                        <span className="key-section">Playfair Square</span>
                        <InputMatrix 
                            setMatrix={setMatrixDecrypt}
                            size={5}
                            maxLength={1}
                        />
                    </div>
                    <Button
                        className="button-solid"
                        endpoint={"/playfair/decrypt"}
                        text={cipherText}
                        kunci={matrixDecrypt}
                        setResult={setResult}
                        children={"Decrypt"}
                    /> 
                </div>
            </div>
            <ResultBox result={result} />
        </div>
    );
}

export default Playfair;