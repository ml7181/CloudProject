import { Visa } from "react-pay-icons";
import { Mastercard } from "react-pay-icons";
import { Applepay } from "react-pay-icons";
import {Googlepay} from "react-pay-icons";
const Paymenticons = () => {
    return (
        <div className="container-fluid">
            {/* <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <Visa className="paymenticonstyle"></Visa>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <Mastercard className="paymenticonstyle"></Mastercard>
                </div>

            </div> */}
             <Visa className="paymenticonstyle"></Visa>
             <Mastercard className="paymenticonstyle"></Mastercard>
            {/* <Applepay className="paymenticonstyle"></Applepay>
            <Googlepay className="paymenticonstyle"></Googlepay> */}
        </div>
    )
}
export default Paymenticons;