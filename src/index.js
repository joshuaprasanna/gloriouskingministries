import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import TestArray from './NumberSample';
import JsonSample from './JSONEXample';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AxiosSample from './AxiosSample';
import DisplayValues from './DisplayNumberValues';
import DataTableSample from './DataTableSample';
import URLNOTFOUND from './samples/URLNotfound';

import UrlParamSample from './samples/UrlParamSample';
import SampleTesting from './samples/SampleTesting';
import UseNewParam from './samples/UseNewParam';

import Welcome from './Welcome';
import ErrorPage from './ErrorPage';
import UseParamSample from './UseParamsSample';
import UseNavigation from './UseNavigationTest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './reducers/CounterReducer';
import CounterComponent from './CounterComponent';
import { Spinner } from './Spinner';
import { SpinnerrDisplayReducer } from './reducers/spinnerReducer';
import axios from 'axios';
import ModalPopup from './ModalPopup';
import { ModalPopupReducer } from './reducers/modalPopupReducers';
import { SampleFormik } from './SampleFormik';
import { StepperForm } from './StepperForm';
import TabsForm from './wizardForm/TabsForm';
import { UsersListNew } from './UsersListNew';
import { UserViewNew } from './UserViewNew';
import { UserListReducer } from './reducers/userListReducer';
import { Joshuaformik } from './Joshuaform';
import { Register } from './RegistrationForm';
import { Joshuatabs } from './joshuawizard/joshuatabs';
import StopTypes from './StopTypes';
import Studentregistration from './Studentregistrationform';
import { studentPopupReducer } from './reducers/studentreducer';
import FormikSample from './components/FormikSample';
import { Reservation } from './Reservationform';
import { ReservationForm } from './doop';
import { Reserved } from './Reserveform2';
import Student from './insert';
import Reservationinsert from './reservationinsert';
import { Jnanabhumi } from './Container.js/headers';
import { Affliationhead } from './affliation/Aheader';
import { Socialwel } from './Asocialwelfare/socialwelfare';
import { Food } from './Foodcourt';
import Products from './product';
import NivasMaster from './Nivasform';
import { Emsform } from './Emsproject/Emsform';
import { Framermotion } from './Emsproject/Framermotion';
import { Emspopup } from './Emsproject/Emspopup';
import { Overseas } from './Overseas';
import { Useeffectuse } from './Useeffectjoshua';
import { Nivasform } from './Nivas/Nivasform';
import { Nivastabs } from './Nivas/Nivastabs';
import { Nivaspopup } from './Nivas/nivaspopup';
import { Nivas1 } from './Nivas/Nivas1';
import { NiasLatesttabs } from './Nivas/NivasLatesttabs';
import BiometricDailyAttendence from './Nivas/Biometricattendance';
import { Framermotionnivas } from './Nivas/Framermotionnivas';
import StudentBlock from './Nivas/Studentblock';
import { Reactjspractise } from './Reactpractisejoshua.js/Reactjspractise';
import { Annapurnascreen } from './Nivas/Annapurnascreen';
import { Dindex } from './deecet/deecet';
import { Backgroungvedio } from './Backgroungvedio';
import Uncontrolled from './Uncontrolledtemplate';
import { Apscfcindex } from './Apscfcindex';
import { Apscfctabs } from './Apscfctabs';
import { Practisepagesss } from './Practisepagesss';
import { NationalportalofIndia } from './NationalportalofIndia';
import { Lifegatechurchweb } from './Emsproject/Lifegatechurchweb';
import { Lifegatechurchweb1 } from './Emsproject/Lifegatechurchweb1';
import ReportCover from './Emsproject/Reportcover';
import Life2 from './Emsproject/Life2';
import MinistryTabs from './Emsproject/Designtab';
// import ChurchHome from './Church/ChurchHome';
// import ChurchAbout from './Church/ChurchAbout';
// import ChurchMinistries from './Church/ChurchMinistries';
// import ChurchEvents from './Church/ChurchEvents';
// import ChurchGallery from './Church/ChurchGallery';
// import ChurchSermons from './Church/ChurchSermons';
// import ChurchContact from './Church/ChurchContact';
// import ChurchUpload from './Church/ChurchUpload';
import ChurchStaticHome from './Church/ChurchStaticHome';
import ChurchStaticAbout from './Church/ChurchStaticAbout';
import ChurchStaticGallery from './Church/ChurchStaticGallery';
import ChurchStaticMinistries from './Church/ChurchStaticMinistries';
import ChurchStaticEvents from './Church/ChurchStaticEvents';
import ChurchStaticSermons from './Church/ChurchStaticSermons';
import ChurchStaticContact from './Church/ChurchStaticContact';

