import axios from "axios";
import { forwardRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserViewNew } from "./UserViewNew";

export function UsersListNew()
{
            const navigate=useNavigate();
        const state= useSelector(state=>state.userListState);
                const dispatch=useDispatch();
  //  const [userList,setUserList]=useState([]);
    //const [id,setId]=useState('');
    //const [show,setShow]=useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
    //alert(resp.data);
    //setUserList(resp.data);
      //       console.log(resp.data);

      dispatch({type:"UPDATEUSERLIST",userList:resp.data} );
        });
    //alert("111");
      },[]);

      function forwardtoView(id)
        {
            dispatch({type:"UPDATEID",id:id} );
            dispatch({type:"showChild"} );
            //navigate("/UsersView/"+id);
           // setId(id);
          //  setShow(true);
          //  alert(id);

        }
function showFun()
{
   // setShow(false);
}

return<>
   -----------------------{state.id  }
    { !state.showChild && <table>
    <thead> <tr><th>ID </th> <th>NAME </th> <th>USERNAME </th> 
    <th>Email </th>
      <th>View </th>
     </tr> </thead>

    <tbody>
        {state.usersList!=undefined && state.usersList.map( (user)=>{
           return <tr> <td>{user.id} </td><td>{user.name} </td> 
           <td>{user.username} </td><td>{user.email} </td>
            <td > <buton type="button" onClick={()=> forwardtoView(user.id) }>View</buton>   </td>
           </tr> 

        } )

        } 

    </tbody>
    </table> }

        {state.showChild && <UserViewNew  ></UserViewNew>   } 

    </>


}