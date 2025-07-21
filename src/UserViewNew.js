import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function UserViewNew(props)
{
                        const userState=useSelector(state=>state.userListState);
                            const dispatch=useDispatch();
                  //  const navigate=useNavigate();
                //let {id}=useParams();
                    let id=props.id;
        const [userInfo,setUserinfo]=useState({});

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/users/'+userState.id).then(resp => {
        //alert(resp.data);
        setUserinfo(resp.data);
                 console.log(resp.data);
            });
        //alert("111");
          },[userState.id]);

            function gotoUserList()
            {
                dispatch({type:"hideChild"} );
               // props.showFun();
                //navigate(-1);

            }

   return <>
              <button onClick={gotoUserList}> Back</button>  
          <div><span> ID </span> <span> {userInfo.id} </span>  </div>  
          <div><span> Name </span> <span> {userInfo.name} </span>  </div>  
          <div><span> Username </span> <span> {userInfo.username} </span>  </div>  
          <div><span> Email </span> <span> {userInfo.email} </span>  </div>  
   </> 


}
