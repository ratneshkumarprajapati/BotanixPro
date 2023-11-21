import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnecter";
import { endpoints } from "../apis";



export function sendOtp(email, navigate) {
    const {SENDOTP_API}=endpoints.SENDOTP_API
    return async (dispatch) => {
        const toastId = toast.loading("Loading....");

        try {
            const res = await apiConnector("POST", 
                SENDOTP_API
            , { email })

            console.log("SENDOTP_API RESPONSE.....",res)

            if (!res.data.success) {
                throw new Error(res.data.message)
                
            }
            toast.success("OTP sent Successfully")
            navigate("/verify-email")
        } catch (error) {

            console.log("SENDOTP_API ERROR...",error);
            toast.error("Could not send OTP")

        }
        toast.dismiss(toastId)

    }

}