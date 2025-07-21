// import { API_URL, EARNING_SAVE, LOGIN, PAY_FIXATION_MASTER_BASE_URL } from './EmployeeApiis';
// import {
//   CommonAjaxPostWithFileUpload,
//   CommonAxios,
//   CommonAxiosPost,
//   CommonAxiosPostPdf,
// } from "./CommonAxios";

import { CommonAxiosPost } from "./Commonaxios";
// import {
//   PRC_YEAR_MASTER_URL, PRC_TYPE_UPDATE_URL, E_SIGN_EMPLOYEE_DETAILS_URL,
//   STO_MAKER_DETAILS_URL, STO_APPROVER_EMPLOYEE_DETAILS_LIST, E_SIGN_APPROVER_DETAILS_URL, E_SIGN_CHECKER_DETAILS_URL, STO_CHECKER_DETAILS_URL, payroll_UpdateDdo_Save_Url
// } from '../../PayFixation/CommonAjax/Urls';
//import { PAYROLL_APPROVAL_AVA_WORKFLOW_SAVE_URL, PENSIONER_WORKFLOW_SAVE_URL } from '../../PayFixation/API/workFlowURLS';
import axios from "axios";
//import { PAY_HEAD_API_URL } from '../../services/ConfigService';

class LoadingServices {
  submitstoppageDetails(req) {
    return CommonAxiosPost("http://localhost:8099/saveusers", req);
  }
  submitstoppageDetails1(req) {
    return CommonAxiosPost("http://localhost:8099/hello", req);
  }
}
export default new LoadingServices();
