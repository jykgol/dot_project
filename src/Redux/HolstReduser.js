const AddDotCase = "AddDotCase";
const DotDeleteCase = "DotDeleteCase";
const DotInputOnChangeCase = "DotInputOnChangeCase";
const DotInputOnAddCase = "DotInputOnAddCase";
const DotInputChangeActiveCase = "DotInputChangeActiveCase";
const OnChangeDotColorCase = "OnChangeDotColorCase";



let initialstate = {
    Colors: [
        { color: "red" },
        { color: "green" },
        { color: "blue" },
        { color: "grey" },
        { color: "chartreuse" },
        { color: "coral" },
        { color: "crimson" },
        { color: "darkmagenta" },
        { color: "darkslategray" },
        { color: "gold" },
    ],
    Dots: [
    ],
};

const HolstReduser = (state = initialstate, action) => {
    switch (action.type) {

        case AddDotCase: {
            return {
                ...state, Dots: [...state.Dots,
                {
                    id: state.Dots.length === 0 ? 0 :  state.Dots[state.Dots.length - 1].id + 1 ,
                    x: action.data.x, y: action.data.y, radius: action.data.radius, color: state.Colors[getRandomNum(0, state.Colors.length - 1)].color, Comments: []
                }]
            }
        }

        case DotInputOnChangeCase: {
            let newDots = state.Dots.map(el => {
                if (el.id === action.data.id) {
                    return { ...el, input: action.data.text }
                }
                else {
                    return el;
                }
            })
            return { ...state, Dots: newDots };
        }

        case DotInputOnAddCase: {

            let newDots = state.Dots.map(el => {
                if (el.id === action.data.id) {
                    let newComment = {
                        id: el.Comments.length,
                        text: el.input,
                        color: state.Colors[getRandomNum(0, state.Colors.length - 1)].color,
                    }
                    return { ...el, input: "", Comments: [...el.Comments, newComment] }
                }
                else {
                    return el;
                }
            })
            return { ...state, Dots: newDots };
        }

        case DotDeleteCase: {
            let dotsCopy = [...state.Dots];
            console.log(dotsCopy)
            let index = dotsCopy.findIndex(el => el.id === action.data.id);
            if (index !== -1) {
                dotsCopy.splice(index, 1);
            }

            return { ...state, Dots: dotsCopy };
        }

        case DotInputChangeActiveCase: {
            let newDots = state.Dots.map(el => {
                if (el.id === action.data.id) {
                    return { ...el, inputActive: !el.inputActive}
                }
                else {
                    return el;
                }
            })
            return { ...state, Dots: newDots };
        }

        case OnChangeDotColorCase: {
            let newDots = state.Dots.map(el => {
                if (el.id === action.data.id) {
                    return { ...el, color: state.Colors[getRandomNum(0, state.Colors.length - 1)].color}
                }
                else {
                    return el;
                }
            })
            return { ...state, Dots: newDots };

        }


        default: return state;
    }

};

let getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export let AddDot = (x, y, radius) => ({ type: AddDotCase, data: { x, y, radius } });
export let DotInputOnChange = (id, text) => ({ type: DotInputOnChangeCase, data: { id, text } });
export let DotInputOnAdd = (id) => ({ type: DotInputOnAddCase, data: { id } });
export let DotDelete = (id) => ({ type: DotDeleteCase, data: { id } });
export let DotInputChangeActive = (id) => ({ type: DotInputChangeActiveCase, data: { id } });
export let OnChangeDotColor = (id) => ({ type: OnChangeDotColorCase, data: { id } });





export default HolstReduser;

