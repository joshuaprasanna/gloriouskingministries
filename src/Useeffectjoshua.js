import { useEffect } from "react";
import { useState } from "react";

export function Useeffectuse()
{
   
    //const[name,setName] = useState("JOSHUA"); 
    const[count,setCount] = useState(0); 
    // const[counts,setCounts] = useState(0); 

    useEffect(() => console.log(count),[count])

return(

    <>
    <center>
        {/* <h1>{name}</h1> */}
        <h1>{count}</h1>
        {/* <h1>{counts}</h1> */}

    {/* <button onClick = { () => setName("HELLO") }>change</button> */}
    <button onClick = { () => setCount(count+1) }>count</button>
    {/* <button onClick = { () => setCounts(count-1) }>countsdec</button> */}

    </center>
    
    </>
)

}