
const counterInitValues=
{

  counter :0  
}

export  function CounterReducer(state=counterInitValues,action)
{
    switch(action.type)
    {
       case 'INCREMENT':return {...state,counter:state.counter+1}; 
       case 'DECREEMT':return {...state,counter:state.counter-1}; 
        default: return state;

    }


}

