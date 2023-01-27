import Sidebar from "../components/Sidebar";
import "../styles/Layout.css"

const Vigenere = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Sidebar />
                <div className="content-container">
                    <h1>
                        Vigenere Cipher
                    </h1>
                </div>
            </header>
        </div>
    );
}

export default Vigenere;