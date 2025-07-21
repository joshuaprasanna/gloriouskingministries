import { useLocation, useNavigate, useParams } from "react-router-dom";

function UrlParamSample()
{
    let history=useNavigate();
    let location=useLocation();
    let {id}=useParams();

    function test()
    {
        history("/");
    }

    return <> <h1> param Id {id}  {JSON.stringify(location.state) }  <button onClick={test}>push  </button>  </h1> </>


}

export default UrlParamSample;