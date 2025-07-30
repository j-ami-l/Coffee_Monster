
import './App.css'

function App() {

  const handleform = e =>{
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    fetch("http://localhost:3000/add" , {
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email})

    })
    .then(res => res.json())
    .then(data => {
      console.log("after sending data to server" , data);
      
    })
    
    e.target.reset();
    //console.log(name , email)
  }

  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
