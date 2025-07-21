import { BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

export function Spinner()
{
  
    const selector= useSelector(state=>state.spinner);
                    const dispatch=useDispatch( );


function show()
{
    dispatch({ type:'SHOWSPINNER' });
}


return <>
{ selector.spinnerValue &&
 <BallTriangle  height="100"
width="100"
color='red'
ariaLabel='loading' ></BallTriangle>  
}
    {/* <button onClick={show} > SHOW</button> */}
</>  
}