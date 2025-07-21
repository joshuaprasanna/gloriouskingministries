import axios from "axios";
import { Field, Formik, formIk, FormikProvider } from "formik";
import { produceWithPatches } from "immer";
import { useEffect, useState } from "react"

function State(props)
{
     let formIk =props.value;

    const[States,setStates ]=useState([]);
   
    const[district,setDistrict]=useState([]);
    
       
 useEffect(() => {
    axios.get(
        
    "https://mocki.io/v1/c6c8509f-cab3-42a7-9366-76a22e05754a").then
    (response => {

        setStates(response.data);

 })

},[]);

useEffect(() => {
  
    formIk.setFieldValue("districts","");
   if(formIk.values.states!=''){
    setDistrict(
        States.Districts.
                filter((dist)=> dist.key==formIk.values.states));

        }
        
        

},[formIk.values.states]);
    return (
        <> 
     
            

{/* States :  < Field component="select" name="states" onChange={(event)=> setStopValue(event.target.value)  }>    <option value="">---select--</option>
                    {States.States!=undefined && 
                    States.States.map((stop)=>{

                        return <option value={stop.key}> {stop.name} </option>

                    } )


                    }
               </Field>  */}
States :
< Field component="select" name="states" key="states" >    <option value="" key="stateEmpty">---select--</option>
                    {States.States!=undefined && 
                    States.States.map((stop)=>{

                        return <option value={stop.key} key={stop.key}> {stop.name} </option>

                    } )


                    }
               </Field> 

               &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
               Districts :< Field component="select" name="districts" key="districts">
        
                    <option value="" key="districtsempty" >---select--</option>
                    {district.length>0 && 
                    district.map((subValue)=>{

                        return <option value={subValue.DistictId} key={subValue.DistictId}> 
                        {subValue.DistrictName} </option>

                    } )


                    }
                  </Field>
                  
                  
        </>

    )



}

export default State;