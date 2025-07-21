import axios from "axios";
import { useEffect, useState } from "react"

function StopTypes()
{

    const[stopTypesList,setStopTypesList ]=useState({});
    const[stopValue,setStopValue ]=useState('');
    const[subStopList,setsubStopList]=useState([]);
    
       
 useEffect(() => {
    axios.get("https://192.168.0.102:8451/master/pensions/stoptype").then
    (response => {
        // alert (JSON.stringify(response.data) );
        setStopTypesList(response.data);

 })

},[]);

useEffect(() => {
    //alert(stopValue);
        if(stopValue!=''){
           // alert(stopValue);

            setsubStopList(
                stopTypesList.StopTypeSubList.
                filter((stopSub)=> stopSub.stopId==stopValue));

        }

},[stopValue]);
    return (
        <> 

            

stopTypes :  <select name="stoptype" onChange={(event)=> setStopValue(event.target.value)  }>    <option value="">---select--</option>
                    {stopTypesList.StopTypeList!=undefined && 
                    stopTypesList.StopTypeList.map((stop)=>{

                        return <option value={stop.stopId}> {stop.stopName} </option>

                    } )


                    }
               </select> 
               <br></br><br></br>
               subTypes :<select name="subtypes">
        
                    <option value="">---select--</option>
                    {subStopList.length>0 && 
                    subStopList.map((subValue)=>{

                        return <option value={subValue.stopSubId}> 
                        {subValue.stopSubName} </option>

                    } )


                    }
                  </select>
        </>

    )



}

export default StopTypes;