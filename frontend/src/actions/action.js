export const Login=(user)=>{
    return {type:"Login",payload:user}
}
export const Logout=()=>{
    return {type:"Logout",payload:{}}
}
