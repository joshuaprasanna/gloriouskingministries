import { useState } from "react";

function DisplayValues( props )
{

    const [value,setValue] =useState('');


    function teatInput(event)
    {
        setValue(event.target.value);
//alert(event.target.value);

    }

    function test()
    {
        props.parentFun(value);

    }

    return (
        <>
        <h1> {props.heading} </h1>
        

        { (props.list.length>0) ? props.list.map( (value)=><li> {value} </li>) :'No List' 

        }

           <input type="text" name="test" onChange={teatInput}></input> 

        <button onClick={test}> call parent </button>

        </>

    )


}

export default DisplayValues;
