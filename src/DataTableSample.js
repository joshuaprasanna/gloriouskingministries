import axios from 'axios';
import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
function DataTableSample()
{

    const[userList,setUserList]=useState([]);

    
 
function teastt(cell, row) {
    
  
    return (
      <span>$ { cell } <a href='https://google.co.in'> Google </a> {JSON.stringify(row) } </span>
    );
  }

const columns=[{
    dataField: 'id',
    text: 'Id'
  }, {
    dataField: 'userId',
    text: 'User Id',
    sort: true,
    formatter: teastt
  }, {
    dataField: 'title',
    text: 'To do title',
    sort: true
  },

  {
    dataField: 'completed',
    text: 'Completed'
  },

];

    useEffect(() => {
      
        axios.get("https://jsonplaceholder.typicode.com/todos").then
        (response => {
            // alert (JSON.stringify(response.data) );
            setUserList(response.data);
    
     })
    
    },[]);
    


return (
<>
<BootstrapTable bootstrap4 keyField='id' data={ userList } columns={ columns } pagination={ paginationFactory() } />
</>

)



}

export default DataTableSample;