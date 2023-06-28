import { useReducer, useState, useRef } from "react";
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const initState = {
    job: '',
    jobs: []
}


const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const reducer = (state, action) => {
    let newState
   
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:

            newState = {
                ...state,
                job: [...state.jobs, action.payload]
            }
            break;
        default:
            throw new Error('Something bad happened.');

    }
    
    return newState
}
function UseReducer() {
    // const initState=0

    // const UP_ACTION='up'
    // const DOWN_ACTION='down'

    // const reducer=(state,action)=>{
    // switch (action) {
    //     case UP_ACTION:
    //         return state+1
    //         break;
    //     case DOWN_ACTION:
    //         return state-1
    //         break;

    //     default:
    //         throw new Error('Something bad happened.');
    //         break;
    // }
    // }

    // const [count, dispath] =useReducer(reducer,initState)

    //     return (
    //         <>
    //             <h1>{count}</h1>
    //             <button
    //                 onClick={() => dispath(DOWN_ACTION)}
    //             >
    //                 down
    //             </button>

    //             <button
    //                 onClick={() => dispath(UP_ACTION)}
    //             >
    //                 up

    //             </button>

    //         </>
    //     );

    const inputRef = useRef()


    const [state, dispath] = useReducer(reducer, initState)
    const { job, jobs } = state


    const handleSubmit = () => {
        dispath(addJob(job))
        dispath(setJob(''))

    }
    return (

        <>
            <h3>todo</h3>
            <input
                value={job}
                placeholder="Enter todo...."
                onChange={e => {
                    dispath(setJob(e.target.value))
                }}
            />
            <button
                ref={inputRef}
                onClick={handleSubmit}
            >
                ADD
            </button>
            <ul>

                {jobs.map((job, index) => (

                    <li key={index}>{job} &times;</li>

                ))}
            </ul>
        </>
    )
}

export default UseReducer;