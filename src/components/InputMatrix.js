const InputMatrix = ({ setMatrix, size, maxLength }) => {
    const handleChange = (e) => {
        const { value, id } = e.target;
        const [row, col] = id.split(",");
        setMatrix((prev) => {
            const newMatrix = [...prev];
            newMatrix[row][col] = value;
            return newMatrix;
        });
    }

    const listFirstRow = []
    for (let i = 0; i < size; i++){
        listFirstRow.push(<th>{i+1}</th>)
    }

    const listMatrix = []
    for (let i = 0; i < size; i++){
        const listTile = []
        for(let j = 0; j < size; j++){
            listTile.push(<td><input id={i + "," + j} className="cell" onChange={handleChange} type="text" maxLength={maxLength} /></td>)
        }
        listMatrix.push(
          <tr>
            <th>{i + 1}</th>
            {listTile.map((tile) => tile)}
          </tr>
        );
    }

    return (
        <div className="matrix-grid">
            <table>
                <tbody>
                    <tr>
                        <th>\</th>
                        {
                            listFirstRow.map((col) => col)
                        }
                        
                        {/* <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th> */}
                    </tr>
                    {
                        listMatrix.map((m) => m)
                    }
                    {/* <tr>
                        <th>1</th>
                        <td>
                            <input id="0,0" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="0,1" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="0,2" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="0,3" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="0,4" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>
                            <input id="1,0" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="1,1" className="cell" onChange={handleChange} type="text" maxLength={1} /> 
                        </td>
                        <td>
                            <input id="1,2" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="1,3" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="1,4" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>
                            <input id="2,0" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="2,1" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="2,2" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="2,3" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="2,4" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>
                            <input id="3,0" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="3,1" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="3,2" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="3,3" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="3,4" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>
                            <input id="4,0" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="4,1" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="4,2" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="4,3" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                        <td>
                            <input id="4,4" className="cell" onChange={handleChange} type="text" maxLength={1} />
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default InputMatrix;