import React, { useState } from 'react'
import { date } from '../date/date-creatore';
import Pagination from './pagination';

function CurrentTask({tasks,editStatus,filter,deleteTask}) {

    const filterTasks = (tasks, activeFilter) => {

        switch (activeFilter) {
          case 'done': {
            return tasks.filter(t => t.status);
          }
          case 'active': {
            return tasks.filter(t => !t.status);
          }
          default:
            return tasks;
        }
      }

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(5);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const portionTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);
    const filteredTasks = filterTasks(portionTasks, filter);

    const changePage = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            {filteredTasks.map((el,index) => 
                <div key={el.id} className='row justify-content-center box-container'>
                    {el.status === false 
                        ?   <i onClick={() => editStatus(el.id)} className="fa fa-circle-o" aria-hidden="true"></i> 
                        :   <i onClick={() => editStatus(el.id)} className="fa fa-check-circle-o" aria-hidden="true"></i>
                    }
                    <div className='box-task col-sm-6 col-md-6'>
                        <div className="number">Task <span>№{index + 1}</span></div>
                        <div className="date">{date(new Date())}</div>
                        <div className={el.status === false ? 'active' : 'done'}>
                            <span>{el.task}</span>
                        </div>
                    </div>
                    <i onClick={() => deleteTask(el.id)} className="fa fa-trash-o" aria-hidden="true"></i>
                </div>
            )}
            <Pagination tasks={tasks} 
                        changePage={changePage}  
                        tasksPerPage={tasksPerPage}
            />
        </div>
    )
}

export default CurrentTask
