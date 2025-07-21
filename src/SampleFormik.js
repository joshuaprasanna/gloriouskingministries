import { Field, FormikProvider, useFormik } from "formik"
import { useEffect } from "react";
import { useDispatch } from "react-redux"

export function SampleFormik()
{

    const dispatch= useDispatch();

         const formIk=   useFormik( {
                    initialValues:{ district:'',mandal:'',village:''},
                    onSubmit: values=>
                    alert(values)
            })

function showDistrctsList(){
    dispatch({ type:'SHOWPOPUP' });
    dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'testing distrct',
    body:[{ displayText:'NLR'},{displayText:'VJA'}],fieldValue:'district' }  } );

}

function showMandals(){
    dispatch({ type:'SHOWPOPUP' });
    dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'testing Mandal',
    body:[{ displayText:'VJA MAndal'},{displayText:'Nuzivedu Mandal'}],fieldValue:'mandal' }  } );


}
function showVillages(){
    dispatch({ type:'SHOWPOPUP' });
    dispatch({ type:'UPDATEMODALDATA',payload:{'modalHeading':'testing Village',
    body:[{ displayText:'Guntupalli Village'},{displayText:'IBM Village'}],fieldValue:'village' }  } );


}
useEffect(() => {
      
    dispatch({ type:'UPDATEFORMIK',payload:{formik:formIk }} );
},[]);

    
    return <>
        <FormikProvider value={formIk}>
        <form>
            Distrct: <Field type="input" name="district" onClick={showDistrctsList} ></Field>
            mandal: <Field type="input" name="mandal" onClick={showMandals} ></Field>
            village: <Field type="input" name="village" onClick={showVillages} ></Field>
        </form>
</FormikProvider>
    </>


}
