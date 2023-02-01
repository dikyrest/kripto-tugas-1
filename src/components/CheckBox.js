const CheckBox = ({setIsGrouped}) => {
    const onChangeCheckbox = (e) => {
        setIsGrouped(e.target.checked)
        console.log(e.target.checked)
    }
    return (
      <div>
        <input type="checkbox" name="res" value="space" onChange={onChangeCheckbox} />
        <label for="res" id="checkbox">Space every 5 character</label>
      </div>
    );
}

export default CheckBox