import { Tab, Tabs } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"
import FormikSample from "./components/FormikSample";

function UseParamSample()
{
    let navigate =useNavigate();
    let {id,name}=useParams();
    //let {id,name}=useParams();
function forward()
{
    navigate("/usenavigationTest",{state:{id:'1',name:'1111'}});
}

return <> <h1> Received Value From Params {id } {name} </h1>
    <button onClick={forward}> Forward To navigation </button>
    <br></br><br></br><br></br>
    <FormikSample></FormikSample>
   
 </>

}

export default UseParamSample;