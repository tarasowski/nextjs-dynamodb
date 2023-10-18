"use client"
import { useState } from "react"

export default function Input({todos}) {
    const [list, setList] = useState(todos)

    const handleSubmit = () => {
        console.log("submit")
        const todo = {id: "10", description: inputValue}
        setList([...list, todo])
        console.log(list)
        fetch(process.env.DOMAIN + "/api/todos", {
            method: "POST",
            body: JSON.stringify({id: "10", description: inputValue})
        }).then(x => x).catch(e => console.log(e))
    }
    return (
        <div>
            <input 
            onInput={handleInput}
            value={inputValue}
            type="text" 
            placeholder="Enter your todo" />
            <button onSubmit={handleSubmit}>Add my todo</button>
            {list.map(todo => <li key={todo.id}>{todo.id}</li>)}
        </div>
    )
}