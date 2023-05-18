import { createSlice } from '@reduxjs/toolkit';
let changeStringReducer = createSlice({
    name: "Toggle",
    initialState: {
        string: "v1",
    },
    reducers: {
        changeText: (state) => {
            state.string=state.string=="v1"?"v2":"v1";
        }
    }
})
export default changeStringReducer.reducer;
export const {changeText} =changeStringReducer.actions;