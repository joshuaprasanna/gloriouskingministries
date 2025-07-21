import { useState } from "react";

function JsonSample()
{

    const[empList,setEmpList ] =useState(
            [
                   { name :'rajesh',id:123,salary:30000,gender:'M',city:'NLR'},
                   { name :'suresh',id:124,salary:20000,gender:'M',city:'VJA'},
                   { name :'satish',id:125,salary:1000000,gender:'M',city:'CTR'},
                   { name :'seetha',id:126,salary:300000,gender:'F',city:'OGL'},
                   { name :'Rohini',id:127,salary:60000,gender:'F',city:'GNT'},
                   { name :'Raman',id:129,salary:1000,gender:'M',city:'EG'} 

            ]


    );

    const[filterList,setFilterList ] =useState([] );

const filterByCity=(employeeObj) => employeeObj.city=='VJA' || employeeObj.city=='OGL';   
const filterByName=(employeeObj) => employeeObj.name.charAt(0)=='R';   
const filterbyGender=(employeeObj) =>employeeObj.gender=='F' && employeeObj.city=='OGL'; 

            function filterByCityFun()
            {

                setFilterList(empList.filter( filterByCity));
            }

            function filterByNameFun()
            {

                setFilterList(empList.filter( filterByName) );
            }

            function filterbyGenderFun()
            {
                setFilterList(empList.filter( filterbyGender) );
            }


    // city ongl Vijayawada
    
    // name starts with R
    // salary > 30000
    // male heighest salary 
    // female list

return (
    <> 
        {JSON.stringify(empList) }

        <button onClick={ filterByCityFun}> Filter By City</button>
      <br></br>
      <br></br>
      <button onClick={ filterByNameFun}> Filter By Name</button>
      
      <button onClick={ filterbyGenderFun}> Filter By Gender</button>
      

        <table border='1'>
            <tr><th>NAME</th> <th>ID </th> <th>Salary </th> <th>Gender</th> 
            <th>City </th>  </tr>
        {filterList.map( (empObj)=>
        {
        return <>
        <tr>
             <td> {empObj.name } </td> 
             <td> {empObj.id } </td> 
             <td> {empObj.salary } </td> 
             <td> {empObj.gender } </td> 
             <td> {empObj.city } </td> 
          
          </tr> 
          </>
        }



        )  
        }
</table>


     </>

)




}

export default JsonSample;
