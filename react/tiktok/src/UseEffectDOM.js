import { useEffect, useState } from 'react'
// const tabs = ['posts', 'comments', 'albums']

function UseEffectDOM() {

    // const [posts, setPosts] = useState([])
    // const [title, setTitle] = useState('')
    // const [type, setType] = useState('posts')
    // const [goToTop, setGoToTop] = useState(false)
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             setPosts(result)
    //         })

    // }, [type])
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setGoToTop(window.scrollY >= 200)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    // return ()=>{
    //     window.removeEventListener('scroll',handleScroll)
    // }
    // }, [])
    // return (
    //     <>
    //         {goToTop && (<button
    //             style={{
    //                 position: 'fixed',
    //                 right: 20,
    //                 bottom: 20
    //             }}
    //         >
    //             gototop
    //         </button>)}



    //         {tabs.map(tab => (
    //             <button
    //                 key={tab}
    //                 onClick={() => setType(tab)}
    //             >
    //                 {tab}
    //             </button>



    //         ))}
    //         <input
    //             value={title}
    //             onChange={e => setTitle(e.target.value)}
    //         />
    //         <ul>
    //             {posts.map(
    //                 (post) => (
    //                     <li style={{
    //                         color: 'red', listStyle: 'none',
    //                         fontFamily: 'fantasy'
    //                     }} key={post.id}>{post.title || post.name}</li>
    //                 )
    //             )}
    //         </ul>

    //     </>
    // );


//     const [width, setWidth] = useState(window.innerWidth)
//     useEffect(() => {
//         const handleResize=()=>{
// setWidth(window.resize)
//         }
// window.addEventListener('resize',handleResize)
//       return () => {
// window.removeEventListener('resize',handleResize)
        
//       };
//     }, [])
//     return (
//     <>
//     <h1>{width}</h1>
//     </>)
// const [countDown, setCountDown] = useState(180)

// useEffect(() => {
//     const timeId=setInterval(() => {
//         setCountDown(prevState=>prevState-1)
//     }, 1000);

//   return () => {
//     clearInterval(timeId)
//   };
// }, [])
// return(
//     <>
//     <h1>{countDown}</h1>
//     </>
// )
// const [avata, setAvata] = useState()
// useEffect(() => {
//   return () => {
    
//    avata && URL.revokeObjectURL(avata.preView)
//   };
// }, [avata])
// const handlePreviewAvatar=(e)=>{
//     const file=e.target.files[0]
//     file.preView=URL.createObjectURL(file)
//    setAvata(file)
// }

// return(
//     <>
//     <input
//     type='file'
//     onChange={handlePreviewAvatar}
//     />
//     {avata&&(<img
//     src={avata.preView} alt="" width='80%'
//     />)}
//     </>
// )
const lessons=[
    {
        id:1,
        name:"haha"
    },
    {
        id:2,
        name:"haha2"
    },
    {
        id:3,
        name:"haha3"
    }
]
const [lessonId, setLessonId] = useState(1)

useEffect(() => {
    const handleComment=({detail})=>{
        console.log(detail)
    }
    window.addEventListener(`lesson-${lessonId}`,handleComment)
  return () => {
    window.removeEventListener(`lesson-${lessonId}`,handleComment )
  };
}, [lessonId])
return(
    <>
    <ul>
        {lessons.map(
            lesson=>(
<li
key={lesson.id}
style={{
    color:lessonId===lesson.id?
    'red':
    '#333'
}}
onClick={()=>setLessonId(lesson.id)}
>
    {lesson.name}
</li>
        )
        )}
    </ul>
    </>
)

// return(
//     <>
    
//     </>
// )
}

export default UseEffectDOM;
