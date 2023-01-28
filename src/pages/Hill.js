import Sidebar from "../components/Sidebar";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import ResultBox from "../components/ResultBox";

const Hill = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="content-container">
                <div className="content-title">
                    <h1>Hill Cipher</h1>
                </div>
                <div className="section">
                    <div className="section-title">
                        <h2>Encipher</h2>
                    </div>
                    <div className="section-content">
                        <TextBox />
                        <InputBox placeholder={"key"}/>
                    </div>
                    <Button children={"Encrypt"}/>
                </div>
                <div className="section">
                    <div className="section-title">
                        <h2>Decipher</h2>
                    </div>
                    <div className="section-content">
                        <TextBox />
                        <InputBox placeholder={"key"}/>
                    </div>
                    <Button children={"Decrypt"}/> 
                </div>
            </div>
            <ResultBox />
        </div>
    );
}

export default Hill;