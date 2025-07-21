import { useLocation } from "react-router-dom";

function UseNavigation()
{
    let location=useLocation();
    let {state}=location;

return <> <h1> Testing navigation {JSON.stringify(state) }  </h1> </>

}

export default UseNavigation;