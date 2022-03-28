import { createSlice } from '@reduxjs/toolkit';
import Datas from '../data.json';

export const scoreSlice = createSlice({
    name: "score",
    initialState: { value: Datas },
    reducers: {
        addScore: (state,action) => {
            console.log(state.value.comments.map((data => data)))
        }
    }
})

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;