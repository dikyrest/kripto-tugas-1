import Button from "./Button";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadButton = ({ result, type }) => {
    return (
        <Button onClick={() => {
            // make file from byte string
            if (type === "dec") {
                const file = new Blob([result]);
                // create a link to download the file
                const link = document.createElement("a");
                link.href = URL.createObjectURL(file);
                link.download = "deciphered.txt";
                link.click();
            } else {
                const file = new Blob([result], {type: type});
                // create a link to download the file
                const link = document.createElement("a");
                link.href = URL.createObjectURL(file);
                link.download = "ciphered.txt";
                link.click();
            }
        }} className="button-outline" children={<AiOutlineDownload />}/>
  );
};

export default DownloadButton;