import ChurchHome from './ChurchDynamic/ChurchHome';
import ChurchAbout from './ChurchDynamic/ChurchAbout';
import ChurchMinistries from './ChurchDynamic/ChurchMinistries';
import ChurchEvents from './ChurchDynamic/ChurchEvents';
import ChurchGallery from './ChurchDynamic/ChurchGallery';
import ChurchSermons from './ChurchDynamic/ChurchSermons';
import ChurchContact from './ChurchDynamic/ChurchContact';
import ChurchUpload from './ChurchDynamic/ChurchUpload';
//import ChurchLogin from './ChurchDynamic/ChurchLogin'; // If login is ready

import ChurchGalleryPage from './ChurchDynamic/ChurchGalleryPage';
import AdminLogin from './ChurchDynamic/AdminLogin';

import AdminDashboard  from './ChurchDynamic/AdminDashboard';

import PrivateRoute from './utils/PrivateRoute';
import ProtectedRoute from './utils/ProtectedRoute';
import AdminUploadPanel from './ChurchDynamic/AdminUploadPanel';






// import { Studentpopupreducer } from 'src/studentpopupreducer';

//import from  './reducers/C';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store=configureStore(
 { 
  reducer:{
   counter:CounterReducer,
   spinner:SpinnerrDisplayReducer,
    modalState:ModalPopupReducer,
    modalState:studentPopupReducer,
     userListState:UserListReducer
  }

}

) 

axios.interceptors.request.use(
  (req) => {
     // Add configurations here
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
     // Add configurations here
      store.dispatch({ type:'SHOWSPINNER' });
      //alert("testing-----");
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
     return Promise.reject(err);
  }
);axios.interceptors.response.use(
  (res) => {
     // Add configurations here
     store.dispatch({ type:'HIDESPINNER' });
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
     return Promise.reject(err);
  }
);



