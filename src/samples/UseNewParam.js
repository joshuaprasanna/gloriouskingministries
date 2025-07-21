import { useNavigate } from "react-router-dom";

function UseNewParam()
{
    const navigat=useNavigate();
function testing()
{
    navigat("/test/1",{ state: { id: 1, name: "sabaoon" } } );
}

return <> testing New  <button onClick={testing}> forward Link </button> </>

}

export default UseNewParam;