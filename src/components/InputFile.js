const InputFile = ({ error, setInput }) => {
    const handleChange = (event) => {
        setInput(event.target.files[0]);
    };

    return (
        <div className="form-group">
            <input
                type="file"
                className="form-control"
                onChange={handleChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default InputFile;