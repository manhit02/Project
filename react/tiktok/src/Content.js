import{useEffect,useState,memo} from 'react'
const tabs=['posts','comments','albums']
function Content({onIncrease}) {
    
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [type, setType] = useState('posts')
   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)    
            .then(response => response.json())
            .then(result => {
                setPosts(result)
            })
          
    },[type])
    return ( 
        <>

        {tabs.map(tab=>(
            <button
            key={tab}
            onClick={()=>setType(tab)}
            >
{tab}
            </button>

           

        ))}
        <input 
        value={title}
        onChange={e=>setTitle(e.target.value)}
        />
        <ul>
            {posts.map(
               (post)=>(
                <li style={{color:'red',  listStyle: 'none',
                fontFamily:'fantasy' 
            }} key={post.id}>{post.title||post.name}</li>
               )
            )}
        </ul>
        <button onClick={onIncrease}>click me!</button>
            
        </>
     );
}

export default memo(Content);