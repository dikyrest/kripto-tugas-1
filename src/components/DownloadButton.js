import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ result }) => {
    return (
        <button onClick={() => {
            const element = document.createElement("a");
            const file = new Blob([result], {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = "result.txt";
            document.body.appendChild(element);
            element.click();
        }}>
            <AiOutlineDownload />
        </button>
  );
};

export default DownloadButton;