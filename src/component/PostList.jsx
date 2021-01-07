import React,{useEffect,useState} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';

const PostList = () => {

const [posts,setPosts] = useState({})

    useEffect(()=>{

        const getPosts = async ()=>{
            const {data} =  await axios.get('http://localhost:4000/posts')
            setPosts(data)
        }

        getPosts()
    },[])

    console.log(posts)


    const renderedPost = Object.values(posts).map(post=>{
        return (
            <div className="card " style={{width:'30', marginBottom: '20px'}} key={post.id} >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        )
    })
    // console.log("🚀 ~ file: PostList.jsx ~ line 22 ~ PostList ~ renderedPost", renderedPost)
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPost}

        </div>
    )
}

export default PostList
