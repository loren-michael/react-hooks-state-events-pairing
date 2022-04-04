import React from 'react'

function CommentList({ handleHideComments, comments }) {

    return (
        <div id="comments" className="" >
            <h2>{comments.length} Comments</h2>
            {comments.map(comment => {
                return <div>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                </div>
            })}
        </div>
    )
};

export default CommentList