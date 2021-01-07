import React,{useState} from 'react';
import axios from 'axios';

const PostCreate = () => {


    const [title,setTitle] = useState('');



    const handleSubmit = async(e)=>{
        e.preventDefault();

        await axios.post('http://localhost:4000/posts',{title})

        setTitle('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">

            <div className="form-group">
                <label> title </label>
                <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                <button className="btn btn-primary" type='submit'>
                    Submit
                </button>

            </div>
            </div>
            
        </form>
    )
}

export default PostCreate
