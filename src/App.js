import React, { useState, useEffect } from "react";
import CommentBox from 'components/CommentBox';
import CommentForm from 'components/CommentForm';
import axios from 'axios';
import './App.scss';

function App() {
  const [comments, setComments] = useState([]);
    useEffect(()=>{
      axios.get(`/getComments`)
      .then(res => {
        setComments(res.data) })
      .catch(err => console.log(err))
    },[])

  return (
    <div className="App">
        <div className="CommentsWrapper">
          <CommentForm comments={comments} setComments={setComments}/>
          {comments?.map((comment, index) => 
            <CommentBox key={`comment-${index}`} comment={comment}/>
          )}
        </div>
    </div>
  );
}

export default App;
