const TextArea = ({id,placeholder,onchange_func,value}) => {
    return (
    <div>
    <textarea class="form-control textareastyle" id={id} rows="5" placeholder={placeholder} onChange={onchange_func} value={value}></textarea>
    </div>
    )
}
export default TextArea;