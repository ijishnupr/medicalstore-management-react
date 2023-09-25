import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name: 'search',
        initialState: [
            {query:'',}
        ],
        reducers: {
            setsearch: (state, action) => { return action.payload },
            setquery:(state,action)=>{return state.query=action.payload}
        }
    }
)
export const { setsearch,setquery } = searchSlice.actions;

export default searchSlice.reducer;