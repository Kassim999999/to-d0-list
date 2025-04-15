import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';
import Tod0list from './components/Tod0list';

let data = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  } 
]

function App() {
  const[todos, setTodos] = useState(data)
  console.log(data);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => setTodos(data))
    .catch(e => console.log(e))
  })
  
  return (
    <div className="App">
         <h1>Tod0 list</h1>
         <Tod0list todos = {todos} title = "this is a title"/>
    </div>
  );
}

export default App;
