import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from './utils';
import './styles.scss';

const CommentBox = ({comment}) => {
    const {
        id,
        name,
        created,
        message
    } = comment;
    
    return (
        <div 
            id={id} 
            role="comment"
            tabIndex="0"
            className="CommentBox-Wrapper" 
            >
            <div className="CommentBox-Message">
                {message}
            </div>
            <div className="CommentBox-Date">
                {`${name} on ${formatDate(created)}`}
            </div>
        </div>
    );
};

CommentBox.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    created: PropTypes.string,
    message: PropTypes.string,
};

export default CommentBox;