const MatrixInputSize = ({ setMatrixSize, setMatrix, matrix }) => {
  return (
    <input className="matrix-input-size" type="number" onChange={(e) => {
        setMatrixSize(e.target.value);
        const newMatrix = []
        for(let i = 0; i < e.target.value; i++){
            const temp = [];
            for(let j = 0; j < e.target.value; j++){
                if(i < matrix.length && j < matrix.length){
                    temp.push(matrix[i][j])
                } else{
                    temp.push(0);
                }
            }
            newMatrix.push(temp)
        }
        setMatrix(newMatrix);
    }} />
  );
};

export default MatrixInputSize;