import axios from "axios";
import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Row } from 'react-bootstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';

function AxiosSample()
{
  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  }, {
    dataField: 'name',
    text: 'Product Name'
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];
  const [data,setData] =useState({});

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then(resp => {
//alert(resp.data);
setData(resp.data);
         console.log(resp.data);
    });
alert("111");
  },[]);

  function loadData()
  {
    axios.get('https://reqres.in/api/users').then(resp => {
//alert(resp.data);
setData(resp.data);
         console.log(resp.data);
    });

  }  

return (
<>
<h1> test</h1>
<BootstrapTable 
   keyField='id' data={ [{id:1,name:'test'},{id:1,name:'test1'}] } 
   columns={ columns } defaultSorted={ defaultSorted } />
<h1> test1</h1>

<table>
    <thead>
     <th>id </th> 
     <th>email</th>
     <th>FirstName</th>
     <th>LastName</th>
       <th>Photo</th>
    </thead>
    <tbody>
  {data.data!=undefined && data.data.map((emp )=>
  {
   return <tr><td>{emp.email} </td>  </tr> 
  }
  )}

    </tbody>
    </table>
    <button onClick={loadData}> test</button>
</>

)



}
export default AxiosSample;
