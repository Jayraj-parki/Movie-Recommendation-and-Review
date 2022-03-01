const initialState={}
const changeTheUserLog=(state=initialState,action)=>{
    switch(action.type){
        case "Login":
            state=action.payload
            return state;
        case "Logout":
            state=false
            return action.payload;
        default:
            return state;
    }
}
export default changeTheUserLog;