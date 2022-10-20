import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/tasks.class'
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
  
   const defaultTask = new Task('Pedro','Gonzalez', activo, 'pedrogonzalez@gmail.com');

    const changeState =() => {
        console.log('TODO: cambiar estado de una tarea');
    }
  
    return (
    
    <div>
        <div>
            {/* <h1>Your Tasks:</h1>  */}
        </div>

        {/* TODO: Aplicar un For/Map para rendereizar una lista de tareas */}

        <TaskComponent task={defaultTask}></TaskComponent>
    </div>

  );
};


export default TaskListComponent;