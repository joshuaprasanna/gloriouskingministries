import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import HelloWorld from './Test';
import TestArray from './NumberSample';
import JsonSample from './JSONEXample';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AxiosSample from './AxiosSample';
import DisplayValues from './DisplayNumberValues';
import DataTableSample from './DatatableSample';
import URLNOTFOUND from './samples/URLNotfound';

import UrlParamSample from './samples/UrlParamSample';
import SampleTesting from './samples/SampleTesting';
import UseNewParam from './samples/UseNewParam';
import FormikSample from './container/formikSample';
import Welcome from './Welcome';
import ErrorPage from './ErrorPage';
import UseParamSample from './UseParamsSample';
import UseNavigation from './UseNavigationTest';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
  <Provider store={}>
  <BrowserRouter>
  <Header></Header> 

   <Routes>
     <Route path="/" element={<Welcome></Welcome>}> </Route>
     <Route path="*" element={<ErrorPage></ErrorPage> }></Route>
     <Route path="/formikSample" element={<FormikSample></FormikSample>}></Route>
      <Route path="/urlParamSample/:id/:name" element={<UseParamSample></UseParamSample> }></Route>
      <Route path="/usenavigationTest" element={<UseNavigation></UseNavigation>}  ></Route>
     </Routes> 
<Footer></Footer>
  </BrowserRouter>
  </Provider>
 
  </React.StrictMode>
);


reportWebVitals();
