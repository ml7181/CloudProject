const TextArea = ({id,placeholder}) => {
    return (
    <div>
    <textarea class="form-control textareastyle" id={id} rows="5" placeholder={placeholder}></textarea>
    </div>
    )
}
export default TextArea;