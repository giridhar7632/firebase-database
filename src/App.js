import React, { useState } from 'react'
import './App.css'
import fireBase from './Firebase'

/*function useInput(initialValue){
   const [value,setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

   return [value,handleChange];
}
*/
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleSubmit(e) {
    console.log(name, email)
    let messageRef = fireBase.database().ref('messages')
    messageRef.push([name, email])
    setName("")
    setEmail("")
    e.preventDefault()
  }

  return (
      <form>
      <h1> Form </h1>
        <label type="Name:">
          <input type="text" value={name} onChange={handleName} placeholder="Your Name"/>
        </label>
        <label type="Email:">
          <input type="email" value={email} onChange={handleEmail} placeholder="Your Email"/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
  );
}

export default App;
