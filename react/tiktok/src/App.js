import { useState } from "react";
import  Content  from './Content.js'
import  UseEffectDOM  from './UseEffectDOM.js'
import  UseLayoutEffectHook  from './UseLayoutEffectHook.js'
import UseRefHook from './UseRefHook.js';
import MemoHOC from './MemoHOC.js';
import UseMemo from './UseMemo.js';
import UseReducer from './UseReducer.js';

function App() {
  // const [counter, setCounter] = useState({
  //   name:"manh",
  //   age:"18",
  //   bio:"playvideosgame"
  // })
  // const handleTang = () => {
  //   setCounter({...counter,
  //   gg:"gg"
  //   })
  // }
  // return (
  //   <div className="App">
  //     <h1>{JSON.stringify(counter)}</h1>
  //     <button onClick={handleTang}>tang</button>
  //   </div>
  // );
  //   const gifts=[
  //     'CPU i9',
  //     'ram 32gb',
  //     'keyboard'
  //   ]

  //   const [gift, setGift] = useState()
  // const randomGift=()=>{
  //   const index=Math.floor(Math.random()*gifts.length)
  //   setGift(gifts[index])
  // }
  //   return (
  //       <div className="App">
  //         <h1>{gift||'chua cop  phan thuong'}</h1>
  //         <button onClick={randomGift}>lay thuong</button>
  //       </div>
  //     );
  // }


  // Two-way binding
  // const [name, setName] = useState('')
  //   const [email, setEmail] = useState('')
  //   const handleSubmit = () => {
  //     console.log({
  //       name,
  //       email
  //     })
  //   }
  //   return (
  //     <div className="App">
  //       <input
  //         value={name}
  //         onChange={e => setName(e.target.value)}
  //       />
  //       <input

  //         value={email}
  //         onChange={e => setEmail(e.target.value)}
  //       />

  //       <button

  //         onClick={handleSubmit}>regiter</button>
  //     </div>
  //   );
  // }
  // const courses = [
  //   {
  //     id: '1',
  //     name: 'html/css'
  //   }, {
  //     id: '2',
  //     name: 'react'
  //   },
  //   {
  //     id: '3',
  //     name: 'js'
  //   }
  // ]
  // const [checked, setChecked] = useState(2)
  // const handleSubmit = () => {

  // }
  // return (
  //   <div className="App">
  //     {
  //       courses.map(course => (
  //         <div key={course.id}>
  //           <input
  //             type="radio"
  //             checked={checked === course.id}
  //             onChange={() => {
  //               setChecked(course.id)
  //             }}
  //           />
  //           {course.name}

  //         </div>
  //       )
  //       )
  //     }
  //     <button onClick={handleSubmit}

  //     />
  //   </div>
  // );
  //   const courses = [
  //     {
  //       id: '1',
  //       name: 'html/css'
  //     }, {
  //       id: '2',
  //       name: 'react'
  //     },
  //     {
  //       id: '3',
  //       name: 'js'
  //     }
  //   ]
  //   const [checked, setChecked] = useState([])
  //   const handleCheck = (id) => {
  // setChecked(prev=>{
  //   const isChecked=checked.includes(id)
  //   if(isChecked){
  //     return checked.filter(item=>item!==id)
  //   }
  //   else{
  //     return [...prev,id]
  //   }
  // })
  //   }
  //   const handleSubmit = () => {
  // console.log({id:checked})
  //   }
  //   return (
  //     <div className="App">
  //       {
  //         courses.map(course => (
  //           <div key={course.id}>
  //             <input
  //               type="checkbox"
  //               checked={checked.includes(course.id)}
  //               onChange={() => {
  //                handleCheck(course.id)
  //               }}
  //             />
  //             {course.name}

  //           </div>
  //         )
  //         )
  //       }
  //       <button onClick={handleSubmit}

  //       />
  //     </div>
  //   );
  // todo-list
  
//   const [jobs, setJobs] = useState(()=>{
//   const storageJobs=JSON.parse(localStorage.getItem('jobs'))
//     return storageJobs??[]
//   })
//   const [job, setJob] = useState('')
  
//   const handleSubmit=()=>{
//     setJobs(prev=>{
//       const newJobs=[...prev,job]
//       const jsonJobs=JSON.stringify(newJobs)
// // save to local storage
//       localStorage.setItem('jobs',jsonJobs)
//       return newJobs
//     })
//     setJob('')

     
//   }
//   return (
//     <div className="App">
//       <input 
//       value={job}
//         onChange={e=>setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>add</button>
//       <ul>
//         {jobs.map((job,index)=>(
//           <li key={index}>{job}</li>

//         ))}
//       </ul>
//     </div>

//   )


// // mounted-unmoueted
// const [show, setShow] = useState(false)
// return(
//   <div>
//     <button onClick={()=>(setShow(!show))}>toggle</button>
// {show&&<Content

// />}
//   </div>
// )


// useEffect
const [show, setShow] = useState(false)
const [showHai, setShowHai] = useState(false)
const [showBa, setShowBa] = useState(false)
const [showBon, setShowBon] = useState(false)
const [showNam, setShowNam] = useState(false)
const [show6, setShow6] = useState(false)
return(
  <div>
     <button onClick={()=>(setShow(!show))}>toggle</button>
     <button onClick={()=>(setShowHai(!showHai))}>toggle2</button>
     <button onClick={()=>(setShowBa(!showBa))}>toggle3</button>
     <button onClick={()=>(setShowBon(!showBon))}>toggle4</button>
     <button onClick={()=>(setShowNam(!showNam))}>toggle5</button>
     <button onClick={()=>(setShow6(!show6))}>toggle6</button>

    {show &&  <Content/>}
    {showHai &&  <UseEffectDOM/>}
    {showBa &&  <UseRefHook/>}
    {showBon &&  <MemoHOC/>}
    {showNam &&  <UseMemo/>}
    {show6 &&  <UseReducer/>}
    
  </div>
)
}
export default App;
