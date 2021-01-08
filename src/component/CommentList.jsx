import React from "react";

const CommentList = ({ comments }) => {
    const renderListCopmment = comments.map((com) => {

        let content;

        if(com.status === 'approved'){
            content = com.content;
        }

        if(com.status === 'pending'){
            content = 'This comment is awaiting moderation'
        }

        if(com.status === 'rejected'){
            content = 'This comment has been rejected'
        }


        return <li key={com.id}>{content}</li>;
    });

    return (
        <div>
            <ul>{renderListCopmment}</ul>
        </div>
    );
};

export default CommentList;
