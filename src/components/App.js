import React, { useState } from "react";
import video from "../data/video.js";
import CommentList from "./CommentList"

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function handleUpvote() {
    setUpvotes(upvotes + 1)
  }

  function handleDownvote() {
    setDownvotes(downvotes + 1)
  }

  function handleHideComments(event) {
    const commentDiv = document.getElementById("comments");
    if (commentDiv.className === "") {
        event.target.innerText = "Show Comments";
        commentDiv.className="hidden"
    } else if (commentDiv.className === "hidden") {
        event.target.innerText = "Hide Comments";
        commentDiv.className = "";
    }
}


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} views  |  Uploaded {video.createdAt}</p>
      <button onClick={handleUpvote} value={upvotes}> {upvotes} 👍 </button>
      <button onClick={handleDownvote} value={downvotes}> {downvotes} 👎 </button>
      <br></br>
      <button onClick={handleHideComments}> Hide Comments </button>
      <hr></hr>
      <CommentList 
        handleHideComments={handleHideComments} 
        comments={video.comments} 
        // hidden={hidden} 
      />
    </div>
  );
}

export default App;
