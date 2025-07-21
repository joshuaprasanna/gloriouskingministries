import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
 import { COMMON_URL } from "./CommonApi";
import UseToken from "./UseToken";
//  import UseToken from "./UseToken";


export default function useCounter() {

  const { token, setToken } = UseToken();
  const [showLoginDdoCode,setLoginDdoCode] = useState("");
  const [showDeptCode,setDeptCode] = useState('');
  const[showUserDistCode,setUserDistCode] = useState('');

  const [showDdoCode,setDdoCode] = useState("");
   const [eventId,setEventId] = useState("");
   const [showLogin,setLogin] = useState("");
   const [showRoleId,setRoleId] = useState("");
   const [showCmsId,setCmsId] = useState("");
   const [showOfficialUserName,setOfficialUserName] = useState("");



   const [showImgLoading, setImgLoading] = useState(true);
   const [showImg2Loading, setImg2Loading] = useState(false);

   const [showSelectStudent, setSelectStudent] = useState("");

   const [showAttendanceApi,setAttendanceApi] = useState({});
   const [showPresClass,setPresClass] = useState("");
   const [showStudentsData,setStudentsData] = useState([]);

   const [pidState,setPidState] =  useState('');


   const [showTest,setTest] = useState({});    

   const [showAttendance,setAttendance] = useState('');
   
   const [showRegionpApi,setRegionpApi] = useState([]);

   const [showPendingAction,setPendingAction] = useState('');

   const [showDepartmentCode,setDepartmentCode] = useState("");
   const [showDistrictCode,setDistrictCode] = useState("");
   const[showQC1ActionList,setQC1ActionList]=useState('');
   const[showHostelName,setHostelName]=useState('');
   const[showActionName,setActionName]=useState('');
   const[showq2ActionName,setq2ActionName]=useState('');
   const [showQc2Main,setQc2Main] = useState([]);
   const[showq0ActionName,setq0ActionName]=useState('');
   const [showAswoCode,setAswoCode] = useState('');
   const [showQc2Inst,setQc2Inst] = useState([]);
   const [showQc2PendingAction,setQc2PendingAction] = useState('');

   //cr reports
   const[showreportname,setreportname]=useState('');
   const [showcrreport1,setcrreport1] = useState([]);
   const [showAswoCode1,setAswoCode1] = useState('');
   const [showQc2Main1,setQc2Main1] = useState([]);
   const [showQc2Main2,setQc2Main2] = useState([]);
   const [showdisCode,setdisCode] = useState('');
   const [showQc2Main3,setQc2Main3] = useState([]);
   const [showAswoname,setAswoname] = useState("");
   const [showddoCode,setddoCode] = useState('');
   const[showcrreportList,setcrreportList]=useState('');
   const [showHostelCode,setHostelCode] = useState('');
   
    return{
       
      eventId,setEventId,showLogin,setLogin,showRoleId,setRoleId,showCmsId,setCmsId,
      showOfficialUserName,setOfficialUserName,showLoginDdoCode,setLoginDdoCode,showDeptCode,setDeptCode,
      showUserDistCode,setUserDistCode,


      showImgLoading, setImgLoading,showImg2Loading, setImg2Loading,showSelectStudent, setSelectStudent,
      showAttendanceApi,setAttendanceApi,showPresClass,setPresClass,showStudentsData,setStudentsData,
      pidState,setPidState,showTest,setTest,showAttendance,setAttendance,token, setToken ,
      showRegionpApi,setRegionpApi,showPendingAction,setPendingAction,showDdoCode,setDdoCode,
      showDepartmentCode,setDepartmentCode,showDistrictCode,setDistrictCode,showQC1ActionList,setQC1ActionList,
      showQc2Main,setQc2Main,showAswoCode,setAswoCode,showQc2Inst,setQc2Inst,showQc2PendingAction,setQc2PendingAction
      ,showHostelName,setHostelName,
      showActionName,setActionName,
      showcrreport1,setcrreport1,showAswoCode1,setAswoCode1,showQc2Main1,setQc2Main1,showdisCode,setdisCode,showQc2Main3,setQc2Main3,
      showQc2Main2,setQc2Main2,showAswoname,setAswoname,showddoCode,setddoCode,showcrreportList,setcrreportList
      ,showq0ActionName,setq0ActionName,showq2ActionName,setq2ActionName  ,showHostelCode,setHostelCode,showreportname,setreportname
    };
}