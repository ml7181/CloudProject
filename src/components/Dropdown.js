const Dropdown =  ({defaultChoice,choices,onchange_func,value}) => {
return (
    <div className="dropdownstyle">
    <select class="form-select" aria-label="Default select example" onChange={onchange_func} value={value}>
    <option selected>Choose a category</option>
    {/* <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option> */}
    {
    choices.map((choice) => {
        return (
            <option value={choice}>{choice}</option>
        )
    })
    }
    </select>
    </div>
)
}
export default Dropdown;