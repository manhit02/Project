
// const post=React.createElement(
// 'div',
// {
// className:'post-name',
// },
// React.createElement('h2',{title:"Hoc react tai f8"},'reactJs'),
// React.createElement('p',null,'reactJs')
// );
// console.log(post)
// react 17
// const root=document.getElementById('root')
// ReactDOM.createRoot(
//     post,root
// )
// react 18
// const container=document.getElementById('root')
// const root=ReactDOM.createRoot(container)
// root.render(post)
// jsx
// const courses = [{ name: "HTML, CSS" }, { name: "Reponsive" }, { name: "REeacttjs" }]
// const container = document.getElementById('root')
// const post =
//     <ul>
//      {  courses.map((course,index) =>  (
//         <li key={index}>{course.name}</li>
//        ))
//        }
//     </ul>
// const root = ReactDOM.createRoot(container)
// root.render(post)
// console.log(1)

// in nhieu e 

// const container = document.getElementById('root')
// const post =
//     <React.Fragment>
//         <h1>sadas</h1>
//         <h2>sadas</h2>
//     </React.Fragment>
// const root = ReactDOM.createRoot(container)
// root.render(post)

// // React element types

// function Header(params) {
//     return <div>
//         hahahaahah
//     </div>
// }
// class Content extends React.Component {
//     render() { 
//         return (  
//             <div>
//                 hahahaha
//             </div>
//         );
//     }
// }


// const container = document.getElementById('root')
// const post =
// <div className="haha">
//     <Header />
//     <Content />
// </div>

// const root = ReactDOM.createRoot(container)
// root.render(post)

// // bt

// class PostItem extends React.Component {
//     render() { 
//         return ( 
//             <div className="post-item">
//             <img src='https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg'/>
//             <h2 className="post-description">Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế </h2>
//             <p className="post-info">Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham </p>
//         </div>
//          )
//     }
// }

// const container = document.getElementById('root')
// const post =
// <div className="Posts-list">
//     <PostItem />
//     <PostItem />
//     <PostItem />
// </div>

// const root = ReactDOM.createRoot(container)
// root.render(post)

// Props là gì? Dùng props khi nào?
// cac trinh bay project

// // 1. tao App.js
//     function App() {
//         return
//         (
//            <div className="wrapper">

//            </div>
//         )
//     }
// // 2.tao index.js
// React.render(<App />,document.getElementById("root"))

function PostItem(props) {
    console.log(props)
    return (
        <div className="post-item">
            <label htmlFor="haha">kkk</label>
            <input id="haha" />
            <img src={props.src} />
            <h2 className="post-description">{props.description}</h2>
            <p className="post-info">{props.info} </p>
        </div>
    )
}



function App() {
    return (
        <div id="wrapper">
            <PostItem
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
                description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
                info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
            />
            <PostItem
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
                description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
                info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
            />
            <PostItem
                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
                description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
                info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
            />


        </div>
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)