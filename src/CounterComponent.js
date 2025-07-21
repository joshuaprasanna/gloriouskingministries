import { useDispatch, useSelector } from "react-redux"

function CounterComponent()
{
     const selector =   useSelector(state=>state.counter );
          const dispatch=useDispatch();

        function increment()
        {
            dispatch( {type: 'INCREMENT' }  ) ;
        }
        function decrement()
        {
            dispatch( {type: 'DECREEMT' }  ) ;
        }
        


   return <> Counter { JSON.stringify(selector) } 
    
    <button  onClick={increment} >increment</button>
    <button  onClick={decrement} >decrement</button>
   </> 

} 

export default CounterComponent;