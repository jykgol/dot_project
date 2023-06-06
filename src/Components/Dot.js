import React from "react";
import Comment from "./Comment";

function Dot(props) {
let DotClick = (e) => {
    props.DotInputChangeActive(props.id);
}
let InputChange = (e) => {
    let text = e.target.value;
    props.DotInputOnChange(props.id,text)
}
let InputEnter = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        props.DotInputOnAdd(props.id);
    }

}
let DotDoubleClick = () => {
    props.DotDelete(props.id);
}
let ChrollAction = () => {
    props.OnChangeDotColor(props.id);
}
let CommentData = props.Comments.map(el => <Comment key={el.id} id={el.id} text={el.text} color={el.color} />)
    return (
        <div className="dot_Box"   style={
            {
                left: props.x,
                top: props.y,
                width: props.radius,
            }
        }>
            <div className="dot" onDoubleClick={DotDoubleClick} onClick={DotClick}  onWheel={ChrollAction}
                style={
                    {
                        backgroundColor: props.color,
                    }
                }></div>
            <div className="modal">
                <input type="text" value={props.input} onChange={InputChange} onKeyDown={InputEnter} 
                hidden={!props.inputActive} />
            </div>
            {CommentData}
        </div>

    );
}

export default Dot;