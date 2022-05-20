import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const product=[
      {name:'Photoshop',price:'$120'},
      {name:'Window',price:'$220'},
      {name:'Illustrator',price:'$250'},
      {name:'El Primimum',price:'$320'}
    ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react</p>
         
         <Counter></Counter>

         <Users></Users>

        {
          product.map(pd=> <Products product={pd}></Products>)
        }
   
        
        <Person name="Mitul"></Person>
        <Person name="Azad"></Person>
        <Person name="Fahim"></Person>
        <Person name="Faisol"></Person>
      </header>
    </div>
  );
}

//USed Data load

function Users(){
  const [user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
},[])
  return (
    <div>
      <h1>User</h1>
      <ol>
        {
        user.map(user=> <li>{user.name}</li>)
        }
      </ol>
     
    </div>
  )
}


//Increase Decrease counter

function Counter(){
 const [count,setCount]=useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}> Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

//Use State 

function Products(props){
  const StyleType = {
    border:'2px solid red',
    padding:'10px',
    marginBottom:'5px',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    color:'black'
  }
  
  const {name,price}=props.product;
  return (
    <div style={StyleType}>
       <h3>{name}</h3>
       <h5>{price}</h5>
       <button>Buy Now</button>
    </div>
  )
}

//Componenet 

function Person(props){
  const StyleType = {
    border:'2px solid red',
    padding:'10px',
    marginBottom:'5px'
  }
  
  return (
    <div style={StyleType}>
      <h1>Name: {props.name}</h1>
    </div>
    )
}

export default App;
