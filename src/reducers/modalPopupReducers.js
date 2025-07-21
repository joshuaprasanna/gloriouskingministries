const moalPopupInitialVaues={
    showModal:false,
      formik:{},  
    modalData:{
        modalHeading:'',
        body:[],
        fieldValue:''
    }
    
}

export function  ModalPopupReducer( state=moalPopupInitialVaues,action)
{
    switch(action.type)
    {
        case 'SHOWPOPUP' : return {  ...state, showModal:true };
        case 'HIDEPOPUP'   :return {  ...state, showModal:false };
        case 'UPDATEMODALDATA':return {  ...state, modalData:action.payload };
        case "UPDATEFORMIK" :return {  ...state, formik:action.payload };
        default :return state
    }

    


}
