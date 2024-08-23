import React from 'react'
import axios from 'axios'
const AuthPage = (props) => {
    const onSubmit=(e)=>{
        e.preventDefault();
        const {value}=e.target[0];[]
        axios.post('http://localhost:3001/authenticate',
        {username:value})
        .then(r=>props.onAuth({...r.data,secret:value}))
        .catch(e=>console.log("error",e))
    }
  return (
    <div>AuthPage</div>
  )
}

export default AuthPage