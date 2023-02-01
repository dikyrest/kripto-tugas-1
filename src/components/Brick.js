import Button from "./Button";

const Brick = ({ setType }) => {
    return (
        <div className="brick">
            <Button className="button-outline" children={"Text"} onClick={() => {
                setType(true);
            }} />
            <Button className="button-outline" children={"File"} onClick={() => {
                setType(false);
            }} />
        </div>
    );
};

export default Brick;