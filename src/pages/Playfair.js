import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputMatrix from "../components/InputMatrix";
import InputFile from "../components/InputFile";
import ResultBox from "../components/ResultBox";
import { useEffect, useState } from "react";

const Playfair = () => {
    const [plainText, setPlainText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [matrixDecrypt, setMatrixDecrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [matrixEncrypt, setMatrixEncrypt] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [PlainTextFile, setPlainTextFile] = useState(null);
    const [CipherTextFile, setCipherTextFile] = useState(null);
    const [result, setResult] = useState("");

    console.log(matrixEncrypt);

    useEffect(() => {
        if (PlainTextFile) {
            // read file as binary string
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
                    <h1>Playfair Cipher</h1>
                </div>
                <div className="section">
                    <div className="section-title">
                        <h2>Encipher</h2>
                    </div>
                    <div className="section-content">
                        <TextBox id="code" text={plainText} setText={setPlainText} />
                        <InputMatrix 
                            setMatrix={setMatrixEncrypt}
                            size={5}
                            maxLength={1}
                        />
                    </div>
                    <InputFile setInput={setPlainTextFile} />
                    <Button 
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
                        <InputMatrix 
                            setMatrix={setMatrixDecrypt}
                            size={5}
                            maxLength={1}
                        />
                    </div>
                    <InputFile setInput={setCipherTextFile} />
                    <Button 
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