const spinnerIntialValues={
        spinnerValue:false
}

export function SpinnerrDisplayReducer(state=spinnerIntialValues,action )
{
    switch(action.type)
    {
        case 'SHOWSPINNER' : return {...state,spinnerValue:true};
        case 'HIDESPINNER' : return {...state,spinnerValue:false};
       default : return state;
    }


}
