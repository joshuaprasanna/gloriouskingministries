import axios from "axios";
import { useEffect, useState } from "react"

function UserList()
{
    const [userList,setUserList]=useState({});
    const [value,setValue]=useState('');

    function loadDataFromServer()
    {
        axios.get("https://reqres.in/api/users").then(response => {
           // alert (JSON.stringify(response.data) );
            setUserList(response.data);

    })

    }
    
 useEffect(() => {
    loadDataFromServer();
 },[]);
      
 useEffect(() => {
   alert("called from useeffect ----------"+value);
 },[value]);
       

 


    return (
        <>
        <button onClick={loadDataFromServer}> Load Data </button>
       
        <table border="1"> 
        <thead>
        <th>Id</th><th>Email</th><th>FirstName</th><th>LastName</th> <th> Photo</th>
        </thead>
        <tbody>
        {userList.data!=undefined && userList.data.map( (user)=>{
               return <>
                <tr>
                <td>{user.id} </td>
                <td>{user.email} </td>
                <td>{user.first_name} </td>
                <td>{user.last_name} </td>
                <td><img src={user.avatar}></img>  </td>
                </tr>
               </> 

        }  )  }

        </tbody>


        </table>
        
        <input type="text" onChange={(event)=>{setValue(event.target.value)}  } ></input>

        </>

    )


}

export default UserList;