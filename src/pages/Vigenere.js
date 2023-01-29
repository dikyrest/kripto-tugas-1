import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";

const Vigenere = () => {
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
                        <TextBox id="plaintext" />
                        <InputBox id="key-enc" />
                    </div>
                    <Button py-click="display_encipher()" id="encrypt" children={"Encrypt"} />
                </div>
                <div className="section">
                    <div className="section-title">
                        <h2>Decipher</h2>
                    </div>
                    <div className="section-content">
                        <TextBox id="ciphertext" />
                        <InputBox id="key-dec" />
                    </div>
                    <Button py-click="display_decipher()" id="decrypt" children={"Decrypt"} />
                </div>
            </div>
            <ResultBox />
        </div>
    );
}

export default Vigenere;