root.render(
    <React.StrictMode>
    <Provider store={store}>  
  <BrowserRouter>
  <Header></Header> 
  <Spinner></Spinner>
   <Routes>
     <Route path="/" element={<Socialwel></Socialwel>}> </Route>
     <Route path="*" element={<ErrorPage></ErrorPage> }></Route>
     <Route path="/formikSample" element={<FormikSample></FormikSample>}></Route>
      <Route path="/urlParamSample/:id/:name" element={<UseParamSample></UseParamSample> }></Route>
      <Route path="/usenavigationTest" element={<UseNavigation></UseNavigation>}  ></Route>
      <Route path="/counterTest" element={<CounterComponent></CounterComponent>}  ></Route>
      <Route path="/datatable" element={<DataTableSample></DataTableSample>}  ></Route>
      <Route  path="/modalPopup"  element={<ModalPopup></ModalPopup>}></Route>
      <Route path="/SampleFormik" element={<SampleFormik></SampleFormik>}></Route>
      <Route path="/StepperForm" element={<StepperForm></StepperForm>}> </Route>
      <Route path="/tabs" element={<TabsForm></TabsForm>} ></Route>
      <Route path="/UsersListNew" element={<UsersListNew></UsersListNew>}></Route>
      <Route path="/UsersView/:id" element={<UserViewNew></UserViewNew>}></Route>
      <Route path="/joshua" element={<Joshuaformik></Joshuaformik>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/joshuatabs" element={<Joshuatabs></Joshuatabs>}></Route>
      <Route path="/stop" element={<StopTypes></StopTypes>}></Route>
      <Route path="/cool" element={<Studentregistration></Studentregistration>}></Route>
      <Route path="/reservation" element={<Reservation></Reservation>}></Route>
      <Route path="/reservationform" element={<ReservationForm></ReservationForm>}></Route>
      <Route path="/reserved" element={<Reserved></Reserved>}></Route>
      <Route path="/student" element={<Student></Student>}></Route>
      <Route path="/reserv" element={<Reservationinsert></Reservationinsert>}></Route>
      <Route path="/hello" element={<Jnanabhumi></Jnanabhumi>}></Route>
      <Route path="/affliate" element={<Affliationhead></Affliationhead>}></Route>
      <Route path="/social" element={<Socialwel></Socialwel>}></Route>
      <Route path="/foodapp" element={<Food></Food>}></Route>
      <Route path="/app" element={<Products></Products>}></Route>
      <Route path="/Bankform" element={<NivasMaster></NivasMaster>}></Route>
      <Route path="/Emsform" element={<Emsform></Emsform>}></Route>CourseServices
      <Route path="/framermotion" element={<Framermotion></Framermotion>}></Route>
      <Route path="/pop" element={<Emspopup></Emspopup>}></Route>
      <Route path="/Overseas" element={<Overseas></Overseas>}></Route>
      <Route path="/Useeffect" element={<Useeffectuse></Useeffectuse>}></Route>
      <Route path="/Nivasform" element={<Nivasform></Nivasform>}></Route>
      <Route path="/Nivaspopup" element={<Nivaspopup></Nivaspopup>}></Route>
      {/* <Route path="/js" element={<Slideshow></Slideshow>}></Route> */}
      <Route path="/Nivas1" element={<Nivas1></Nivas1>}></Route>
      <Route path="/NivasLatesttabs" element={<NiasLatesttabs></NiasLatesttabs>}></Route>
      <Route path="/Studentlist" element={<BiometricDailyAttendence></BiometricDailyAttendence>}></Route>
      <Route path="/framermotionnivas" element={<Framermotionnivas></Framermotionnivas>}></Route>
      <Route path="/studentblock" element={<StudentBlock></StudentBlock>}></Route>
      <Route path="/reactpractise" element={<Reactjspractise></Reactjspractise>}></Route>
      <Route path="/Annapurna" element={<Annapurnascreen></Annapurnascreen>}></Route>
      <Route path="/deecet" element={<Dindex></Dindex>}></Route>
      <Route path="/backgr" element={<Backgroungvedio></Backgroungvedio>}></Route>
      <Route path="/uncontrolled" element={<Uncontrolled></Uncontrolled>}></Route>
      <Route path="/Apscfcindex" element={<Apscfcindex></Apscfcindex>}></Route>
      <Route path="/apsfcstabs" element={<Apscfctabs></Apscfctabs>}></Route>
      <Route path="/practise" element={<Practisepagesss></Practisepagesss>}></Route>
      <Route path="/cool" element={<Studentregistration></Studentregistration>}></Route>

      <Route path="/hii" element={<NationalportalofIndia></NationalportalofIndia>}></Route>
      <Route path="/life" element={<Lifegatechurchweb></Lifegatechurchweb>}></Route>
      <Route path="/life1" element={<Lifegatechurchweb1></Lifegatechurchweb1>}></Route>
       <Route path="/report" element={<ReportCover></ReportCover>}></Route>
        <Route path="/li" element={<Life2></Life2>}></Route>
<Route path="/tab" element={<MinistryTabs></MinistryTabs>}></Route>

 

<Route path="/churchstatic" element={<ChurchStaticHome />} />
<Route path="/churchstatic/about" element={<ChurchStaticAbout />} />
<Route path="/churchstatic/gallery" element={<ChurchStaticGallery />} />
<Route path="/churchstatic/ministries" element={<ChurchStaticMinistries />} />
<Route path="/churchstatic/events" element={<ChurchStaticEvents />} />
<Route path="/churchstatic/sermons" element={<ChurchStaticSermons />} />
<Route path="/churchstatic/contact" element={<ChurchStaticContact />} />




 {/* <Route path="/glory" element={<Gloriousking></Gloriousking>}></Route>  */}
<Route path="/church" element={<ChurchHome />} />
<Route path="/church/about" element={<ChurchAbout />} />
<Route path="/church/ministries" element={<ChurchMinistries />} />
<Route path="/church/events" element={<ChurchEvents />} />
{/* <Route path="/church/gallery" element={<ChurchGallery />} /> */}
<Route path="/church/gallery" element={<ChurchGalleryPage />} />
<Route path="/church/sermons" element={<ChurchSermons />} />
<Route path="/church/contact" element={<ChurchContact />} />
 {/* <Route path="/admin/upload" element={<ChurchUpload />} />  */}
{/* <Route path="/admin/login" element={<ChurchLogin />} />  */}
      <Route
          path="/admin/upload"
          element={
            <ProtectedRoute>
              <AdminUploadPanel />
            </ProtectedRoute>
          }
        /> 
 <Route path="/admin/login" element={<AdminLogin />} />
     </Routes> 

    <ModalPopup></ModalPopup>
<Footer></Footer>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);


reportWebVitals();

