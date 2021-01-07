import React,{useState, useEffect} from 'react';
import axios from 'axios';

const CommentList = ({postId}) => {

    const [comments,setComment] = useState([])
    console.log("🚀 ~ file: CommentList.jsx ~ line 7 ~ CommentList ~ comments", comments)

    
    useEffect(()=>{
        const getComments = async()=>{
            const {data} = await axios.get(`http://localhost:4005/posts/${postId}/comments`)
            setComment(data)
        }
        getComments()
    },[])


    const renderListCopmment = comments.map(com=>{
        return (
            <li key={com.id} >{com.content}</li>
        )
    })

    return (
        <div>
            <ul>
                {renderListCopmment}
            </ul>
        </div>
    )
}

export default CommentList
