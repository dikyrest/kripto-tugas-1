import Sidebar from "../components/Sidebar";
import "../styles/Layout.css"

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Sidebar />
                <div className="content-container">
                    <h1>
                        Home
                    </h1>
                </div>
            </header>
        </div>
    );
}

export default Home;