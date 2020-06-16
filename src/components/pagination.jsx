import React from 'react'

const Pagination = ({tasks, changePage,tasksPerPage}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <ul className='pagination justify-content-center'>
            {pageNumbers.length > 0 && <span>Pages: </span>}
            {pageNumbers.map(number => 
                <li key={number} className='page-item'>
                    <a href="#" onClick={() => changePage(number)} className="page-link">{number}</a>
                </li>
            )}
        </ul>
    )
}

export default Pagination
