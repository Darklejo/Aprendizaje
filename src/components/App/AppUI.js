import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodo } from '../CreateTodo';

const AppUI = ( { totalToDo, completedTodo, searchValue, setSearchValue, searchedTodo, toggleToDo, deleteTodo} )=>{
    return ( 
        <div className='App'>
          <div className='contenedorPrincipal'>
        
            <TodoCounter total={totalToDo} completed={completedTodo}/>
            <TodoSearch searchValue={ searchValue }  setSearchValue={setSearchValue} />
        
            <TodoList>
              { searchedTodo.map( todo => (  
                  <TodoItem  mensaje = { todo.text } key = { todo.text } completed ={todo.Completed}
                    onCompleted = { ()=>{ toggleToDo(todo.text) }}
                    onDelete = { () => { deleteTodo(todo.text); }} 
                  /> 
                )) 
              }
            </TodoList>
            
            <CreateTodo/>
            
          </div>
        </div>
    );
}

export { AppUI }
