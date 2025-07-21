 import { useState } from "react";

function Parent()
{
 const [intArr,setIntArr ]=useState([1,2,3,4,5,6,7,8]);
 const [even,setevenList ]=useState([]);
 const [odd,setoddList ]=useState([]);

    const evenNumberFilter=(value)=>  value%2==0 ;

    const oddNumberFilter=(value)=>value%2!=0;

        function evenFilter(value)
        {

            return value%2==0;
        }


        function oddFilter(value)
        {

            return value%2!=0;
        }
  
   function ShowEve()
   {

    setevenList(intArr.filter(evenNumberFilter)); 
   //alert("111");
   }

   function ShowOdd()
   {
    setoddList(intArr.filter(oddNumberFilter));
    //alert("2222");
   
   }

   return ( 
   
   <div>  {intArr.map( (a)=>  a+" ")  }
   <br></br>
   <br></br>
   <br></br>
 
  even : {even.map( (a)=> { return a +" "}  ) }
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   
  odd:  {odd.map((b)=> { return b+" " }   )  }
  <br></br>
  <br></br>
   <br></br>
   <br></br>
  
   <button onClick={ShowEve}> Show Even </button>
   <br></br>
   <br></br>
   <br></br>
 
   <button onClick={ShowOdd}> Show ODD </button>
   
   </div> 
   
   ) ;

}

export default Parent;