import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import FileButton from "../components/FileButton";
import InputBox from "../components/InputBox";
import Brick from "../components/Brick";
import ResultBox from "../components/ResultBox";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const Extended = () => {
    const [encryptKey, setEncryptKey] = useState("");
    const [decryptKey, setDecryptKey] = useState("");
    const [plainText, setPlainText] = useState("");
    const [cipherText, setCipherText] = useState("");
    const [isTextEncipher, setIsTextEncipher] = useState(true);
    const [isTextDecipher, setIsTextDecipher] = useState(true);
    const [plainTextFile, setPlainTextFile] = useState(null);
    const [cipherTextFile, setCipherTextFile] = useState(null);
    const [fileType, setFileType] = useState("text/plain");
    const [plainTextFileType, setPlainTextFileType] = useState("text/plain");
    const [cipherTextFileType, setCipherTextFileType] = useState("text/plain");
    const [result, setResult] = useState("");

    console.log(cipherText);

    useEffect(() => {
        if (plainTextFile) {
            const reader = new FileReader();
            reader.readAsBinaryString(plainTextFile);
            reader.onload = () => {
                setPlainTextFileType(plainTextFile.type);
                setPlainText(reader.result);
            };
        }
    }, [plainTextFile]);

    useEffect(() => {
        if (cipherTextFile) {
            const reader = new FileReader();
            reader.readAsBinaryString(cipherTextFile);
            reader.onload = () => {
                setCipherTextFileType(cipherTextFile.type);
                setCipherText(reader.result);
            };
        }
    }, [cipherTextFile]);

    return (
        <div className="App">
            <Sidebar />
            <div className="content-container">
                <div className="content-title">
                    <h1>Extended Vigenere Cipher</h1>
                </div>
                <div className="section">
                    <div className="section-header">
                        <h2>Encipher</h2>
                        <Brick setType={setIsTextEncipher} />
                    </div>
                    <div className="section-content">
                    {
                        isTextEncipher ? (
                            <TextBox id="code" text={plainText} setText={setPlainText} />
                        ) : (
                            <div className="file-uploader">
                            <FileUploader
                                id="file"
                                handleChange={(file) => {
                                    // console.log(file);
                                    setPlainTextFile(file);
                                }}
                            />
                            </div>
                        )
                    }
                        <InputBox
                            id={"key"}
                            setInput={setEncryptKey}
                            placeholder={"Key"}
                        />
                    </div>
                    <FileButton 
                        className="button-solid"
                        endpoint={"/extended/encrypt"}
                        kunci={encryptKey}
                        text={plainText}
                        setResult={setResult}
                        type={plainTextFileType}
                        setType={setFileType}
                        children={"Encrypt"}
                    />
                </div>
                <div className="section">
                    <div className="section-header">
                        <h2>Decipher</h2>
                        <Brick setType={setIsTextDecipher} />
                    </div>
                    <div className="section-content">
                    {
                        isTextDecipher ? (
                            <TextBox id="code" text={cipherText} setText={setCipherText} />
                        ) : (
                            <div className="file-uploader">
                                <FileUploader
                                    id="file"
                                    handleChange={(file) => {
                                        // console.log(file);
                                        setCipherTextFile(file);;
                                    }
                                } />
                            </div>
                        )
                    }
                        <InputBox
                            id={"key"}
                            setInput={setDecryptKey}
                            placeholder={"Key"}
                        />
                    </div>
                    <FileButton 
                        className="button-solid"
                        endpoint={"/extended/decrypt"}
                        kunci={decryptKey}
                        text={cipherText}
                        setResult={setResult}
                        type={cipherTextFileType}
                        setType={setFileType}
                        children={"Decrypt"}
                    /> 
                </div>
            </div>
            <ResultBox result={result} type={fileType}  />
        </div>
    );
}

export default Extended;