import { Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useBetween } from "use-between";
import CommonPost from "./CommonPost";
// import CommonPost from "./CommonPost";
import useCounter from "./useCounter";

function useSharedCounter() {
    return useBetween(useCounter);
}

export default function StudentBlock(props) {
    const { showImgLoading, setImgLoading, showImg2Loading, setImg2Loading, showSelectStudent, setSelectStudent,
        pidState, setPidState, showTest, setTest, showAttendance, setAttendance } = useSharedCounter();

    //***************modalpopup****************************
    const [showModelPopUp, setModelPopUp] = useState(false);
    const handleClose = () => {
        setModelPopUp(false);
        setImgLoading(true);
        setImg2Loading(false);
    }
    const handleShow = () => setModelPopUp(true);

    const biometricInit = {
        deviceName: props.deviceName,
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

    // ******************************Secugen device code ****************************************
    function captureFP_kedia() {

        let port1 = "";
        let params = "";
        let port = "";
        //let uri="";
        let f = (function () {
            //alert('fp_kedia r');
            var xhr = [], i;
            for (let i = 11100; i < 11101; i++) {
                xhr[i] = new XMLHttpRequest();
                xhr[i].onreadystatechange = function () {

                    console.log('xhr ', xhr);
                    if (xhr[i].readyState == 4 && xhr[i].status == 200) {

                        if (xhr[i].responseText.includes("SecuGen") === true) {
                            port1 = i;
                            port = port1;
                            let uri = "https://localhost:" + port + "/rd/capture";

                            params = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><PidOptions ver="1.0"><Opts fCount="1" fType="2" iCount="0" iType="" pCount="0" pType="" format="0" pidVer="2.0" timeout="10000" otp="" env="P" /><CustOpts><Param name="ValidationKey" value=""/></CustOpts></PidOptions>';

                            var xmlhttp = new XMLHttpRequest();
                            xmlhttp.onreadystatechange = function () {
                                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                                    //alert("readyState::"+xmlhttp.readyState+"::status::"+xmlhttp.status+"::responseText::"+xmlhttp.responseText);
                                    setPidState(xmlhttp.responseText);
                                    document.getElementById("pid").value = xmlhttp.responseText;

                                    if (document.getElementById("pid").value === '') {
                                        document.getElementById("loaderImg1").style.display = "none";
                                        document.getElementById("loaderImg").style.display = "none";
                                        document.forms[0].fingertemplatebase64.value = "";
                                        //document.getElementById("pid").value === '';
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
                                else if (xmlhttp.status === 404) {
                                    failCall(xmlhttp.status);
                                }
                                else if (xmlhttp.status === 503) {
                                    alert("server Unavailable");
                                }
                            }
                            xmlhttp.onerror = function () {
                                failCall(xmlhttp.status);
                            }
                            xmlhttp.onabort = function () {
                                alert("Aborted");
                            }
                            xmlhttp.open("CAPTURE", uri, true);

                            xmlhttp.send(params);
                        }
                    }
                    else if (xhr[i].status === 404) {

                    }
                    else if (xhr[i].status === 503) {
                        //alert(xhr[i].status);
                        //failCall(xhr[i].status)
                    }
                }

                xhr[i].onerror = function () {
                    //alert(xhr[i].status);
                    //failCall(xhr[i].status);
                }

                xhr[i].onabort = function () {
                    alert("Aborted");
                }


                var uri = "https://localhost:" + i + "/";
                xhr[i].open("RDSERVICE", uri, true);

                xhr[i].send();

                //})(i);
            }
        })();


    }

    function failCall(status) {
        alert("Check if RDSERVICE is running ");
    }
    //************************* iritech************************************************************** */
    function captureiris_iritech() {
        let port = "";
        let uri = "";

        for (let i = 11100; i <= 11120; i++) {
            try {
                let url = uri + ":" + i + "/";
                let xhr = getXMLHttpRequest('RDSERVICE', url, false);
                xhr.send();

                let status = xhr.status;

                if (status == 200) {
                    let data = xhr.responseText;

                    //console.log(data);
                    let oDOM = parseXml(data);

                    console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
                    let info = oDOM.documentElement.getAttribute('info');
                    if (info != null && info.indexOf('IriShield-USB-MK2120UL') != -1 && info.indexOf('Registered Device Service Ext') != -1) {
                        port = i;
                        //alert("port:::"+port)
                        break;
                    }
                }
            } catch (e) {
                console.log(e.message);
            }
        }

        let url = "http://localhost:" + port + "/rd/capture";
        //alert("url::::::"+url);
        
        let PIDOPTS = "<PidOptions ver='1.0'><Opts fCount='' fType='' iCount='1' iType='0' pCount='' pType='' format='0' pidVer='2.0' timeout='10000' otp=''   posh='UNKNOWN' env='P'/><CustOpts> <Param name='enable_preview' value='yes' /></CustOpts></PidOptions>";
        //alert("url::"+url);

        let xhr = getXMLHttpRequest('CAPTURE', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                let status = xhr.status;
                if (status == 200) {

                    var data = xhr.responseText
                    //$('#txtpidata').val(data);

                    let oParser = new DOMParser();
                    let oDOM = oParser.parseFromString(data, "application/xml");
                    console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);

                    let resp = oDOM.getElementsByTagName("Resp")[0];
                    let errcode = resp.getAttribute('errCode');
                    let errInfo = resp.getAttribute('errInfo');
                    if (errcode == '0') {

                        document.forms[0].fingertemplatebase64.value = xhr.responseText;
                        //alert("xhr.responseText - > "+xhr.responseText);
            
                        if (document.getElementById("pid").value === '') {

                            document.getElementById("loaderImg1").style.display = "none";
                            document.getElementById("loaderImg").style.display = "none";

                            document.forms[0].fingertemplatebase64.value = "";

                            alert("Place your finger properly on the device");
                            return false;
                        } else {
                            setImgLoading(false);
                            setImg2Loading(true);
                            //alert("Capture,need to post the data");
                            document.getElementById('submitbtn').click();
                        }

                    } else {
                        alert("Capture error: " + errInfo);
                    }

                } else {
                    alert("Service Unavailable");
                    console.log(xhr.response);

                }

                //closeModal();
            }

        };

        xhr.send(PIDOPTS);
    }
    function clearResponseTextArea() {
        //$('#txtpidata').val('');
    }

    var parseXml = getParseXmlFunc();

    function getParseXmlFunc() {
        var parseXml;
        if (typeof window.DOMParser != "undefined") {
            parseXml = function (xmlStr) {
                return (new window.DOMParser()).parseFromString(xmlStr, "application/xml");
            };
        } else if (typeof window.ActiveXObject != "undefined" &&
            new window.ActiveXObject("Microsoft.XMLDOM")) {
            parseXml = function (xmlStr) {
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error("No XML parser found");
        }

        return parseXml;
    }

    // **************************iritech-U************************************************************
    // function captureiris_iritech_U() {
    //     getJSONCapture_iris('http://localhost:11100/rd/capture', function (err, data) {

    //         if (err != null) {
    //             alert('Something went wrong: ' + err);
    //         } else {

    //             //document.forms[0].fingertemplatebase64.value = String(data);
    //             document.getElementById("pid").value = data;
    //             //if (document.forms[0].fingertemplatebase64.value == ''	|| document.forms[0].fingertemplatebase64.value == null) {
    //             if (document.getElementById("pid").value === '') {
    //                 alert("place your finger properly on the device");
    //                 return false;
    //             } else {
    //                 setImgLoading(false);
    //                 setImg2Loading(true);
    //                 //alert("Capture,need to post the data");
    //                 document.getElementById('submitbtn').click();
    //             }

    //             /*  alert(String(data));
    //              document.getElementById("PidData").value = String(data); */
    //         }
    //     }
    //     );
    // }

    // let getJSONCapture_iris = function (url, callback) {

    //     let xhrw = new XMLHttpRequest();


    //     xhrw.open('CAPTURE', url, true);
    //     xhrw.responseType = 'text';
    //     let InputXml = "<PidOptions> <Opts fCount=\"\" fType=\"\" iCount=\"2\" iType=\"0\" pCount=\"0\" format=\"0\" pidVer=\"2.0\" timeout=\"10000\" otp=\"\" posh=\"UNKNOWN\" env=\"P\" /> <Demo></Demo> <CustOpts> <Param name=\"ValidationKey\" value=\"\" /> </CustOpts> </PidOptions>";
    //     //var InputXml = "<PidOptions> <Opts fCount=\"1\" fType=\"0\" iCount=\"0\" pCount=\"0\" format=\"0\" pidVer=\"2.0\" timeout=\"20000\" otp=\"\" posh=\"UNKNOWN\" env=\"P\" wadh=\"rhVuL7SnJi2W2UmsyukVqY7c93JWyL9O/kVKgdNMfv8=\" /><CustOpts> <Param name=\"ValidationKey\" value=\"\" /> <Demo></Demo></CustOpts> </PidOptions>";

    //     xhrw.onload = function () {
    //         let status = xhrw.status;
    //         alert("status" + status);
    //         if (status == 200) {
    //             callback(null, xhrw.response);
    //         } else {
    //             callback(status);
    //         }
    //     };
    //     xhrw.send(InputXml);
    // };


    // **************************Device initialization*********************************************
    function initializeDevice(roll_no, stu_id, stu_name) {

        setTest({ deviceName: document.getElementById("deviceName").value, biometricType: 'F', deviceType: 1, studentId: stu_id, pid: '' });

        if (document.getElementById("deviceName").value === "startek") {
            captureFPAuth_fm220();
        }

        else if (document.getElementById("deviceName").value === "secugen") {
            //alert('Secugen');
            captureFP_kedia();
        }
        else if (document.getElementById("deviceName").value === "ritech") {
            //alert('Secugen');
            captureiris_iritech();
        }
        // else if (document.getElementById("deviceName").value === "iritech-U"){
        //     //alert('iritech-U');
        //     captureiris_iritech_U();
        // }
    }

    return (

        <>
            <FormikProvider value={biometricFormik}>
                <Form onSubmit={biometricFormik.handleSubmit}>
                    <Field type="hidden" name="pid" id="pid" />
                    <Field type="hidden" name="studentId" id="studentId" />
                    <Field type="hidden" name="biometricType" id="biometricType" className="form-control" />

                    {/* *************************** Model popup code **************************************************/}
                    <Modal show={showModelPopUp} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header  >
                            <Modal.Title style={{ color: "#009999" }}>
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Student Details &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                <i className="fa fa-times-circle " aria-hidden="true" onClick={handleClose}></i>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col style={{ fontSize: '23px', textAlign: "center" }}>{showSelectStudent} </Col>
                            </Row>
                            <br />
                            {showImgLoading && (
                                <>
                                    <Row>
                                        <Col className="fa" style={{ fontSize: '25px', textAlign: "center" }}>Place your finger on the biometric device </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <center> <img src="files\images\fingerPrint.gif" alt='' width={"60%"} height={"60%"} /></center>
                                        </Col>
                                    </Row>
                                </>
                            )}
                            {showImg2Loading && (
                                <>
                                    <Row>
                                        <Col style={{ fontSize: '20px', textAlign: "center" }}>Remove your finger from the biometric device </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <center> <img src="files\images\loading.gif" alt='' width={"60%"} height={"60%"} /></center>
                                        </Col>
                                    </Row>
                                </>
                            )}
                            <br />
                            <Row>
                                <Col className="text-danger">
                                    <h5><center>{showAttendance}</center></h5>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>

                    <div className={`card studentblock ${props.data.marked === "Y" ? 'att-present' : 'att-default'}`} id={props.data.student_id}>
                        <li type="none"
                            style={{ height: '12vh', textAlign: 'center', fontSize: "1.5vmin", paddingTop: '10px' }}
                            key={props.data.roll_no}
                            onClick={(e) => {
                                if (props.data.marked === "N") {
                                    setSelectStudent(props.data.student_name + '(' + props.data.roll_no + ')');
                                    setAttendance('');
                                    setImgLoading(true);
                                    handleShow();

                                    initializeDevice(props.data.roll_no, props.data.student_id, props.data.student_name + '(' + props.data.roll_no + ')')
                                }
                                else {
                                    alert("Attendance already marked");
                                }
                            }}>
                            {props.data.roll_no}
                            <hr />
                            {props.data.student_name}
                        </li>

                    </div>
                    <Row>
                        <Col>
                            <button type="button" onClick={attendanceSubmit} id="submitbtn" display="none" visibility="hidden" style={{ border: "none" }}></button>
                        </Col>
                    </Row>
                </Form>
            </FormikProvider>
        </>
    )
}