import axios from "axios";
import { Field, useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion"
import { Framermotionnivas } from "./Framermotionnivas";
import useCounter from "./useCounter";
import { useBetween } from "use-between";
import StudentBlock from "./Studentblock";
import CommonPost from "./CommonPost";

// import ReactTooltip from "./react-tooltip";
function useSharedCounter() {
    return useBetween(useCounter);
}
export default function BiometricDailyAttendence(post) {
    const [showModelPopUp, setModelPopUp] = useState(false);

    const [studentData, setStudentData] = useState({});
    const [classesData, setClassesData] = useState([]);
    const [currentStudentData, setCurrentStudentData] = useState([]);
    const [active, setActive] = useState(null);
    const handleShow = () => setModelPopUp(true);

    const biometricInit = {
        deviceName: post.deviceName,
        deviceType: 1,
        biometricType: '',
        pid: '',
        studentId: '',
    }


    const attendanceSubmit = () => {
        showTest.pid = pidState;
        //alert("after:::::::::::::::::::"+JSON.stringify(showTest));

        CommonPost.submitAttendance(showTest).then((res) => {
            //alert("RRRR"+JSON.stringify(res.data));
            console.log(JSON.stringify(res.data));
            if (res.data != null) {
                setImg2Loading(false);
                if (res.data.ResponseCode === "01") {
                    setAttendance(res.data.ResponseDesc);
                    //alert(showTest.studentId);
                    document.getElementById(`${showTest.studentId}`).style.backgroundColor = "green";
                }
                else {
                    setAttendance(res.data.ResponseDesc);
                    //alert(showTest.studentId);
                    document.getElementById(`${showTest.studentId}`).style.backgroundColor = "red";
                }
            }
            else {
                setAttendance("Internal Server Problem");
            }
            console.log("Attendance api data>>>>", res.data);
        })
            .catch(() => {

                console.log("Exception Occured Biomertic daily attendance page ");
            });
    }





    const biometricFormik = useFormik(
        {
            initialValues: biometricInit,
            // validationSchema:validation,
            //onSubmit:
            // values=>{
            //     alert(JSON.stringify(values));
            //     console.log(values);

            // },

            //onSubmit : attendanceSubmit       

        })




    function GetStudentDetails() {
        axios.get("http://10.10.0.193:8310/jnbnivas/getJnbNivasInstituteStudents/?userId=nabard001").then((response) => {
            setStudentData(response.data.StudentsData);
            // setStudentData(response.data.StudentsData.filter
            //     ((row)=>{return row.roll_no<=10}));//total studnets data
            setClassesData(response.data.PresentClasses);
        });
    }
    

        const { showImgLoading, setImgLoading, showImg2Loading, setImg2Loading, showSelectStudent, setSelectStudent,
            pidState, setPidState, showTest, setTest, showAttendance, setAttendance } = useSharedCounter();
    
    useEffect(() => {
        GetStudentDetails()
    }, [])

    function getStudentListData(e, value) {
        const data = studentData.filter((rowdata) => rowdata.pres_class === value);
        console.log('data', data);
        setCurrentStudentData(data);
    }



    // const biometricFormik = useFormik(
    //     {
    //         initialValues: biometricInit,
    //         // validationSchema:validation,
    //         //onSubmit:
    //         // values=>{
    //         //     alert(JSON.stringify(values));
    //         //     console.log(values);

    //         // },

    //         //onSubmit : attendanceSubmit       

    //     })


    function getXMLHttpRequest(verb, url, asynchronous) {
        try {
            var xhr = new XMLHttpRequest();

            if ("withCredentials" in xhr) {
                xhr.open(verb, url, asynchronous);
            }
            else {
                xhr = null;
            }

        } catch (ex) {
            alert("Error: " + ex.message);
        }
        return xhr;
    }

    function captureFPAuth_fm220() {
        let url = '';
        let uri = "http://localhost";
        let port2 = '';
        //='11080';// '11100';
        for (let i = 11100; i <= 11120; i++) {
            try {
                url = uri + ":" + i + "/";
                //url = "http://localhost:11100/";
                let xhr77 = getXMLHttpRequest('RDSERVICE', url, false);
                xhr77.send();

                let status = xhr77.status;
                console.log(xhr77.responseText);//response data

                if (status === 200) {
                    console.log(xhr77.status + "::");
                    let data = xhr77.responseText;
                    port2 = i;
                    break;
                }
            } catch (e) {
                console.log(e.message);
            }
        }
        let port1 = '';
        let urlStr1 = '';
        let useHTTPS1 = false;
        if (useHTTPS1) {
            urlStr1 = 'https://localhost:' + port2 + '/rd/capture?ts=' + Date.now();
        } else {
            port1 = document.getElementById("DrpPortSelection");
            urlStr1 = 'http://localhost:' + port2 + '/rd/capture?ts=' + Date.now();
        }


        getJSONCaptureFM220(urlStr1,
            function (err1, data1) {
                if (err1 != null) {
                    alert('Something went wrong: ' + err1);
                }
                else {
                    //alert("data1::"+data1);
                    document.getElementById("pid").value = data1;

                    if (document.getElementById("pid").value === null || document.getElementById("pid").value === '' || document.getElementById("pid").value.indexOf("Capture timeout") > -1) {
                        document.getElementById("loaderImg1").style.display = "none";
                        document.getElementById("loaderImg").style.display = "none";
                        document.getElementById("pid").value = "";

                        alert("Place your finger properly on the device");
                        return false;
                    }
                    else {
                        setImgLoading(false);
                        setImg2Loading(true);
                        //alert("Capture,need to post the data");
                        document.getElementById('submitbtn').click();
                        //attendanceSubmit();

                    }
                }
            }
        );
    }
    let getJSONCaptureFM220 = function (url1, callback1) {

        let xhr22 = new XMLHttpRequest();
        xhr22.open('CAPTURE', url1, true);
        try { xhr22.responseType = 'text/xml'; } catch (e) { }  //json

        let InputXml = "<PidOptions> <Opts fCount=\"1\" fType=\"2\" iCount=\"0\" pCount=\"0\" format=\"0\" pidVer=\"2.0\" timeout=\"20000\" otp=\"\" posh=\"UNKNOWN\" env=\"P\" wadh=\"\" /><CustOpts> <Param name=\"ValidationKey\" value=\"\" /> <Demo></Demo></CustOpts> </PidOptions>";

        xhr22.onload = function () {
            let status1 = xhr22.status;

            if (status1 === 200) {

                // alert(xhr22.response+":;R");

                setPidState(xhr22.response);
                //alert("pid response::::::;",xhr22.response);
                callback1(null, xhr22.response);//
                //setTest({deviceName:document.getElementById("deviceName").value,biometricType:'F',deviceType:1,studentId:777,pid:xhr22.response});

            } else {
                callback1(status1);
            }
        };
        xhr22.send(InputXml);
    };


    function initializeDevice(roll_no, stu_id, stu_name) {

        setTest({ deviceName: document.getElementById("deviceName").value, biometricType: 'F', deviceType: 1, studentId: stu_id, pid: '' });

        if (document.getElementById("deviceName").value === "startek") {
            captureFPAuth_fm220();
        }

        // else if (document.getElementById("deviceName").value === "secugen") {
        //     //alert('Secugen');
        //     captureFP_kedia();
        // }
        // else if (document.getElementById("deviceName").value === "ritech") {
        //     //alert('Secugen');
        //     captureiris_iritech();
        // }
        // else if (document.getElementById("deviceName").value === "iritech-U"){
        //     //alert('iritech-U');
        //     captureiris_iritech_U();
        // }
    }



    return (





        <>
            <form>
                <Row style={{ backgroundColor: "#801322" }}>         <center className="text-danger" >
                    <h4><b style={{ color: "white" }}><i className="fa fa-file-text-o" aria-hidden="true"></i> DAILY ATTENDANCE</b></h4>
                </center>

                </Row>
                <br></br>



                <center>              <label>
                    <b>Select Device:</b>
                    <select style={{ backgroundColor: "#151657", color: "white", height: "40px", fontFamily: "initial" }}>
                        <option value=""><b>select Device</b></option>
                        <option value="startek"><b>Startek</b></option>
                        <option value="secugen"><b>SECUGEN HAMSTER4 PRO</b></option>
                        <option value="iritech"><b>IriShield-UL</b></option>
                    </select>

                    {/* <Framermotionnivas></Framermotionnivas> </label></center> */}

                    {/* <div>
<motion.div style={{ float: 'left', display: 'inline-block', marginTop: "20px", }}>
<motion.ul>
{classesData.map((data) => {
          
          return (
            <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
            }}>

                <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e)=>getStudentListData(e,data.pres_class)}>{data.pres_class}</h6>

            </motion.li>
            
          )
        })}
        </motion.ul>
</motion.div>
</div> */}
                    <div>

                        <motion.div style={{ float: 'left', display: 'inline-block', marginTop: "20px", }}>


                            <motion.ul>

                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "All Students")}>All Students</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "5-A")}>Class 5-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "5-B")}>Class 5-B</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "6-A")}>Class 6-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "6-B")}>Class 6-B</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "7-A")}>Class 7-A</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "7-B")}>Class 7-B</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>


                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "7-C")}>Class 7-C</h6>
                                </motion.li>

                                <br></br>
                                <br></br>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "8-A")}>Class 8-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "8-B")}>Class 8-B</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "9-A")}>Class 9-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "9-B")}>Class 9-B</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>


                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "10-A")}>Class 10-A</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "10-B")}>Class 10-B</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "11-A")}>Class 11-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "11-A(BPC)")}>Class 11-A(BPC)</h6>
                                </motion.li>
                                <br></br>


                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "11-A(MPC)")}>Class 11-A(MPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "11-B")}>Class 11-B</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "11-B(BPC)")}>Class 11-B(BPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "12-A")}>Class 12-A</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>


                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "12-A(0)")}>Class 12-A(0)</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "12-A(BPC)")}>Class 12-A(BPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "12-A(MPC)")}>Class 12-A(MPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "12-B")}>Class 12-B</h6>
                                </motion.li>

                                <br></br>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <br></br>
                                    <h6 style={{ marginTop: "-30px", color: "black" }} onClick={(e) => getStudentListData(e, "12-B(BPC)")}>Class 12-B(BPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "13-A(BPC)")}>Class 13-A(BPC)</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "13-A(MPC)")}>Class 13-A(MPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "13-B(BPC)")}>Class 13-B(BPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#f7f4c8", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>


                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "14-A(BPC)")}>Class 14-A(BPC)</h6>
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#a4e5f5", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>
                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "14-A(MPC)")}>Class 14-A(MPC)</h6>

                                </motion.li>
                                <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} style={{
                                    backgroundColor: "#c7f2cf", height: "10px", width: "120px"
                                    , padding: '40px 20px 20px 15px', marginBottom: '5px', float: 'left'
                                }}>

                                    <h6 style={{ marginTop: "-25px", color: "black" }} onClick={(e) => getStudentListData(e, "Guest")}>Guest</h6>

                                </motion.li>

                            </motion.ul>
                        </motion.div>


                    </div>

                </label></center>

                <br></br>

                {/* <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2} >
                                    <button data-tip data-for="registerTip" className="notification cursor-pointer btn btn-outline-info" >
                                        <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;
                                        Instructions
                                    </button>
                                </Col>

                     

                            <ReactTooltip id="registerTip" place={'bottom'} effect="solid" type={'light'} border={true}>
                                <h4><b >Note</b>:</h4>
                                <br />
                                <ol>
                                    <li>Click on the student Roll No. to give Attendance.</li>
                                    <li>Student is not shown in the list, if the Roll No. mapping is not done.</li>
                                </ol>
                                <hr />
                            </ReactTooltip> */}

                <Row>

                    <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <b>Note :</b></h3>
                    <center>
                        <p style={{ fontSize: "30px", fontWeight: "20px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click on the student Roll No. or type the Roll No. from Keyboard to give Attendance.
                        </p>

                        <p style={{ fontSize: "30px" }}>&nbsp;Student is not shown in the list, if the Roll No. mapping is not done.
                        </p>
                    </center>
                </Row>
                {/* < table   style={{marginLeft:"30px",marginBottom:"20px"}}>
            <thead style={{color:"black", fontWeight:"bold",color:"white", }}>
            <Row  >
              <Col  style={{border:"1px solid black", width:"1500px",backgroundColor:"#06092e"}} >STUDENT ID</Col>
              <Col style={{border:"1px solid black", width:"1500px",backgroundColor:"#06092e"}} >PRESENT CLASS</Col>
              <Col style={{border:"1px solid black", width:"1500px",backgroundColor:"#06092e"}} >STUDENTNAME</Col>
             
            </Row>
            </thead>
            <tbody> */}
                { <div className="posts">
                    {currentStudentData.map((post) => {
                        return (
                            <div key={post.student_id} className={post.marked === "Y" ? "block-css-success" : "block-css"}  onClick={(e) => {
                                if (post.marked === "N") {
                                    setSelectStudent(post.student_name + '(' + post.roll_no + ')');
                                    setAttendance('');
                                    setImgLoading(true);
                                    handleShow();

                                    initializeDevice(post.roll_no, post.student_id, post.student_name + '(' + post.roll_no + ')')
                                }
                                else {
                                    alert("Attendance already marked");
                                }
                            }} >
                                <p ><b>{post.roll_no}</b></p>
                                <br></br>
                                <p><b>{post.student_name}</b></p>
                            </div>
                        )
                    })}
                </div> }


                {/* { <div>
                    {currentStudentData &&
                        currentStudentData.map((tp, i) => {
                            return <>

                                <Col xs={12} sm={12} md={12} lg={4} xl={3} xxl={3} key={tp.roll_no} > 
                                    <br />
                                    <StudentBlock data={tp} />
                                </Col>
                            </>
                        })}
                </div> } */}

                {/* </tbody>
      </table> */}

            </form>

        </>
    )



}

