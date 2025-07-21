import { Audio, BallTriangle } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

function Loader()
{
   const loader= useSelector(state=>state.loader);
                const displatch=useDispatch();

   function hideLoader()
   {
displatch({type:'HideSpinner'});

}

function showLoader()
{
displatch({type:'ShowSpinner'});

}

    return <> 
   {loader.showLoader==true &&  <BallTriangle
    height="500"
    width="500"
    color='green'
    ariaLabel='loading'
  
  />
   }

    Loader  {JSON.stringify(loader)} </>
}

export default Loader;