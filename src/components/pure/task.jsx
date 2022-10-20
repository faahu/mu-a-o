import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/tasks.class'

const TaskComponent = ({task}) => {
    console.log(task);
  return (
    <div>
        
        <h2>
            Nombre: {task.Nombre}
        </h2>

        <h3>
            Apellido: {task.Apellido}
        </h3>

        <h4>
            Email: {task.Email}
        </h4>

        <h5>
            Conectado: {task.Conectado ? 'Activo' : 'Inactivo'}
        </h5>



    </div>
  );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
