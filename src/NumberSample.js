import { useState } from "react";
import DisplayValues from "./DisplayNumberValues";

function TestArray()
{
  const [arrray,setAAArray] =useState( [1,2,3,4,5,6,7,8,9,10] );
   const [evenArray,setEvenArray] =useState( [] );
   const [oddArray,setoddArray] =useState( [] );
   const evenNumberFilter=(value)=> value%2===0;

        function oddFilter( value)
        {

            return  value%2!=0;
        }

        


    function filterEven()
    {
       setEvenArray( arrray.filter(evenNumberFilter ) );

    }

    function filterOdd()
    {
       setoddArray( arrray.filter( oddFilter) );

    }

    function parentFunction(value)
{
    alert(value);

}

    return (
        <>

<button onClick={filterEven}> Filter Even  </button>
<br></br>
        <br></br>
        
<button onClick={filterOdd}> Filter ODD  </button>
        <br></br>
        <br></br>

        <DisplayValues heading={"Actal List"} list={arrray} parentFun={parentFunction} ></DisplayValues>
       
        <DisplayValues heading={"Even List"} list={evenArray}  parentFun={parentFunction}></DisplayValues>
    
        <DisplayValues heading={"odd List"} list={oddArray}  parentFun={parentFunction}></DisplayValues>


            {/* actual Array : <ul> {arrray.map( (value) => { return  <li> {value} </li>  }  ) } 
            </ul>
            <br></br>

            MAP wITH Array : <ul> {arrray.filter((value)=> value >4  ).map( (value) => { return  <li> {value} </li>  }  ) } 
            </ul>
            <br></br>



            <button onClick={filterEven}> Filter Even  </button>
        even List : {evenArray}
        <br></br>
        <br></br>
        <button onClick={filterOdd}> Filter ODD  </button>
        <br></br>
        <br></br>
        odd  Lst : {oddArray} */}

        </>


    )






}

export default TestArray;