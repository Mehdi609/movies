import { useEffect, useState } from "react"

import React from "react"
import { MyVoiture } from './App.js'
import axios from "axios"
const inputClass = "border "


export default function Form() {



 console.log(Response.prototype );

  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [min, setMin] = useState("")

  useEffect(()=>console.log(1111), [nom])

  const [users, setUsers] = useState([])
  const test = {
    a:"a",
    b:"b",
    a:"c"
  }
  console.log(test);

  function abcd(){
    setNom('mehdi');
  }
  function checkLength(val){
    val.length < 4 ? setMin('minimum 4 character') : setMin('')
  }
 

  let hello = () => console.log('console from div', nom);
  


  function onSubmit(e){
    e.preventDefault()
    const newUser = {
      nom,
      email,
      date
    }

   
    setUsers((prevValue) => [...prevValue, newUser])

    setNom("")
    setEmail("")
    setDate("")
  }
 

    useEffect(()=>{
      const getData=async ()=>{
     
      const users= await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(users.data);
  
      }
      getData()
    },[])


  // let avv = axios.get('https://jsonplaceholder.typicode.com/users')
  // console.log(avv);
  // fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
  //   console.log(response.json());
    
  // }, function(){
  //   console.log('err');
  // })
  // .then(function(data){
  //   console.log('mehdi');
  //   console.log(data);
  // })
 
  console.log('hello world');
  

  return (

    <div className="min-h-screen  flex flex-col items-center justify-center">
 <MyVoiture method={abcd}/>
  {hello()}
      <form onSubmit={onSubmit} className="flex flex-col  gap-2 w-[300px] bg-blue-300 shadow rounded-sm p-5 "  >
        <h1 className="text-center">Inscription</h1>    
        <div>
          <label>Nom: </label>
          <input 
          value={nom}
          onChange={(e) => setNom(e.target.value)} 
          required 
          className={inputClass} 
          type="text" />
        </div>

        <div>
          <label>Email: </label>
          <input 
      
          onChange={(e) => {
            console.log('hello');
            setEmail(e.target.value)
            
            checkLength(e.target.value)
            return
          }}
          required 
          className={inputClass} 
          value={email}
          type="email" />
        </div>
       < span style={{color:'red'}}>{min}</span>
        <div>
          <label>Date: </label>
          <input 
          required
           className={inputClass}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
             />
        </div>


        <button className="bg-slate-200 hover:bg-slate-500" >Sinscrire</button>

      </form>

      {users.length > 0  }
      
    </div>
  )
}


    