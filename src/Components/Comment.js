import React from "react";

function Comment(props) {

    return (
        <div className="Comment" style={{
            backgroundColor:props.color,
        }} >
            {props.text}
        </div>

    );
}

export default Comment;