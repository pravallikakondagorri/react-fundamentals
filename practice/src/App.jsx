//import "./APP.css"
import { use, useState } from "react"
function App() {
  const [count,setCount]=useState(0)
  const handleIncrement=()=>
  {
    setCount((prevCount)=>prevCount+1)
    console.log(count)
  }
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const [formData,setformData]=useState(
    {
      email:"",
      password:""
    }
  )
  
  const handleEmail=(event)=>
  {
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>
  {
    setPassword(event.target.value)
  }
  {/*const handleClick=(name)=>{
    console.log("you clicked the button")
    alert("hello"+name)
  }*/}
  const handleChange=(event)=>
  {
    //console.log(event.target.name)
    //console.log(event.target.value)
    setformData(
      {
        ...formData,
        [event.target.name]:event.target.value
      }
    )

  }
  const handleSubmit=(event)=>
  {
    event.preventDefault();
    alert(`Email:${formData.email}\n Password:${formData.password}\nyour are logged in`)
  }
  return(
    <div>
<form onSubmit={handleSubmit}>
  <input type="text" name="email"placeholder="type your email" onChange={handleChange}/>
<input type="password"name="password"placeholder="type your password"onChange={handleChange}/>
<button type="submit" onClick={handleSubmit}>login</button>
</form>
<p>{count}</p>
<button onClick={handleIncrement}>Increment</button>

    </div>
  )
}
  export default App;
