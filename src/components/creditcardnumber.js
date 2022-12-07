import InputFieldNoLabel from "./inputFieldNoLabel";

const Creditcardnumber = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-sm-6 col-md-6 col-lg-6">
                    <InputFieldNoLabel id="namecc" text="namecc" type="text" placeholder="Name on Card"></InputFieldNoLabel>
                </div>
            </div>
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12">
                <InputFieldNoLabel id="ccnum" text="ccnum" type="tel" inpmode="numeric" pattern="[0-9\s]{13,19}" placeholder="Credit/Debit Card Number" ></InputFieldNoLabel>
                </div>
            </div>
            <div className="row">
                <div className="col col-sm-6 col-md-6 col-lg-6">
                    <InputFieldNoLabel id="ccexp" text="ccexp" type="tel" inpmode="numeric" pattern="[0-9\s]{13,19}" placeholder="Expiration date mm/yy" ></InputFieldNoLabel>
                </div>
                <div className="col col-sm-3 col-md-3 col-lg-3">
                    <InputFieldNoLabel id="cvv" text="cvv" type="tel" inpmode="numeric" pattern="[0-9][0-9][0-9]" placeholder="CVV"></InputFieldNoLabel>
                </div>
            </div>
            {/* <div className="row">
                <Visa style={{width:"50%"}}></Visa>
            </div> */}
        </div>
    )
}
export default Creditcardnumber;