import { useContext } from 'react';
import { TodoContext } from '../Components/Context';
import '../Styles/TodoCounter.css';

function TodoCounter() {
  const {completedTodos, totalTodos} =useContext(TodoContext)
  if(totalTodos<completedTodos){
    let acu = totalTodos;
    totalTodos=completedTodos;
    completedTodos=acu;
  }
  return(
    <h1 className="TodoCounter">
      {totalTodos === completedTodos? 
        `¡Tareas completadas!`: 
        `Has completado ${completedTodos} de ${totalTodos} tareas`}
    </h1>
  )
}

export {TodoCounter};