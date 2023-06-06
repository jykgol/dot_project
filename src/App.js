import './App.css';
import { connect } from "react-redux";
import { AddDot, DotInputOnChange, DotInputOnAdd, DotDelete, DotInputChangeActive,OnChangeDotColor } from "./Redux/HolstReduser"
import Dot from './Components/Dot';

function App(props) {
  let length = {
    x: "",
    y: "",
    xStart: "",
    yStart: "",
    len: "",
  };
  let OnRelease = (e) => {
    console.log(" out ")
    length.x = - length.xStart + e.clientX;
    length.y = - length.yStart + e.clientY;
    length.len = Math.sqrt(Math.pow(length.x, 2) + Math.pow(length.y, 2)) * 0.7;
    props.AddDot(length.xStart, length.yStart, length.len > 50 ? length.len : 50);
  }
  let OnClick = (e) => {
    console.log(" in ")

    length.xStart = e.clientX;
    length.yStart = e.clientY;

  }

  let AddDots = props.Holst_State.Dots.map(el =>
    <Dot key={el.id} id={el.id} x={el.x} y={el.y} radius={el.radius}
      color={el.color} input={el.input} inputActive={el.inputActive}
      DotInputOnAdd={props.DotInputOnAdd} DotInputOnChange={props.DotInputOnChange}
      DotDelete={props.DotDelete} DotInputChangeActive={props.DotInputChangeActive}
      Comments={el.Comments} OnChangeDotColor={props.OnChangeDotColor} />
  )

  return (
    <div className="App">
      <div className=" App_wraper">
        <div className='Holst' onMouseUp={OnRelease} onMouseDown={OnClick}></div>
        {AddDots}
      </div>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    Holst_State: state.Holst_State,
  }
}

const AppContainer = connect(mapStateToProps, { AddDot, DotInputOnChange, DotInputOnAdd, DotDelete, DotInputChangeActive, OnChangeDotColor })(App);

export default AppContainer;
