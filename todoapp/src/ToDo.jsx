import { useState } from "react";

const tasks = [
    {id:1, text:"zadanie 1"},
    {id:2, text:"zadanie 2"},
    {id:3, text:"zadanie 3"},
    {id:4, text:"zadanie 4"},
    {id:5, text:"zadanie 5"}
]

const ToDo = () => {
    const [todos, setToDos] = useState(tasks)

    const removeTaskHandler = (taskId) => {
        const newTasks = todos.filter( t => t.id !== taskId)
        setToDos(newTasks)
    }

    return(
        <>
        <h1>komponent todo</h1>
        <ul>
            {
                tasks.map(t =>(
                    <li style= { {color:"blue", fontSize:"19px", marginBottom:"10px", backgroundColor:"black"} } key={t.id}>
                        {t.text}

                        <button onClick={() => removeTaskHandler(t.id)}>usun zadanie</button>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default ToDo;