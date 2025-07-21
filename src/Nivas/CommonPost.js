// import { CommonAxiosPost } from "../../APIs";
import { CommonAxiosPost } from "../Commonaxios";
import { COMMON_URL } from "./CommonApi";

class CommonPost
{
   submitLoginPage(req) {
    return CommonAxiosPost(COMMON_URL+"jnblogincheck",req);
   }
    submitAttendance(req) {
        return CommonAxiosPost(COMMON_URL+"postFingerPrintData", req);
      }
      submitQc0PendingAction(req){
      return CommonAxiosPost(COMMON_URL+"postActionRemarks",req);
    }
    
}

export default new  CommonPost();
