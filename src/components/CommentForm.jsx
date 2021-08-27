import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';

const CommentForm = ({comments, setComments}) => {
    const [formInputs, setformInputs] = useState({
        name: '',
        message: ''
    });
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const formInputChange = (e) => {
        setformInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        })
    };

    const onSubmitComment = () => {
        if(!formInputs.name) setNameError(true);
        if(!formInputs.message) setMessageError(true);
        if(formInputs.name && formInputs.message) {
            axios.post(`/createComment`, formInputs)
                .then(res => {
                    setComments(comments.concat(formInputs));
                    setformInputs({
                        name: '',
                        message: ''
                    });
                })
                .catch(err => err);
        }
    };
    return (
        <div id="comment-form" 
            className="CommentForm-Wrapper" 
            >
            <p><b>Name</b></p>
            <input
                type="text"
                name="name"
                maxLength="50"
                value={formInputs.name}
                onChange={formInputChange} 
                onFocus={()=>setNameError(false)}
                placeholder={nameError && "Name is empty"}
                />
            
            <textarea 
                type="text" 
                className="CommentForm-Textarea" 
                name="message"
                maxLength="200"
                value={formInputs.message}
                onChange={formInputChange} 
                onFocus={()=>setMessageError(false)}
                placeholder={messageError && "Message is empty"}
                />
            <input type="submit" value="Comment" onClick={onSubmitComment}/>
        </div>
    );
};

export default CommentForm;