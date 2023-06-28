
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
// class PostItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return ( 
//             <div className="post-item">
//                         <label htmlFor="haha">kkk</label>
//                         <input id="haha" />
//                          <img src={this.props.src} />
//                          <h2 className="post-description">{this.props.description}</h2>
//                          <p className="post-info">{this.props.info} </p>
//                      </div>
//          );
//     }
// }

// export default PostItem;
// function PostItem(props) {
//     console.log(props)
//     return (
//         <div className="post-item">
//             <label htmlFor="haha">kkk</label>
//             <input id="haha" />
//             <img src={props.src} />
//             <h2 className="post-description">{props.description}</h2>
//             <p className="post-info">{props.info} </p>
//         </div>
//     )
// }



// function App() {
//     return (
//         <div id="wrapper">
//             <PostItem
//                 src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
//                 description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
//                 info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
//             />
//             <PostItem
//                 src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
//                 description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
//                 info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
//             />
//             <PostItem
//                 src="https://files.fullstack.edu.vn/f8-prod/blog_posts/6630/63fd6b687b938.jpg"
//                 description="1Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế "
//                 info="2Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham "
//             />


//         </div>
//     )
// }

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<App />)


// bt
const courses = [
    {
        "id": 15,
        "title": "HTML CSS Pro",
        "slug": "htmlcss",
        "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        "image": "courses/15/62f13d2424a47.png",
        "icon": "courses/15/62385d6c63dfa.png",
        "video_type": "upload",
        "video": null,
        "old_price": 2499000,
        "price": 1299000,
        "pre_order_price": 699000,
        "students_count": 2208,
        "is_pro": true,
        "is_coming_soon": false,
        "is_selling": true,
        "published_at": "2022-08-18T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        "video_url": "",
        "landing_page_url": "/landing/htmlcss",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 19,
        "title": "JavaScript Pro",
        "slug": "javascript-pro",
        "description": "Khóa học JavaScript Pro",
        "image": "courses/19/62f13cb607b4b.png",
        "icon": "courses/19/62f13cb685c81.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-04-30T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
        "video_url": "",
        "landing_page_url": "/landing/javascript-pro",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 20,
        "title": "ReactJS Pro",
        "slug": "reactjs-pro",
        "description": "Khóa học ReactJS Pro",
        "image": "courses/20/62f13dded314e.png",
        "icon": "courses/20/62f13ddf5e7f9.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-07-31T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13ddf5e7f9.png",
        "video_url": "",
        "landing_page_url": "/landing/reactjs-pro",
        "is_pre_order": false,
        "is_published": false
    }
]

// // c1
//   class CoursesItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return ( 
//             <div className="course-item">
//                     <h2>{this.props.title}</h2>
//                     <img src={this.props. image_url} />
//                     <h2 >{this.props.userProgress}</h2>
//                     <p >{this.props.description} </p>
//                 </div>
//          );
//     }
//   }


//   function App() {
//     return (
//         <CoursesItem 
//         title="ReactJS Pro"
//         image_url= "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png"
//         userProgress = "0"
//         description ="Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi."


//         />
//     )
// }

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<App />)
// //c2
// function CourseItem({course,onClick}) {
//     return(

//     <div>
//         <h2 onClick={()=>onClick(course)}>{course.title}</h2>
//         <img src={course.image_url} />
//         <p >{course.students_count}</p>
//         <p >{course.description} </p>
//     </div>
//     )
// }
// function App() {
//     const handleClick=(course)=> {
//         alert(course.title)
//     }
//     return (
//         <div className="wrapper">
//             {
//                 courses.map(course => (
//                     <CourseItem
//                         key={course.id}
//                         course={course}
//                         onClick={handleClick}
//                     />
//                 ))}
//         </div>
//     )
// }
// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<App />)


// function CourseItem({course,onClick}) {
//     return(

//     <div>
//         <h2 onClick={()=>onClick(course)}>{course.title}</h2>
//         <img src={course.image_url} />
//         <p >{course.students_count}</p>
//         <p >{course.description} </p>
//     </div>
//     )
// }
// function Button({title,href,onClick}) {
//     let Component='button'
//     const props={}
//     if(href){
//         Component='a'
//         props.href=href 
//     }
//     if(onClick){
//         props.onClick=onClick
//     }

// return(
//         <Component {...props}>{title}</Component>
// )}
// function App() {
   
//     return (
//         <div className="wrapper">
//             {
//               <Button
//               title="click me!"
//             //   href="https://www.google.com/"
//               onClick={()=>console.log(Math.random())}
//               /> 
//             }
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)




// hooks
