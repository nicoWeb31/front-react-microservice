import React,{useState} from 'react';
import axios from 'axios';




const CommentCreate = ({postId}) => {

    const [comment,setComment] = useState('');


    const sendComment = async(com) => {

        await axios.post(`http://localhost:4005/posts/${postId}/comments`,{com})

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
                    <input type="text" />
                </div>
                <button type="submit" className="btn btn-primary" value={comment} onChange={e=>setComment(e.target.value)}>send</button>
            </form>
        </div>
    )
}

export default CommentCreate
