import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ result, fileType }) => {
    return (
        <Button onClick={() => {
            console.log({"result": result, "fileType": fileType});
            const buffer = Uint8Array.from(result, c => c.charCodeAt(0));
            const file = new Blob([buffer], { type: fileType });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.download = "result";
            link.click();
        }} className="button-outline" children={<AiOutlineDownload />}/>
    );
};

export default DownloadButton;