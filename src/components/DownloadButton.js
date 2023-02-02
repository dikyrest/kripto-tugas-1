import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ result }) => {
    return (
        <Button onClick={() => {
            const buffer = Uint8Array.from(Array.from(result).map(letter => letter.charCodeAt(0)));
            const file = new Blob([buffer], { type: "text/plain" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.download = "result";
            link.click();
        }} className="button-outline" children={<AiOutlineDownload />}/>
    );
};

export default DownloadButton;