import { useState } from 'react'
import './App.css'
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState(undefined)
  if(!user){
    return <AuthPage onAuth={(user)=>setUser(user)}/>;
  }
  else{
    return <Chatpage user={user}/>
  }
  return (
    <div className="app"></div>
  )
}

export default App
