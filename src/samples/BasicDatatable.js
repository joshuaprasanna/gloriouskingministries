import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function BasicDatatable()
{

    const { SearchBar, ClearSearchButton } = Search;

    const [data,setData] =useState([]);

    const columns = [{
        dataField: 'id',
        text: 'Id'
        
      }, {
        dataField: 'email',
        text: 'Email',
        sort: true
      }, {
        dataField: 'first_name',
        text: 'First Name',
        sort: true
      }];

     
      useEffect(() => {
        axios.get('https://reqres.in/api/users').then(resp => {
    //alert(resp.data);
    setData(resp.data.data);
             console.log(resp.data.data);
        });
    
      },[]);



  return (
      <>
<ToolkitProvider
  keyField="id"
  data={ data }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

      </>
  )  


}

export default BasicDatatable;