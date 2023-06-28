import { useRef, useState, useEffect } from 'react'

function UseRefHook() {
    const [count, setCount] = useState(60)
    const timeId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()
    useEffect(() => {
        prevCount.current = count
    }, [count])
    useEffect(()=>{
       
    })
    const handleStart = () => {
        timeId.current = setInterval(() => {

            setCount(prevCount => prevCount - 1)
        }, 1000);


    }


    const handleStop = () => {
        clearInterval(timeId.current)
    }
    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default UseRefHook;