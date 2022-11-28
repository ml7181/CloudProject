const Button = ({name,handler,size}) => {
if(size === "large")
{
    return (
        <div>
        <button type="button" onClick = {handler} className="btn btn-dark btn-outline-dark buttonstyle btn-lg"><span className="buttonnamestyle">{name}</span>
        </button>
    </div>
    )
}
return (
    <div>
        <button type="button" onClick = {handler} className="btn btn-dark btn-outline-dark buttonstyle"><span className="buttonnamestyle">{name}</span>
        </button>
    </div>
)
}

export default Button