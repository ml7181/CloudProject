import '../index.css'
const InputField = ({id,text,type,placeholder,onchange_func}) => {
    console.log(placeholder);
    return (
        <div className="container-fluid containerinpstyle">
        <div className="row">
        {/* <div className="form-outline"> */}
        <div className="col col-sm-2 col-md-2 col-lg-2">
        <label className="labelstyle" htmlFor={id}>{text}</label>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-7">
        <input className="form-control inpfield" type={type} id={id} name={text} placeholder={placeholder} onChange={onchange_func}/>
        </div>
        {/* </div> */}
        </div>
        </div>
    )
}
export default InputField;