import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputMatrix from "../components/InputMatrix";
import ResultBox from "../components/ResultBox";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const Playfair = () => {
    const [plainText, setPlainText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [plainTextFile, setPlainTextFile] = useState(null);
    const [cipherTextFile, setCipherTextFile] = useState(null);
    const [matrixDecrypt, setMatrixDecrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [matrixEncrypt, setMatrixEncrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
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
                        <FileUploader
                            id="file"
                            handleChange={(file) => {
                                // console.log(file);
                                setPlainTextFile(file);
                            }}
                        />
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
                        <FileUploader
                            id="file"
                            handleChange={(file) => {
                                // console.log(file);
                                setCipherTextFile(file);
                            }}
                        />
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
            <ResultBox result={result} type={"text/plain"} />
        </div>
    );
}

export default Playfair;