import axios from "axios";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik"
import { React, useEffect, useState } from "react";
import { Card, Col, FormGroup, Row } from "react-bootstrap";
import * as Yup from "yup";


/**
 * 
 * @copyright APCFSS, Amaravati
 * 
 */

export default function NivasMaster()
{   const AadharValidation = /^[2-9]{1}[0-9]{11}$/;
    const mobileValidation = /^[6-9]{1}[0-9]{9}$/;
    const pincodeValidation = /^[1-9]{1}[0-9]{5}$/;
    const ifscValidation = /^[A-Z]{4}0[A-Z 0-9]{6}$/;

    const Validation = Yup.object().shape(
        {
             orphan:Yup.string().required(" Please Select Student Belongs to Orphan or not"),
            aadhar:Yup.string().required(" Please enter your aadhar number")
            .matches(AadharValidation," Invalid aadhar number"),

            studentName:Yup.string().required(" Please Enter Name"),

            gender:Yup.string().required(" Please Select Gender"),

            dob:Yup.string().required(" Please Select Date Of Birth"),

            bloodGroup:Yup.string().required(" Please Select Blood Group"),

            religion:Yup.string().required(" Please Select Religion"),

            caste:Yup.string().required(" Please Select Caste"),

            subCaste:Yup.string().required(" Please Select Sub Caste"),

            mobile:Yup.string().required(" Please Enter Mobile No.")
            .matches(mobileValidation, " Please Enter valid Mobile number"),

            phNumRelation:Yup.string().required(" Please Select Mobile No. Relation"),

            rationNumber:Yup.string().required(" Please Enter Ration Card No."),

            casteNo:Yup.string().required(" Please enter caste certificate number"),

            incomeCertNo:Yup.string().required(" Please enter income certificate number"),

            distCode:Yup.string().required(" Please Select District"),

            mandaLcode:Yup.string().required(" Please Select Mandal"),

            villageCode:Yup.string().required(" Please Select Village"),

            habitationCode:Yup.string().required(" Please Select Habitation"),

            street:Yup.string().required(" Please Enter Street"),

            locality:Yup.string().required(" Please Enter Locality"),

            pincode:Yup.string().required(" Please Enter Pincode").matches(pincodeValidation," Invalid pincode"),

            handicapped:Yup.string().required(" Please Select yes or no"),

            bankIfscCode:Yup.string().required(" Please Enter IFSC Code")
            .matches(ifscValidation,"Invalid IFSC Code"),

            bankAcNo:Yup.string().required(" Please Enter Bank Acc No."),

            confirmBankAcNo:Yup.string().required(" Please Enter Bank Acc No.").oneOf([Yup.ref("bankAcNo"), null], "Account Number doesn't match."),

            joiningDate:Yup.string().required(" Please Enter Joining Date"),

            distance:Yup.string().required(" Please Enter Distance"),

            presClass:Yup.string().required(" Please Select Class"),

            section:Yup.string().required(" Please Select Section"),

            rollNo:Yup.string().required(" Please Enter Roll No."),


            sadaremNumber:Yup.string().when('handicapped',{
            is:(handicapped)=>handicapped === 'yes'  ? true : false,
            then:Yup.string().required(" Please enter sadaram number"),
            otherwise:Yup.string().notRequired()    }),
        });

        // ********************post Api for save*****************************

  const submitDetailsFunction = async (values) => {

    try {
      const req = values;
      alert(JSON.stringify(req));
      const res = await axios.post(
        "http://10.10.0.39:8310/jnbnivas/nivasstudetails/insert",req
      );

      alert(JSON.stringify(res.data));

      console.log("Responce Message at post function =>>>",res.data);

      
      
    } catch (e) {
      
      console.log("exception at catch block ===>" + e);
    }
  };


    
    const formIk = useFormik(
        {
            initialValues:{
                orphan:'',
                aadhar:'',
                studentName:'',
                gender:'',
                dob:'',
                bloodGroup:'',
                religion:'',
                caste:'',
                subCaste:'',
                mobile:'',
                phNumRelation:'',
                rationNumber:'',
                casteNo:'',
                incomeCertNo:'',
                distCode:'',
                mandaLcode:'',
                villageCode:'',
                habitationCode:'',
                street:'',
                locality:'',
                pincode:'',
                handicapped:'',
                sadaremNumber:'',
                bankIfscCode:'',
                bankAcNo:'',
                bankDetails:'',
                confirmBankAcNo:'',
                joiningDate:'',
                distance:'',
                presClass:'',
                section:'',
                rollNo:''
            },
        
            validationSchema:Validation,
        onSubmit:submitDetailsFunction
        
        

        }
    
    );

    // Clear Data Functions here 

    function ClearSadaremFunction()
    {
        formIk.setFieldValue("sadaremNumber","");
    };

    function clearCasteFun()
    {
        formIk.setFieldValue("caste","");
    }

    function clearSubCasteFun()
    {
        formIk.setFieldValue("subCaste","");
    }

    function clearMandalsFunc()
    {
      formIk.setFieldValue("mandaLcode","");
    }

    function clearVillagesFunc()
    {
      formIk.setFieldValue("villageCode","");
    }

    function clearHabsFunc()
    {
      formIk.setFieldValue("habitationCode","");
    }



    // Caste Filter code here // ************************************************************

    const [showApiData,setApiData] = useState({});
    const [showRelValue,setRelValue] = useState('');
    const [showCasteList,setCasteList] = useState([]);
    const [showCasteCode,setCasteCode] = useState('');
    const [showSubCasteList,setSubCasteList] = useState([]);

    // primary API data here
    useEffect(() => {
    axios.get("http://10.10.0.39:8310/jnbnivas/castesubcaste").then
        (response => {
            setApiData(response.data);
        })
    
    },[]);


    // Filtering castes from primary api based on religion value taken from religion field
    useEffect(() => {
        if(showRelValue!==''){
            setCasteList(showApiData.APCFSS_Castes.filter((relVal)=> relVal.religion===showRelValue)); 
            }
    
    },[showRelValue]);

    // Filtering sub castes from primary api based on caste code value taken from caste field
    useEffect(() => {
        if(showCasteCode!==''){
            setSubCasteList(showApiData.APCFSS_SubCastes.filter((CasteCodeVal)=> CasteCodeVal.casteCode == showCasteCode));
            }
    
    },[showCasteCode]);




    // Address Filter Code Here (District, Mandal, Village, Habitation)// ************************************************************

    const [showDistManApi,setDistManApi] = useState({});
    const [showDistCode,setDistCode] = useState('');
    const [showManList,setManList] = useState([]);

    const [showMandalCode,setMandalCode] = useState('');
    const [showVillApi,setVillApi] = useState([]);
    const [showHabApi,setHabApi] = useState([]);


  // Districts and Mandals will be loaded here
    useEffect(
      () => {
        axios.get("http://10.10.0.39:8310/jnbnivas/apdistman").then( response => {
          setDistManApi(response.data);

        })
      },[]
    );

  // Mandals will be filtered based on distcode from previous input
    useEffect(
      () => {
        if(showDistCode !== '')
        {
          setManList(showDistManApi.APCFSS_Mandals.filter((dVal) => dVal.distCode == showDistCode));
        }
      },[showDistCode]
    );

  
  // Villages API will be loaded here and it needs inputs of distcode and mandalcode from previous inputs
    const getVillageDataFunction = async(e) => 
    {
      setMandalCode(e.target.value);
      let villUrl = ("http://10.10.0.39:8310/jnbnivas/villages/?distCode="+showDistCode+"&&mandalCode="+e.target.value);
      
      try{
        await axios.get(villUrl).then( response => {
        setVillApi(response.data);
      })

      }
      catch(exception)
      {
        console.log("exception ::::::::"+exception);
      }
    }

  // Habitations API will be loaded here and it needs inputs of distcode and mandalcode from previous inputs
   const getHabitationsFunc = async(e) => {
    let habUrl = ("http://10.10.0.39:8310/jnbnivas/aphabitations/?distCode="+showDistCode+"&mandalCode="+showMandalCode);
    try{
      const response1 = await axios.get(habUrl);
      setHabApi(response1.data);
    }
    catch(exception)
    {
      console.log("hab exception::: "+exception);
    }
   }


  //Bank Details API will be loaded here and it needs input as ifsccode which will come from previous input
   const [showBankDetails,setBankDetails] = useState([]);

   function getBanksFunction(e)
   {
    let banksUrl = ("http://10.10.0.39:8310/jnbnivas/rbibanks/?ifscCode="+e.target.value);
    axios.get(banksUrl).then((response) => {
      setBankDetails(response.data[0].bankName)
    })
   }

   function fieldSetFunc()
   {
    formIk.setFieldValue("bankDetails",showBankDetails)
   }

   useEffect(
    () => {
      fieldSetFunc();
    },[showBankDetails]
  );

  


    return(
        <>
        <FormikProvider value={formIk}>
            <form onSubmit={formIk.handleSubmit}>

        {/* ******************main form headding here****************** */}

        <Row>
           <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
              <Card>
                <Card.Body className="card-block">
                   <div className="panel panel-info_m_t">
                      <div className="panel-heading blue_bg">
                        <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                            STUDENT REGISTRATION FORM
                       </div>
                   
                      <Card.Body className="panel-body">

                        {/* ******************PersonalDetails here****************** */}
                        <div className="panel panel-info_m_b">
           <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Personal Details <span id="declare"></span>
            </div>
            
            <Card.Body className="panel-body">
                <Row>
                            
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Student Belongs To Orphan?</label>&nbsp;
                          <Field as="select" name="orphan" className="form-control">
                             <option value="">----Select-----</option>
                             <option value="yes">Yes</option>
                             <option value="no">No</option>
                         </Field>
                         <ErrorMessage name="orphan" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Student Name</label>&nbsp;
                          <Field type="text" name="studentName" className="form-control"/>
                          <ErrorMessage name="studentName" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Gender</label>&nbsp;
                          <div className="form-control">
                             <Field type='radio' name='gender' value='male' /> Male &nbsp;
                             <Field type='radio' name='gender' value='female' /> Female &nbsp;
                          </div>
                          <ErrorMessage name="gender" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                     <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > DOB </label>&nbsp;
                          <Field type="date" name="dob" className="form-control"/>
                          <ErrorMessage name="dob" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                     </Col> 
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Select Blood Group </label>&nbsp;
                          <Field as="select" name="bloodGroup" className="form-control">
                            <option value=''>--Select--</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                            <option value="NOT KNOWN">NOT KNOWN</option> 
                          </Field>
                          <ErrorMessage name="bloodGroup" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Religion </label>&nbsp;
                          <Field as="select" name="religion" className="form-control" 

                        onBlur={(event)=> {setRelValue(event.target.value);} }

                        onClick={() => {clearCasteFun();clearSubCasteFun();}}
                        
                          >
                            <option value="">----Select-----</option>
                            <option value="H">Hindhu</option>
                            <option value="C">Christian</option>
                            <option value="M">Muslim</option>
                            <option value="S">Sikh</option>
                            <option value="J">Jain</option>
                            <option value="P">Parsi</option>
                            <option value="B">Buddhists</option>
                          </Field>
                          <ErrorMessage name="religion" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Caste </label>&nbsp;
                          <Field as="select" name="caste" className="form-control"
                          onBlur={(event)=> setCasteCode(event.target.value) }
                          onClick={() => {clearSubCasteFun();}}
                          >
                            <option value="">----Select-----</option>

                            
                            {showCasteList!==undefined && 
                            showCasteList.map((cs,i)=>{

                            return <option key={i}  value={cs.casteCode}> {cs.casteDesc} </option>

                                } )
                            }

                          </Field>
                          <ErrorMessage name="caste" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > SubCaste </label>&nbsp;
                          <Field as="select" name="subCaste" className="form-control">
                            <option value="">----Select-----</option>

                            {showSubCasteList!==undefined && 
                            showSubCasteList.map((scs,i)=>{

                            return <option key={i} value={scs.subCasteCode}> {scs.subCasteDesc} </option>

                                } )
                            }


                          </Field>
                          <ErrorMessage name="subCaste" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Mobile No</label>&nbsp;
                          <Field type="text" name="mobile" className="form-control" maxLength="10"/>
                          <ErrorMessage name="mobile" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Select Phone No Holder Relation </label>&nbsp;
                          <Field as="select" name="phNumRelation" className="form-control">
                            <option value="0">----Select-----</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Myself">Myself</option>
                            <option value="Relatives">Relatives</option>
                            <option value="Guardian">Guardian</option>

                          </Field>
                          <ErrorMessage name="phNumRelation" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Ration No </label>&nbsp;
                          <Field type="text" name="rationNumber" className="form-control"/>
                          <ErrorMessage name="rationNumber" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star" > Aadhar No </label>&nbsp;
                          <Field type="text" name="aadhar" className="form-control" maxLength="12"/>
                          <ErrorMessage name="aadhar" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Card.Body>
         </div>
        {/* ********************Certificate Details************************** */}

        <div className="panel panel-info_m_b">
            <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Certificate Details <span id="declare"></span>
            </div>
            <Card.Body className="panel-body">
                <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2}></Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Caste Certificate Number</label>&nbsp;
                          <Field type="text" name="casteNo" className="form-control"/>
                          <ErrorMessage name="casteNo" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Income Certificate Number</label>&nbsp;
                          <Field type="text" name="incomeCertNo" className="form-control"/>
                          <ErrorMessage name="incomeCertNo" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Card.Body>
         </div>
        {/* ********************************************Address Of Parent************************  */}

        <div className="panel panel-info_m_b">
            <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Address Of Parent/Guardian Of The Student <span id="declare"></span>
            </div>
            <Card.Body className="panel-body">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">District</label>&nbsp;
                          <Field as="select" name="distCode" className="form-control"
                          onBlur={(event) => {setDistCode(event.target.value)}}
                          onClick={() => {clearMandalsFunc(); clearVillagesFunc(); clearHabsFunc();}}
                          >
                            <option value="">----Select-----</option>

                            {showDistManApi.APCFSS_Districts !== undefined && 
                             showDistManApi.APCFSS_Districts.map((ds,i) => {
                              return <option key={i} value={ds.distCode}> {ds.distName} </option>
                             })
                            }

                          </Field>
                          <ErrorMessage name="distCode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Mandal/Municipality</label>&nbsp;
                          <Field as="select" name="mandaLcode" className="form-control"
                           onBlur={(event) => {getVillageDataFunction(event);}}
                           onClick={() => {clearVillagesFunc(); clearHabsFunc();}}
                          >
                            <option value="">----Select-----</option>
                            {showManList !== undefined &&
                             showManList.map( (ms,i) => {
                              return <option key={i} value={ms.mandalCode}> {ms.mandalName} </option>
                             })
                            }
                          </Field>
                          <ErrorMessage name="mandaLcode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Village/Ward</label>&nbsp;
                          <Field as="select" name="villageCode" className="form-control"
                          onBlur={getHabitationsFunc}
                          >
                            <option value="">----Select-----</option>
                            {showVillApi !== undefined &&
                             showVillApi.map((vs,i) => {
                              return <option key={i} value={vs.villageCode}> {vs.villageName} </option>
                             })}
                          </Field>
                          <ErrorMessage name="villageCode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Habitation</label>&nbsp;
                          <Field as="select" name="habitationCode" className="form-control">
                            <option value="">----Select-----</option>
                            { showHabApi !== undefined &&
                              showHabApi.map((hs,i) => {
                                return <option key={i} value={hs.habitationCode}> {hs.habitation} </option>
                              }) }
                          </Field>
                          <ErrorMessage name="habitationCode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                            <label className="control-label star">Street</label>&nbsp;
                            <Field type="text" name="street" className="form-control"/>
                            <ErrorMessage name="street" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                            <label className="control-label star">Locality</label>&nbsp;
                            <Field type="text" name="locality" className="form-control"/>
                            <ErrorMessage name="locality" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                    <FormGroup className="form-group">
                      <label className="control-label star">Pincode</label>&nbsp;
                      <Field type="text" name="pincode" className="form-control"/>
                      <ErrorMessage name="pincode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                    </FormGroup>
                  </Col>
                </Row>
            </Card.Body>
        </div>

        {/* *********************** Physically Handicapped ********************* */}

        <div className="panel panel-info_m_b">
           <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Physically Handicapped <span id="declare"></span>
            </div>
            <Card.Body className="panel-body">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Is the student physically handicapped?</label>&nbsp;
                          <Field type='radio' name='handicapped' value='yes'  /> &nbsp; Yes &nbsp;&nbsp;
                            <Field type='radio' name='handicapped' value='no' onClick={ClearSadaremFunction} /> &nbsp; No
                          <ErrorMessage name="handicapped" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>

                    
                      
                    {formIk.values.handicapped==='yes' &&
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Sadaram No</label>&nbsp;
                          <Field type="text" name='sadaremNumber' className="form-control"/>
                          <ErrorMessage name="sadaremNumber" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    }
                    
                </Row>
            </Card.Body>
       </div>

            {/* ****************************bank Details************************* */}

            <div className="panel panel-info_m_b">
        <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Bank Details <span id="declare"></span>
            </div>
            <Card.Body className="panel-body">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Bank IFSC code</label>&nbsp;
                          <Field type="text" id="bankIfscCode" name="bankIfscCode" className="form-control"
                           onBlur={(event) => {getBanksFunction(event);fieldSetFunc();}}
                           />
                          <ErrorMessage name="bankIfscCode" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                   

                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Bank Details</label>&nbsp;
                          <Field type="text" name="bankDetails" className="form-control" readOnly="readonly" />
                         <ErrorMessage name="bankDetails" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Bank Account No</label>&nbsp;
                          <Field type="text" name="bankAcNo" className="form-control"/>
                          <ErrorMessage name="bankAcNo" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Confirm Bank Account No</label>&nbsp;
                          <Field type="text" name="confirmBankAcNo" className="form-control"/>
                          <ErrorMessage name="confirmBankAcNo" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Card.Body>
        </div>
             {/* **************************AdmissionDetails************************* */}
            
             <div className="panel panel-info_m_b">
        <div className="panel-heading blue_hash">
               <i className="fa fa-id-card"  aria-hidden="true"></i>
                    &nbsp; Admission Details <span id="declare"></span>
            </div>
            <Card.Body className="panel-body">
                <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Date Of Joining</label>&nbsp;
                          <Field type="date" name="joiningDate" className="form-control"/>
                          <ErrorMessage name="joiningDate" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Distance From Residence</label>&nbsp;
                          <Field type="text" name="distance" className="form-control"/>
                          <ErrorMessage name="distance" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Class</label>&nbsp;
                          <Field as="select" name="presClass"  className="form-control">
                            <option value="">----Select-----</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                             <option value="11">11</option>
                             <option value="12">12</option>
                          </Field>
                          <ErrorMessage name="presClass" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Section</label>&nbsp;
                          <Field as="select" name="section"  className="form-control">
                            <option value="">----Select-----</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </Field>
                          <ErrorMessage name="section" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}>
                        <FormGroup className="form-group">
                          <label className="control-label star">Roll No</label>&nbsp;
                          <Field type="text" name="rollNo" className="form-control"/>
                          <ErrorMessage name="rollNo" component="div" 
                            className="fa fa-exclamation-triangle text-danger"/>
                        </FormGroup>
                    </Col>
                </Row>
            </Card.Body>
        </div>


                        <br/>

                        <Row>
                          <Col>
                            <button type="submit" className="btn btn-success pull-right" >&nbsp;&nbsp;&nbsp;&nbsp;Preview Form&nbsp;&nbsp;&nbsp;&nbsp;</button>
                           </Col>
                        
                        </Row>

                      </Card.Body>

                    </div>
                      
                </Card.Body>   

                    
              </Card>
            </Col>
        </Row>

            </form>
        </FormikProvider>
        </>
    )
}