// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

import { useState } from "react"

// function Joshua()
// {  

// const [ stoptypes,setStoptypes ]=useState({});
// const [ values,setValues ]=useState('');
// const [ subvalues,setsubValues ]=useState([]);

// useEffect(() => {
//     axios.get("https://192.168.0.102:8451/master/pensions/stoptype").then
//     (response => {
//         // alert (JSON.stringify(response.data) );
//         setStoptypes(response.data);
// })
// },[]);
// useEffect(() => {
//     // alert(stopValue);
//         if(values!=''){
//             // alert(stopValue);
//             setsubValues(
//                 stoptypes.StopTypeSubList.
//                 filter((stopSub)=> stopSub.stopId==values));

//         }
    

// },[values]);

//     return(
//         <>
//         stoptype:<select name="stoptype" onChange={(event)=>setValues(event.target.value) }>  <option value="">---select--</option>
//         {stoptypes.StopTypeList!=undefined && stoptypes.StopTypeList.map((stops)=>{
//                                 return <option value={stops.stopId}> {stops.stopName} </option> 
        
//     })
// }
// </select>
       

//         subtype:<select name="subtype" onChange={(event)=>setsubValues(event.target.value) }>  <option value="">---select--</option>
//         {subvalues.length>0 && 
//                     subvalues.map((subValue)=>{

//                         return <option value={subValue.stopSubId}> 
//                         {subValue.stopSubName} </option>

//                     } )
                    
//                 }
//                 </select>

//         </>

//     )
// }
// export default Joshua;




function Component(){
    const [Head]=useState([
        {
            name:"name",
            id:"id",
            branch:"branch",
            gender:"gender",

        }
    ]);
    const [Body]=useState([
        {
            name:"aruna",
            id:"12345",
            branch:"ece",
            gender:"female", 
        },
        {
        name:"kumar",
        id:"12346",
        branch:"eee",
        gender:"male",
        },
        {
            name:"prasu",
            id:"1232",
            branch:"cse",
            gender:"male",
            },

    ]);




    return(

<>
<table border="5">
{Head.map((ok) => {
          return (
            <>
              <tr><th> {ok.id} </th>
              <br></br>
               
                <th> {ok.name} </th>
                <br></br>
                
                
                <th> {ok.branch} </th>
                <br></br>
                
                <th> {ok.gender} </th>
              </tr>

              
            </>
          );
        })}
        {Body.map((Obj) => {
          return (
            <>
              <tr>
                <td> {Obj.id} </td>
                <br></br>
                <br></br>
                <td> {Obj.name} </td>
                <br></br>
                <br></br>
                <td> {Obj.branch} </td>
                <br></br>
                <br></br>
                <td> {Obj.gender} </td>
              </tr>
            </>
          );
        })}
</table>


</>

    )
}
export default Component;