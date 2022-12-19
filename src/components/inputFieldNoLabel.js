import '../index.css'
const InputFieldNoLabel = ({id,text,type,placeholder,inpmode,pattern,onchange_func}) => {
    console.log(placeholder);
    return (
        <div className="container-fluid containerinpstylenolabel">
        <div className="row">
        {/* <div className="form-outline"> */}
        <div className="col-sm-12 col-md-12 col-lg-12">
        <input className="form-control inpfieldcc" type={type} id={id} name={text} placeholder={placeholder} inputMode={inpmode} pattern={pattern} onChange={onchange_func}/>
        </div>
        {/* </div> */}
        </div>
        </div>
    )
}
export default InputFieldNoLabel;