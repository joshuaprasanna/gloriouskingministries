const userListInitValues=
{
    id:'',
    usersList:[],
    showChild:false
}

export  function UserListReducer(state=userListInitValues,action)
{
    switch(action.type)
    {
       case 'UPDATEUSERLIST':return {...state,usersList:action.userList}; 
       case 'showChild':return {...state,showChild:true}; 
       case 'hideChild':return {...state,showChild:false};
       case 'UPDATEID': return {...state,id:action.id};
        default: return state;

    }


}
