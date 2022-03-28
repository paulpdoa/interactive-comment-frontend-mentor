import { createSlice } from '@reduxjs/toolkit';
import Datas from '../data.json';

export const hoverSlice = createSlice({
    name:"hover",
    initialState: { value: false },
    reducers: {
        changeHover: (state,action) => {
            Datas.comments.map((data) => {
                if(data.id === action.payload.id) {
                    state.value = !state.value
                }
               return data
            })
        }

    }
})


export const { changeHover } = hoverSlice.actions;
export default hoverSlice.reducer;