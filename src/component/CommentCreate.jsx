import React,{useState} from 'react';
import axios from 'axios';




const CommentCreate = ({postId}) => {

    const [comment,setComment] = useState('');


    const sendComment = async(data) => {

        await axios.post(`http://localhost:4005/posts/${postId}/comments`,{content: data},{headers : {'Content-Type':'application/json'}})
        console.log(comment)

    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        sendComment(comment);
        setComment('')
    }
    

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label>new comment </label>
                    <input type="text" value={comment} onChange={e=>setComment(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary"  >send</button>
            </form>
        </div>
    )
}

export default CommentCreate
