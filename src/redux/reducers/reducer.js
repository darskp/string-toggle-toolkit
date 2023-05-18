let initialState = {
    oldString: "version - 1"
}
let reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCRE": 
        return (action.payload=="version - 1"? {...state,oldString:"v2"}:
         { ...state,oldString:"version - 1"})
        default: return { ...state }
    }
}
export default reducer;