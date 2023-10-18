"use client"
import { useState, useEffect } from "react"
import { v4 } from "uuid"


export default function Home() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  // wird beim ersten laden geladen, also die Funktion innerhalb von useEffect
  useEffect(() => {
    // wird einmal beim first render geladen
    // wir machen einen call zum endpoint /api/todos -> to get the todos from our database
    fetch("/api/todos", {method: "GET"})
      // wird bekommen die Daten vom server -> wir machen decoding von json zu js object mit res.json() method
      .then(res => res.json())
      // wir nehmen das js object von 👆 und updaten unser stat mit setTodos(todos)
      .then(todos => setTodos(todos))

  }, [])

  // wird jedes Mal getriggert wenn wir etwas beim Input eintippen
  // und setzt den State von inputValue mit dem Wert welcher im Input eingegeben wurde
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  // wird getriggert wenn wir auf den Button Add my todo klicken
  const handleAdd = () => {
    // wir erstellen ein todo 👇
    const todo = { id: v4(), description: inputValue }
    // wir updaten unser state wmit setTodos([...todos, todo])
    setTodos([...todos, todo])
    // wir machen einen call  to the database /api/todos -> to save our newly created todo
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todo)
    }).then(x => x).catch(e => console.log(e))
  }

  return (
    <main>
      <h1>Meine Todo App</h1>
      <input onInput={handleInput} type="text" placeholder="your todo"/>
      <button onClick={handleAdd}>Add my todo</button>
      {todos.map(todo => <li key={todo.id}>{todo.id} | {todo.description}</li>)}
    </main>
  )
}
